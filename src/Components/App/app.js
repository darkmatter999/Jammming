import React from 'react';
import './app.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      alert('song has already been added')
    } else {
      this.state.playlistTracks.push(track)
    }
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- Add a SearchBar component -->*/}
          <SearchBar />
          <div className="App-playlist">
            {/*<!-- Add a SearchResults component -->*/}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            {/*<!-- Add a Playlist component -->*/}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
