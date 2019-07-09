import React from 'react';

const VideoListItem = ({video,onVideoSelected}) => {
   

    const URL = video.snippet.thumbnails.default.url;
    function add(e){
        e.preventDefault()
        console.log("alv");
    }
    return (
        <li onClick={()=> onVideoSelected(video)} className="list-group-item">
            <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={URL} />
              </div>

              <div className="media-body">

                  <div className="media-heading">{video.snippet.title}</div>

              </div>
            </div>
            
        </li>
    );
};

export default VideoListItem;