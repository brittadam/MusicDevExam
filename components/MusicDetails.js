

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';



const Details = props =>{

    return (
        <View>
           <Text>
            {props.songTitle} 
           </Text>
           <Text>
            {props.singer}
           </Text>
        </View>
    )
}

export default Details;
