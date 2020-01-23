import React from 'react';
import './SavedPlaylist.css';

class SavedPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.removePlaylist = this.removePlaylist.bind(this)
    }
    renderAction() {
            return (
                <button className="Track-action" onClick={this.removePlaylist}>-</button>
            )
    }

    removePlaylist() {
        this.props.onRemovePlaylist(this.props.playlist)
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.playlist.name}</h3>
                    {<p>{this.props.playlist.tracks.length} </p>}
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default SavedPlaylist;