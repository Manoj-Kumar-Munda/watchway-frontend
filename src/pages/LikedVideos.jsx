import React from 'react'
import useLikedVideos from '../hooks/useLikedVideos'
import HorizontalVideoCard from '../components/HorizontalVideoCard';

const LikedVideos = () => {
    const {data, status} = useLikedVideos();
    if( status === "pending") return <div>Loading...</div>
    if( status === "error") return <div>Error</div>
  return (
    <div className='flex flex-col gap-4'>
      {
        data?.data?.map((video) => (
          <HorizontalVideoCard key={video._id} video={video?.videoInfo} />
        ))
      }
    </div>
  )
}

export default LikedVideos