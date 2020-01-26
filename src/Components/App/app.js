import React from 'react';
import './app.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Playlists from '../Playlists/Playlists';
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

//For reference, here are the hard-coded 'Search Results' and 'Playlist Tracks'
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
  */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        
      ],
      playlists: [],
      isSaved: false,
      savedPlaylist: ''
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.savePlaylistFromPlaylists = this.savePlaylistFromPlaylists.bind(this);
    this.resetPlaylist = this.resetPlaylist.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.removePlaylist = this.removePlaylist.bind(this);
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

  addPlaylist() {
    this.state.playlists.push({
      name: this.state.playlistName,
      tracks: this.state.playlistTracks,
    });
    this.setState({playlists: this.state.playlists});
    //console.log(this.state.playlists[0][0])
  }

  removeTrack(track) {
      //console.log(this.state.playlists)
      let tracks = this.state.playlistTracks.filter(toBeKeptTrack => toBeKeptTrack.id !== track.id);
      this.setState({playlistTracks: tracks});
  }

  // removes an individual playlist from the Playlist component
  removePlaylist(playlist) {
      //console.log(this.state.playlists)
      let newPlaylists = this.state.playlists.filter(toBeKeptPlaylist => toBeKeptPlaylist.name !== playlist.name);
      this.setState({playlists: newPlaylists})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  // added functionality that saves an individual playlist to Spotify from the Playlists component. Once saved, the playlist is removed from 'Playlists'
  savePlaylistFromPlaylists(playlist) {
    const trackUris = playlist.tracks.map(track => track.uri);
    Spotify.savePlaylist(playlist.name, trackUris)
    .then(() => {
      this.setState({isSaved: true});
      this.setState({savedPlaylist: playlist.name})
    })
    .then(() => {
      /* display the playlist in 'Playlists' for three seconds, then remove it once saved. The function in setTimeout must be defined as an
      arrow function because otherwise the 'this' wouldn't be in the scope of the 'savePlaylistFromPlaylists' method. For this, see also
      https://stackoverflow.com/questions/11714397/settimeout-scope-issue */
      const timeoutID = setTimeout(() => {
        let newPlaylists = this.state.playlists.filter(toBeKeptPlaylist => toBeKeptPlaylist.name !== playlist.name);
        this.setState({playlists: newPlaylists});
        this.setState({isSaved: false})
      }, 3000
      )
      
    })
    
    
  }

  // added functionality that resets all saved tracks in Playlist
  resetPlaylist() {
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
    });
    
  }

  search(term) {
    //console.log(this.state.playlistName);
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
            onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onReset={this.resetPlaylist} onAddPlaylist={this.addPlaylist} />
            <Playlists playlists={this.state.playlists} onRemovePlaylist={this.removePlaylist} 
            onSavePlaylistFromPlaylists={this.savePlaylistFromPlaylists} isSaved={this.state.isSaved} savedPlaylist={this.state.savedPlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
