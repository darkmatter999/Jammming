import React from 'react';
import './app.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//For reference, here are the hard-coded 'Search Results'
/*
searchResults: [
        {name: '1999',
        artist: 'Prince',
        album: '1999',
        id: '1111'},
        {name: 'When Doves Cry',
        artist: 'Prince',
        album: 'Purple Rain',
        id: '2222'},
        {name: 'Space Oddity',
         artist: 'David Bowie',
         album: 'Space Oddity',
         id: '3333'}
      ],
  */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        
      ],
      playlistName: 'Playlist v1',
      playlistTracks: [
        {name: 'Space Oddity',
         artist: 'David Bowie',
         album: 'Space Oddity',
         id: '3333'},
        {name: 'Life On Mars?',
         artist: 'David Bowie',
         album: 'Hunky Dory',
         id: '4444'}
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      alert('song has already been added')
    } else {
      this.state.playlistTracks.push(track)
    }
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  removeTrack(track) {
      let tracks = this.state.playlistTracks.filter(toBeKeptTrack => toBeKeptTrack.id !== track.id);
      this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track);
  }

  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- Add a SearchBar component -->*/}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/*<!-- Add a SearchResults component -->*/}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            {/*<!-- Add a Playlist component -->*/}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
