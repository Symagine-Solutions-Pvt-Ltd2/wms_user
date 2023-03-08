import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar } from 'react-native';

import React from "react";  
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";



export default function PlasticProcessing ( {   route , navigation  }) {
    
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
  
  
    React.useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    );
  
  
   
     
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      backgroundColor : '#78AFEA'  , 
       alignItems : "center"  , 
       justifyContent : "center"  , 
        

    },
     
  });
  