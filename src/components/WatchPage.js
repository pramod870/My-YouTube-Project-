import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';



const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const selectedRegion = useSelector(store=> store.region.selectedRegion)
    const location = useLocation();
    const [videoInfo, setVideoInfo] = useState(null);
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();

  useEffect(()=>{
    
    dispatch(closeMenu());
  },[]);

  useEffect(()=>{
    if(location.state?.videoInfo){
      setVideoInfo(location.state.videoInfo);
    } else{
      fetchVideoDetails(videoId);
    }
  })
  const fetchVideoDetails = async (id) => {
    const response = await fetch(
      `${YOUTUBE_VIDEOS_API(selectedRegion)}`
    );
    const data = await response.json();

    console.log("snippet data", data);
    setVideoInfo(data.items[0]);
  };
  return (
    <div className='px-5 pt-4 rounded-lg'>
        <iframe width="1000" 
            height="550" 
            src={"https://www.youtube.com/embed/"+videoId} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>

        </iframe>

        <div className='pt-5'>
   
          {/* <h1 className='font-semibold'>{videoInfo.snippet?.channelTitle || "No Title available"}</h1>
          <p>{videoInfo.snippet?.description || "No Description"}</p> */}

  
        </div>
    </div>
 
  )
}

export default WatchPage;