import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {

  const {currentUser} = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
       e.preventDefault();

      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('searchTerm', searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
  };

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if(searchTermFromUrl){
      setSearchTerm(searchTermFromUrl);
    }
  },[window.location.search]);

  return (
    <header className='bg-gray-300 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            <h1 className='text-slate-500 font-bold text-2xl bg-white w-66 flex p-4 rounded-xl'>Urban <span className='text-4xl text-slate-800'>Space</span> </h1>
        </Link>
            <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text'  placeholder='Search here...' className='bg-transparent focus:outline-none w-24 sm:w-64'
                 value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
            </form>
            <ul className='flex gap-4 items-center'>
                <Link to='/'>
                <li className='hidden sm:inline bg-slate-700 text-white p-2 rounded-lg hover:opacity-90'>Home</li>
                </Link>

                <Link
          to={'/search'}
          className='text-md sm:text-md text-white  bg-slate-700  p-2 rounded-lg'
        >
        Properties
        </Link>

                <Link to={'/create-listing'} className='bg-green-700 text-white p-2 rounded-md'>Add Property</Link>

                <Link to='/about'>
                <li className=' hidden sm:inline text-slate-900 p-2 rounded-lg hover:opacity-90 hover:underline'>About</li>
                </Link>
                <Link to='/profile'>
                {currentUser? (<img className='rounded-full h-9 w-9 object-cover border-2 border-solid border-slate-900'
                src={currentUser.avatar} alt='profile'/>
                ): ( <li className=' text-white  bg-slate-700 p-2 px-3 rounded-full'> Sign in</li>) }
                </Link>
                
            </ul>
        </div>
    </header>
  )
}

export default Header
