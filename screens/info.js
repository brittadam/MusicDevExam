import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import Details from '../components/MusicDetails';

// const Stack = createNativeStackNavigator();

const info = ({navigation, route}) =>{

    return (
        <View>
          <Details songTitle={route.params.itemTitle} 
          singer={route.params.itemDescription}
          photo={route.params.itemImage}/>
        </View>
    )
}


export default info;
