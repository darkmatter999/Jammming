import React from 'react';
import './SavedPlaylist.css';

class SavedPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            togglePlaylistDetails: false
        }
        this.removePlaylist = this.removePlaylist.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.renderPlaylistDetails = this.renderPlaylistDetails.bind(this);
        this.togglePlaylistDetails = this.togglePlaylistDetails.bind(this);

    }
    renderAction() {
            return (
                <button className="Playlist-action" onClick={this.removePlaylist}>-</button>
            )
    }

    togglePlaylistDetails() {
        if (this.state.togglePlaylistDetails === true) {
            this.setState({togglePlaylistDetails: false})
        } else if (this.state.togglePlaylistDetails === false) {
            this.setState({togglePlaylistDetails: true})
        }
    }

    // show some details (track name, artist) of the playlist when a button is toggled (see above)
    renderPlaylistDetails() {
        
        const playlistDetails = [];
        if (this.state.togglePlaylistDetails) {
           for (let i = 0; i < this.props.playlist.tracks.length; i++) {
            playlistDetails.push(this.props.playlist.tracks[i].artist);
            playlistDetails.push(<br />);
            
            playlistDetails.push(this.props.playlist.tracks[i].name);
            playlistDetails.push(<br />);
            playlistDetails.push(<br />);
               
                }
            }
        return playlistDetails
        
       
    }

    removePlaylist() {
        this.props.onRemovePlaylist(this.props.playlist)
    }

    savePlaylist() {
        this.setState({isSaved: true})
        this.props.onSavePlaylistFromPlaylists(this.props.playlist);
    }

    render() {
        return (
            <div>
            <div className="PlaylistMain">
                <div className="Playlist-information">
                    <h3>{this.props.playlist.name}</h3>
                    <p>{this.props.playlist.tracks.length} {this.props.playlist.tracks.length === 1 ? 'song' : 'songs'} &nbsp;&nbsp;
                        <button
                            className="Playlist-details" onClick={this.togglePlaylistDetails}><img className='Arrow-image' src="/images/arrow-down.jpg" />
                        </button>
                    </p>
                </div>
                {this.renderAction()}
                <button className="Playlist-action" onClick={this.savePlaylist}>
                    <img className='Spotify-image' src="/images/spotify.jpg" />
                </button>
                <br /> <br />
                
            </div>
            <div><p>{this.renderPlaylistDetails()}</p></div>
            </div>
        )
    }
}

export default SavedPlaylist;