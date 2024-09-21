import { useState } from "react"

const getSongs = async () => {
    const [songlist, setSonglist] = useState([]);
    const url = 'https://youtube-music-api-yt.p.rapidapi.com/get-artist-songs?artistId=UCh6W-tvSImXZ8Gbz3pMNYxg';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ddba72a05bmsh6bf38ece06aa542p1b5085jsnd329d52250e5',
            'x-rapidapi-host': 'youtube-music-api-yt.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setSonglist(data);
    } catch (error) {
        console.log(error);
    }
    return songlist;
}

export default getSongs