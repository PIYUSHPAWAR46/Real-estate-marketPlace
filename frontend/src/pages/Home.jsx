import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import coverImg from '../assets/urbanspace.jpg';

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
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1  className='text-slate-700 font-bold text-3xl lg:text-6xl'>Urban Space</h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
        Urban Space is the best place to find your next perfect place to
          live. <br />We have wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-md sm:text-sm text-white font-bold hover:underline bg-slate-700 text-center p-2 rounded-3xl'
        >
          Let's get started...
        </Link>
        </div>
        <div className=' max-w-3xl'>
          <img className='rounded-tl-full ' src={coverImg} alt="coverimage" />
        </div>
      </div>


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


    </div>
  )
}

export default Home
