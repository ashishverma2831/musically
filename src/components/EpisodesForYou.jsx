import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const EpisodesForYou = () => {

    // const [episodes, setEpisodes] = useState([]);
    // const getEpisodes = async () => {
    //     const url = 'https://spotify23.p.rapidapi.com/episode/?id=55EWbmkVr8iDNmSyperh9o';
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': 'ddba72a05bmsh6bf38ece06aa542p1b5085jsnd329d52250e5',
    //             'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    //         }
    //     };
    //     try {
    //         const res = await fetch(url, options);
    //         const data = await res.json();
    //         console.log(data);
    //         setEpisodes(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }    

    // useEffect(() => {
    //     getEpisodes();
    // }, []);

    return (
        <View>
            <Text>EpisodesForYou</Text>
        </View>
    )
}

export default EpisodesForYou

const styles = StyleSheet.create({})