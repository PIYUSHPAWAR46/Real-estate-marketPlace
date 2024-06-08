import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import coverImg from '../assets/urbanspace.jpg';
import { FaHouse } from "react-icons/fa6";

const Home = () => {
 
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  console.log(offerListings)

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);


  return (
    <div>
      <div className='flex items-center'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto bg-gray-200 shadow-xl rounded-2xl'>
        <h1  className='text-slate-700 font-bold text-3xl lg:text-6xl'>Urban Space</h1>
        <div className='text-gray-500 text-xs sm:text-sm'>
        Urban Space is the best place to find your next perfect place to
          live. <br />We have wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-md sm:text-lg text-white font-bold hover:underline bg-slate-700 items-center  justify-center p-2 rounded-3xl flex gap-2'
        >
        Properties<FaHouse />
        </Link>
        </div>
        <div className='max-w-3xl'>
          <img className='rounded-tl-full' src={coverImg} alt="coverimage" />
        </div>
      </div>

       {/* start image animation */}
      <div className='bg-gray-200 m-6 rounded-xl shadow-2xl'>
        <h1 className='text-4xl font-semibold flex flex-col items-center mt-20'>Our Services <span className='text-lg'>Find new & featured property located in Delhi, Delhi NCR & Mumbai city.</span></h1>
      <div class="flex min-h-screen items-center justify-center">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class=" text-3xl font-bold text-white">Delhi</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We offer an extensive collection of rental properties and also sells one in Delhi catering to various preferences and budgets.</p>
        
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Gurugaon</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We offer an extensive collection of rental properties and also sells one in Gurgaon catering to various preferences and budgets.</p>
        
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1564834552305-aea63611ff08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9pZGElMjBjaXR5fGVufDB8fDB8fHww" alt=''/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Noida</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We offer an extensive collection of rental properties and also sells one in Noida catering to various preferences and budgets.</p>
        
      </div>
    </div>
  </div>
  
</div>

      </div>
      {/* end */}


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
     {offerListings && offerListings.length >0 &&(
    <div >
    <div className='my-3'>
       <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
    </div>
    <div className='flex flex-wrap gap-4'>
    {offerListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
      ))}
    </div>
    </div>
  )}
  {rentListings && rentListings.length>0 && (
    <div>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
      </div>
      <div className='flex flex-wrap gap-4'>
        {rentListings.map((listing)=>(
          <ListingItem listing={listing} key={listing._id}/>
        ))}
      </div>
    </div>
  )}

{saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

{/* form page start */}
      <div >
      <div name = "Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white border-b">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className='mx-auto text-center'>
            <p className='text-4xl font-bold border-gray-500 border-b-4 inline'>Contact</p>
            <p className='py-4'>Submit the form below to get in touch with me:</p>
        </div>
        <div className='flex justify-center'>
            <form className=" flex flex-col w-full md:w-1/2" action="https://getform.io/f/4bf479bd-b10e-402e-bd5f-27269f6121b1" method='POST'>
                <input className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" type="text"  placeholder='Enter your name' name="name"/>
                <input type="text" placeholder='Enter your Email' className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="email"/>
                <textarea placeholder='Enter your message'  rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="message"></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send it!</button>
            </form>
        </div>
      </div>
    </div>
      </div>
      {/* end */}

      {/* start footer */}
      <>
      

      <footer className='bg-gray-800 text-white p-6'>
        <div className='flex justify-evenly gap-20'>
          
            <div className=''>
              <h1 className='text-slate-500 font-bold text-4xl bg-white w-72 flex p-4 rounded-xl'>Urban <span className='text-6xl text-slate-700'>Space</span> </h1>
              <h2 className='p-6'>Do You Need Help With Anything? </h2>
              <p>Go to the Contact form and asked your questions regarding any query related our services.</p>

            </div>
         

          <div className=''>
            
              <ul className=' flex flex-col items-center gap-4'>
                
                <h1 className='text-2xl font-semibold'>Layout</h1>
                <li className='text-gray-400'>Home Page</li>
                <li className='text-gray-400'>About Page</li>
                <li className='text-gray-400'>Property Page</li>
                <li className='text-gray-400'>Contact Page</li>
                <li className='text-gray-400'>Career</li>

              </ul>
            </div>

            <div className=''>
            
              <ul className=' flex flex-col items-center gap-4'>
                
                <h1 className='text-2xl font-semibold'>Company</h1>
                <li className='text-gray-400'>About</li>
                <li className='text-gray-400'>Blog</li>
                <li className='text-gray-400'>Pricing</li>
                <li className='text-gray-400'>Login</li>
                <li className='text-gray-400'>Services</li>
                

              </ul>
            </div>

            
          
        </div>
      </footer>
      <div className='bg-slate-500 border-2'>
        <span>© 2025 UrbanSpace. Designd By Piyush.</span>
      </div>
    </>
      {/* end */}

    </div>

    
  )
}

export default Home
