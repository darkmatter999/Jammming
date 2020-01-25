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
                    {/*<h1>
                        {this.props.playlists.slice(0, this.props.playlists.length)}
                    </h1>*/}
                    <SavedPlaylistList playlists={this.props.playlists} onRemovePlaylist={this.props.onRemovePlaylist} 
                    onSavePlaylistFromPlaylists={this.props.onSavePlaylistFromPlaylists} isRemoval={true} isSaved={this.props.isSaved} />
                    <br /> <br />
                    {/*Display a message beneath the 'Playlists' stating that the playlists has been saved to Spotify*/}
                    {this.props.isSaved ? (<p>PLAYLIST SAVED TO SPOTIFY</p>) : ''}
                </div>
            </div>
        )
    }
}

export default Playlists;

