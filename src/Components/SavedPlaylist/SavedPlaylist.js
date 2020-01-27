import React from 'react';
import './SavedPlaylist.css';

class SavedPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            togglePlaylistDetails: false,
            togglePlaylistDetailsDetails: false
        }
        this.removePlaylist = this.removePlaylist.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.renderPlaylistDetails = this.renderPlaylistDetails.bind(this);
        this.togglePlaylistDetails = this.togglePlaylistDetails.bind(this);
        this.renderPlaylistDetailsDetails = this.renderPlaylistDetailsDetails.bind(this);
        this.togglePlaylistDetailsDetails = this.togglePlaylistDetailsDetails.bind(this);

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

    togglePlaylistDetailsDetails() {
        if (this.state.togglePlaylistDetailsDetails === false) {
            this.setState({togglePlaylistDetailsDetails: true})
        } else if (this.state.togglePlaylistDetailsDetails === true) {
            this.setState({togglePlaylistDetailsDetails: false})
        }  
    }

    // display a short notification upon Mouseover
    renderPlaylistDetailsDetails() {
        if (this.state.togglePlaylistDetailsDetails === true && this.state.togglePlaylistDetails === false) {
            return (
                <p>Show playlist details</p>
            )
        } else if (this.state.togglePlaylistDetailsDetails === true && this.state.togglePlaylistDetails === true) {
            return (
                <p>Hide playlist details</p>
            )
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
            <div className="Outer-div">
                <div className="PlaylistMain">
                    <div className="Playlist-information">
                        <h3>{this.props.playlist.name}</h3>
                        <p>{this.props.playlist.tracks.length} {this.props.playlist.tracks.length === 1 ? 'song' : 'songs'} &nbsp;&nbsp;
                            <button
                                className="Playlist-details" onClick={this.togglePlaylistDetails}
                                onMouseOver={this.togglePlaylistDetailsDetails}
                                onMouseOut={this.togglePlaylistDetailsDetails}><img className='Arrow-image' src="/images/arrow-down.jpg" />
                            </button>
                        </p>
                    </div>
                    {this.renderAction()}
                    <button className="Playlist-action" onClick={this.savePlaylist}>
                        <img className='Spotify-image' src="/images/spotify.jpg" />
                    </button>
                    <br /> <br /> 
                </div>
                <div><p>{this.renderPlaylistDetailsDetails()}</p></div>
                <br /> 
                <div><p>{this.renderPlaylistDetails()}</p></div>
            </div>
        )
    }
}

export default SavedPlaylist;