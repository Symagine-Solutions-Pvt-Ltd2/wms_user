import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar } from 'react-native';

import React from "react";


export default function  About (   {   route , navigation  }) {
    
          return ( 
            
        
      <View  style={ styles.container}>  
       <View  style={ {  }}>
         <Text style={ styles.t1}>
         This App helps to operate, manage and monitor the entire recyclable waste management system. It takes care of all business-related data, figures and calculations. Admins have full access to their data and can edit / change whenever needed. Users have provision to enter day wise data in simple formats which enables ease of operation.</Text>
        <Text  ></Text>
       <Text  style={ styles.t1}>Let’s make your business tech-driven & state-of-the-art !</Text>

       </View>
      </View>
            
          
         )  ; }

        
  
  const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      backgroundColor : '#fff'  ,
      alignItems : "center"  , 
      justifyContent :"flex-start"  , 
      paddingLeft:  6  , 
     paddingTop : 15  , 
    },
         
      t1 : {

        
        fontWeight: '600' ,
        fontStyle: 'normal'  , 
         fontSize:20 , 
        lineHeight: 26, 
        letterSpacing: -0.408 ,
        textAlign : "left" , 
        
     
  




      }
   

  });