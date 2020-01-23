import React from 'react';
import './SavedPlaylistList.css';
import SavedPlaylist from '../SavedPlaylist/SavedPlaylist';

class SavedPlaylistList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/*<!-- You will add a map method that renders a set of Track components  -->*/}
                {this.props.playlists.map((playlist) => {
                    return <SavedPlaylist playlist = {playlist} onAddPlaylist={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} />
                })}
            </div>
        )
    }
}

export default SavedPlaylistList;