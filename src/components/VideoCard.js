import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;  // Handle cases where info is undefined
  }

  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  const formatCount = (num)=>{
    if (num >= 1_000_000_000) return (num/1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M"; // Millions
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K"; 
    return num; 
  }

  return (
    <div className="p-4 m-2 w-80 rounded-lg shadow-md">
      {thumbnails && thumbnails.high && (
        <img alt="thumbnail" className='rounder-lg' src={thumbnails.medium.url} />
      )}
      <ul className="mt-2 cursor-pointer">
        <li className="font-semibold text-wrap">{title}</li>
        <li className="text-sm text-gray-500">{channelTitle}</li>
        <li className="text-sm text-gray-500">{formatCount(statistics?.viewCount || 0)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
