import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HorizontalScroll from './HorizontalScroll';
import MusicCard from './MusicCard';
import { Image } from 'react-native';


const ScrollCard = ({album}) => {
    return <View >
        <Image source={{ uri: album.thumbnails[0].url }} style={{ width: album.thumbnails[0].width, height: album.thumbnails[0].height }} />
    </View>
}

const ArtistAlbums = () => {

    const [artistAlbums, setArtistAlbums] = useState([]);
    const getArtistAlbums = async () => {
        const url = 'https://youtube-music-api-yt.p.rapidapi.com/get-artist-albums?artistId=UCh6W-tvSImXZ8Gbz3pMNYxg';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ddba72a05bmsh6bf38ece06aa542p1b5085jsnd329d52250e5',
                'x-rapidapi-host': 'youtube-music-api-yt.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            setArtistAlbums(result);
        } catch (error) {
            console.error(error);
        }
    }
    console.log(artistAlbums);

    useEffect(() => {
        getArtistAlbums();
    }, []);

    return (
        <View>
            <ScrollView horizontal>
                {
                    artistAlbums.map((album, index) => {
                        return (
                            <ScrollCard album={album} key={album.albumId} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ArtistAlbums

const styles = StyleSheet.create({})