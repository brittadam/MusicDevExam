import React, {useRef, useEffect} from 'react';
import {Animated, Pressable, ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import type {PropsWithChildren} from 'react';
// import type {ViewStyle} from 'react-native';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {toValue: 1, duration: 3000, useNativeDriver: true,
      }).start();
  }, 
  [fadeAnim]);

  return (
    
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>    
  );
};


export default ({navigation}) => {
  return (
    <ScrollView style={{
      backgroundColor: '#232628',
    }}>
    <FadeInView
      style={{
        alignItems: 'center',
        height:755,
      }}>
      <FadeInView
        style={{
          width: 365,
          height: 60,
          backgroundColor: '#90EE90',
          marginTop: 55,
          borderRadius:15,
        }}>
        <Text style={{fontSize: 27, textAlign: 'center', margin: 10, fontWeight: 'bold'}}>
        Welcome to the music app!
        </Text>
      </FadeInView>
      <Image source={require("../assets/neonSign.jpg")} style={{margin: 20,width:365, height:250, borderRadius:20}}></Image>
      <FadeInView
        style={{
          width: 365,
          height: 120,
          marginTop: 10,
          backgroundColor: 'black',
          borderRadius:15,
          borderWidth:5,
          borderColor: '#90EE90',
          alignItems:'center'
        }}>
        <Text style={{fontSize: 16, textAlign: 'left', margin: 10, color:'white'}}>
        With this app you can listen to your favorite music for hours. Add them to a playlist and follow your favorite singers.
        </Text>
        <TouchableOpacity style={{marginLeft: 40, marginRight:40, marginTop:55, padding: 10, borderColor: "#90EE90", padding: 15, borderWidth:5,borderRadius:20,}} activeOpacity={0.4} onPress={()=> navigation.navigate ("Playlist")}>
          <Text style={{color: "#90EE90", textAlign: 'center', fontWeight: 'bold' }}>Let's start</Text>
          </TouchableOpacity>
      </FadeInView>
    </FadeInView>
    </ScrollView>
  );
};
