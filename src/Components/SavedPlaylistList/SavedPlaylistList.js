import React from 'react';
import './SavedPlaylistList.css';
import SavedPlaylist from '../SavedPlaylist/SavedPlaylist';

class SavedPlaylistList extends React.Component {
    render() {
        return (
            <div className="PlaylistList">
                {/*<!-- You will add a map method that renders a set of Track components  -->*/}
                {this.props.playlists.map((playlist) => {
                    return <SavedPlaylist playlist = {playlist} onRemovePlaylist={this.props.onRemovePlaylist}
                    onSavePlaylistFromPlaylists={this.props.onSavePlaylistFromPlaylists} isSaved={this.props.isSaved} />
                })}
            </div>
        )
    }
}

export default SavedPlaylistList;