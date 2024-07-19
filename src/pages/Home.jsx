import React from 'react'
import useCurrentUser from '../hooks/useCurrentUser';

const Home = () => {
  const { data, isError, error, isLoading } = useCurrentUser();

  console.log(data);
  return (
    <div className='bg-red-300 w-full min-h-screen'>Home</div>
  )
}

export default Home