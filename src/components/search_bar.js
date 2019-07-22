import React,{Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:''};
        
    }

    
    render(){
        return<div className="search-bar">
            <input 
            value={this.state.term}
            onChange= {event => this.onInputSearch(event.target.value)}/>
            </div>;
            
    }

    onInputSearch(term){
        this.setState({term});
        this.props.searchVideo(term);
    }

    
}

export default SearchBar;