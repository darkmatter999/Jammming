import React from 'react';
import './Playlists.css';
import SavedPlaylistList from '../SavedPlaylistList/SavedPlaylistList';

class Playlists extends React.Component {
    render() {
        console.log(this.props.playlists)
        return (
            <div className="Playlists">
                <h2>Playlists</h2>
                <div>
                    {/*<h1>
                        {this.props.playlists.slice(0, this.props.playlists.length)}
                    </h1>*/}
                    <SavedPlaylistList playlists={this.props.playlists} onRemovePlaylist={this.props.onRemovePlaylist} isRemoval={true} />
                </div>
            </div>
        )
    }
}

export default Playlists;

