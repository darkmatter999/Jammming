import React from 'react';
import './Playlists.css';
import SavedPlaylistList from '../SavedPlaylistList/SavedPlaylistList';

class Playlists extends React.Component {
    render() {
        //console.log(this.props.playlists)
        return (
            <div className="Playlists">
                <h2>Playlists</h2>
                <div>
                    <SavedPlaylistList playlists={this.props.playlists} onRemovePlaylist={this.props.onRemovePlaylist} 
                    onSavePlaylistFromPlaylists={this.props.onSavePlaylistFromPlaylists} isRemoval={true} isSaved={this.props.isSaved} />
                    <br /> <br />
                    {/*Display a message beneath the 'Playlists' stating that the named playlist has been saved to Spotify*/}
                    {this.props.isSaved ? (<p>PLAYLIST {this.props.savedPlaylist} SAVED TO SPOTIFY</p>) : ''}
                </div>
            </div>
        )
    }
}

export default Playlists;

