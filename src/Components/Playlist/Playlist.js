import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.reset = this.reset.bind(this);
        this.save = this.save.bind(this);
    }
    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
        //console.log(this.props.playlistName);
    }

    // added functionality that resets all saved tracks in Playlist
    reset() {
        this.props.onReset();
        document.getElementById('playlist').reset();
    }

    save() {
        this.props.onSave();
        document.getElementById('playlist').reset();
    }

    render() {
        return (
            <div className="Playlist">
                <form id="playlist">
                    <input defaultValue={this.props.playlistName} onChange={this.handleNameChange}/>
                </form>
                {/*<!-- Add a TrackList component -->*/}
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
                <button className="Playlist-save" onClick={this.reset}>RESET PLAYLIST</button>
                <button className="Playlist-save" onClick={this.save}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;