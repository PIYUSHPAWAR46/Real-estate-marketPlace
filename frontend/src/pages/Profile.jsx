import { useEffect, useRef, useState } from "react";
import {useSelector } from "react-redux";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from "../firebase";

const Profile = () => {

  const fileRef = useRef(null);

  const {currentUser} = useSelector((state)=> state.user);
  const [file, setFile] = useState(undefined);
  //console.log(file)
  const [filepercentage, setFilePercentage] = useState(0);
  const [ fileUploadError, setFileUploadError] = useState(false);
  const [ formData, setFormData] = useState({});
  console.log(filepercentage);
  console.log(fileUploadError);
  console.log(formData)

// Craft rules based on data in firebase (storage->rule)
     // allow read; 
     // allow write: if 
     // request.resource.size < 2 * 1024 * 1024 (=2mb) &&
     // request.resource.contentType.matches('image/.*')

     useEffect(()=>{
      if(file){
        handleFileUpload(file);
      }
     },[file]);
     
     const handleFileUpload =(file)=>{
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
          (snapshot) =>{
            const progress = (snapshot.bytesTransferred /
            snapshot.totalBytes) * 100;
            //console.log(progress)
            setFilePercentage(Math.round(progress));
          },
          (error) =>{
              setFileUploadError(true);
          },
          ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>
               setFormData({...formData, avatar: downloadURL}) 
               )
          }
        )
     };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className="flex flex-col gap-4">
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*"/>

      <img onClick={()=> fileRef.current.click()}  src={formData.avatar || currentUser.avatar } alt="profile" className="rounded-full h-24 w-24 object-cover
       cursor-pointer self-center mt-2"/>

       <p className="text-sm self-center">
        {fileUploadError ? (
          <span className='text-red-700'>Error image upload (image must be less than 2 mb)</span>)
          : filepercentage> 0 && filepercentage< 100 ? (
            <span className='text-slate-700'>{`Uploading ${filepercentage}%`}</span>)
            : filepercentage === 100 ? (
              <span className='text-green-700'>Image successfully uploaded done</span>)
              : (
                ""
              )
        }
       </p>
       <input type='text' placeholder="username" defaultValue={currentUser.username} id="username" className="border p-3 rounded-lg"/>
       <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
          // onChange={handleChange}
        />
       <input
          type='password'
          placeholder='password'
          // onChange={handleChange}
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>

        {/* <Link className='bg-green-700 text-white p-3 rounded-lg 
        uppercase text-center hover:opacity-95' to={'/create-listing'}>Create Listing</Link> */}
      </form>
      <div className='flex justify-between mt-5'>
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className='text-red-700 cursor-pointer'> Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
