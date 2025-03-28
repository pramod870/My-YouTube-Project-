import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const VideoContainer = () => {

    const selectedRegion = useSelector(store=> store.region.selectedRegion)

    const [videos, setVideos] = useState([]);
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API(selectedRegion));

    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }

  useEffect(()=>{
    getVideos();
  }, [selectedRegion])
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=> (
        <Link to={"/watch?v="+video.id}
        state={{videoInfo:video}} // pas entire video
        ><VideoCard key={video.id} info={video} /></Link>
        ))}

    </div>
  )
}

export default VideoContainer;