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
    }
    search(event) {
        this.props.onSearch(this.state.searchTerm);
        console.log(this.state.searchTerm)
        event.preventDefault();
    }

    handleTermChange(e) {
        this.setState({searchTerm: e.target.value});
        //console.log(this.state.searchTerm)
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;