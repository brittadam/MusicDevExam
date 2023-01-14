import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';



const follow = ({navigation, route}) =>{
    
    const [enteredArtist, setEnteredArtist] = useState('');
    const [artists, setArtists] = useState([]);
  
    const artistInputHandler = (enteredText) => {
      setEnteredArtist(enteredText);
    }
    const addArtistHandler = () => {
      setArtists((currentArtists) => [...currentArtists, enteredArtist]);
      console.log(artists);
    }

    return(
        
     <View style={Styles.achtergrond}>
        <TextInput  style={Styles.input} onChangeText={artistInputHandler} placeholder="Search Artist"/>
        
        <Pressable style={Styles.b} onPress={addArtistHandler}> 
            <Text style={Styles.btn}> Follow </Text>
        </Pressable>
        
        <FlatList style={{height:620}} data={artists} renderItem={(itemData)=>(
            <View style={Styles.bgfollow} > 
                <Image source={require("../assets/picwish.png")} style={{margin: 10,width:20, height:20}}></Image>
                <Text style={Styles.artistfollow}>
                    {itemData.item}
                </Text>
            </View>
        )}/>
     </View>
   
    )
}

 const Styles = StyleSheet.create({
    achtergrond:{
        backgroundColor:"#232628",
        
    },
    input:{
        backgroundColor: "white",
        marginTop: 50, 
        marginBottom: 10,
        marginLeft: 45,
        marginRight: 45,
        padding: 15, 
        color: "#90EE90", 
        borderWidth: 5,
        borderColor: "#90EE90",
        borderRadius: 20,
    },
    btn:{
        borderColor: "#90EE90",
        marginTop: 10, 
        marginBottom: 30,
        padding: 15, 
        textAlign: 'center',
        borderWidth:5,
        borderRadius:20,
        color: "#90EE90", 
        fontWeight: 'bold'
    },
    b:{
      
        alignItems: 'center',  
    },
    artistfollow:{
        color:"white"
        
    },
    bgfollow:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 45,
        marginRight: 45,
        padding: 15,
        borderColor: "#90EE90",
        borderWidth:5, 
        borderRadius: 20,
        backgroundColor:"black",
    }


});

export default follow;