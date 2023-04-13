import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar  , Modal   } from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function  SummaryTable( {   route  , navigation }) {
  
 // console.log( "summary")  ; 
 // console.log(  route.params.token)  ; 
   
  return (

    <View style={styles.container}>
    
       <View  style={styles.v1} >
               
    
       <View  style={styles.v3 }>
       <Text  style={styles.t2}>Waste Collection</Text>  
       </View>
            
          <TouchableOpacity  style={styles.v2 }
            
            onPress = {  ( ) => { navigation.navigate("Summary"   ,  {  token : route.params.token ,  screentype :  "wastecollection" })}}
          >
    
            <Text>See detailed summary table </Text>
             
          </TouchableOpacity >
    
          </View>  
    
    
          <View  style={styles.v1} >
               
          <View   style={styles.v3} >
          <Text  style={styles.t2} >Segregation & Processing</Text>   
          </View>
            
    
          <TouchableOpacity style={styles.v2 } 
            onPress = {  ( ) => { navigation.navigate("Summary"   ,  {  token : route.params.token , screentype :  "segproc" })}}
          >
        
         <Text> See detailed summary table  </Text>
          </TouchableOpacity>
    
      
    
          </View>  
    
    
          <View  style={styles.v1} >
          
          <View   style={styles.v3} >
          <Text  style={styles.t2} >Sales</Text>  
          </View>
        
          <TouchableOpacity style={styles.v2 } 
             onPress = {  ( ) => { navigation.navigate("Summary"  ,  {  token : route.params.token , screentype :  "sales" } )}}
           >
            <Text>  See detailed summary table  </Text>
    
          </TouchableOpacity>  
    
           </View>
      </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1 ,  
          backgroundColor : '#fff'  , 
           alignItems : "center"  , 
           justifyContent : "center"  , 
            padding : 10 , 
    
        },  
    
         v1 : {
    
           flex : 1 , 
           width : "100%"  , 
           backgroundColor : "#fff" , 
           alignItems : "center"  , 
           
      
         }  ,  
    
          v2  : {
              
              flex : -1 , 
              width : "80%"  ,  
              height : "70%"   , 
               backgroundColor : "#78AFEA"  ,  
               flexDirection : "row"  ,
                alignItems : "flex-end"  , 
                justifyContent :  "space-around" ,  
                borderRadius : 15 ,   
    
    
          }
      , 
           t1: {
                   
              
              flex : -1 , 
              width : "30%"  ,  
              height : "50%"   ,  
              backgroundColor : "red"  , 
              
             
    
           }
           ,
            t2 : {
               
    
             fontWeight: '600' ,
            fontStyle: 'normal'  , 
             fontSize: 20 , 
            lineHeight: 22 , 
            left : "3%"  , 
            letterSpacing: -0.408 ,
         
            
             
    
           }  , 
    
           v3 : {
                   
             flex : -1 , 
             width : "100%"  ,  
             height : "30%"   , 
             backgroundColor : "#fff"  ,   
             justifyContent  : "center"  , 
               
           }
      });
      