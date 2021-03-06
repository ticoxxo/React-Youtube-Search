import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
/**Importación de clases */
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//Create a new component, this component creates some html

const API_KEY = "AIzaSyBaGlz-B3e3KNOSKkfG-r4mWcirylTw4dI";



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideos:null
    };

    this.searchVideo('lo-fi')
   
}

 //Array de videos
  searchVideo(term){
  YTSearch({key:API_KEY,term:term},(videos) =>{
    //this.setState({videos:videos})   <--- Es lo mismo ya que key y value se llaman igual 
    this.setState({
      videos :videos,
      selectedVideos : videos[0]
    });
    
  });
}
   render(){
     const searchVideo = _.debounce((term) => {this.searchVideo(term)},300);
    return (
      <div>
        <SearchBar 
        searchVideo= {searchVideo} />
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList
        onVideoSelected = {selectedVideos => this.setState({selectedVideos})} 
        videos={this.state.videos}/>
        
      </div>
  );
   }
}

//Take this component generated html and put it in the DOM

ReactDOM.render(<App />,document.getElementById('container'));