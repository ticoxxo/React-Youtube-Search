import React from 'react';

import VideoListItem from './video_list_item'

const VideoList = (props) =>{

    const videoArray = props.videos.map((video) =>{

    return <VideoListItem
              onVideoSelected={props.onVideoSelected}
              key={video.etag} 
              video={video} /> 
    });
    return (
       <ul className="col-md4 list-group"> 
          {videoArray}
        </ul> 
    );
}; 

export default VideoList;