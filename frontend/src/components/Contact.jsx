import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = ({listing}) => {

  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState('');

    useEffect(()=>{
        const fetchOwner = async()=>{
            try{

                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                setOwner(data);
            }catch(error){
                console.log(error);
            }
        };
        fetchOwner();
    },[listing.userRef]);

  return (
    <>
     {owner && (
        <div>
            <p>Contact <span>{owner.username}</span>{' '}
            for {' '} <span>{listing.name}</span>
            </p>
            <textarea name='message' id='message' value={message} 
            onChange={(e) => setMessage(e.target.value)} rows='2' placeholder='Enter your message here....'
            className='w-full border p-3 rounded-lg'>
            </textarea>

            <Link className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'> Send Message</Link>
        </div>
     )}
    </>
  )
}

export default Contact
