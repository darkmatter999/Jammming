import React from 'react';
import './SavedPlaylist.css';

class SavedPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.removePlaylist = this.removePlaylist.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
    }
    renderAction() {
            return (
                <button className="Playlist-action" onClick={this.removePlaylist}>-</button>
            )
    }

    removePlaylist() {
        this.props.onRemovePlaylist(this.props.playlist)
    }

    savePlaylist() {
        this.props.onSavePlaylistFromPlaylists(this.props.playlist)
    }

    render() {
        return (
            <div className="PlaylistMain">
                <div className="Playlist-information">
                    <h3>{this.props.playlist.name}</h3>
                    <p>{this.props.playlist.tracks.length} </p>
                </div>
                {this.renderAction()}
                <button className="Playlist-action" onClick={this.savePlaylist}>SAVE</button>
            </div>
        )
    }
}

export default SavedPlaylist;