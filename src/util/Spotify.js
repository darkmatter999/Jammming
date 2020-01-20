import SearchBar from "../Components/SearchBar/SearchBar";

let accessToken;
const clientId = 'feeab8a12c9b43e9acd3ca668483d631';
const redirectUri = "http://localhost:3000/";

const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
            
            if (accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return accessToken;
            } else {
                window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            }
            
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        //console.log(accessToken)
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            
            if (!jsonResponse.tracks) {
                alert('no jsonResponse.tracks')
            } else {
                console.log(jsonResponse)
            }
            
            if (jsonResponse.tracks) {
                //console.log(jsonResponse)
                return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }))
                
                }
             else {
                //return [];
                alert('nothing to show')
            }
        })
    }

}

export default Spotify;