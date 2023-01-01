import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const music = ({navigation}) =>{

    const [music, setMusic] = useState ([]);

    const getMusic = async () => {
        try {
            const response = await fetch ("https://brittadam.be/wp-json/wp/v2/posts?categories=6", {

            })
            const json = await response.json();
            setMusic(json);
            console.log(music);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMusic();
    }, []);


    return (
        <View>
            <FlatList data={music} renderItem={({item}) => (
                
                <View style={Styles.achtergrond}>
                    <View style={Styles.container}>
                        <View>
                        {item.yoast_head_json?.og_image !== undefined && <Image
                        style={{ width: 300, height: 200, justifyContent: 'center',
                        alignItems: 'center'}}
                        source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                        />
                        }
                        </View>
                        <Text style={Styles.song}>{item.title.rendered}</Text>
                    
                    </View>
                    <Pressable onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered, itemDescription: item.rttpg_excerpt})}>
                        <Text style={Styles.btn}>View song</Text>
                    </Pressable>

                </View>
            )}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    achtergrond:{
        backgroundColor:"#000"
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    song:{
        color:"#fff"
    },
    btn:{
        backgroundColor:"#90EE90",
        flex:1,
        flexDirection:"columns",
        
    }
})
    

export default music;