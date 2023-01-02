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
        <View style={Styles.algemeen}>
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
                    <Pressable style={Styles.b} onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered, itemDescription: item.rttpg_excerpt, itemImage: item.yoast_head_json.og_image[0].url })}>
                        <Text style={Styles.btn}>View song</Text>
                    </Pressable>

                </View>
            )}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    algemeen:{
        backgroundColor:"#565656"
    },
    achtergrond:{
        backgroundColor:"#000",
        margin: 10, 
        borderWidth: 5,
        borderColor: "#90EE90",
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30, 
        
    },
    song:{
        color:"#fff",
        paddingTop: 20
    },
    btn:{
        backgroundColor:"#90EE90",
        width: 100, 
        padding: 5,
        margin: 10,
        textAlign: 'center'
    },
    b:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})
    

export default music;