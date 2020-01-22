import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    search() {
        this.props.onSearch(this.state.searchTerm);
        console.log(this.state.searchTerm)
        //event.preventDefault();
    }

    //implements a method that listens for a press on the 'Enter' key and executes the 'search' method once pressed
    keyPress(e) {
        if (e.keyCode === 13) {
        //console.log(e.target.value);
            this.search()
    }
  }

    handleTermChange(e) {
        this.setState({searchTerm: e.target.value});
        //console.log(this.state.searchTerm)
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyDown={this.keyPress} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;