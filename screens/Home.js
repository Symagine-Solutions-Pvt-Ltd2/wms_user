import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar  , Modal   } from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 



export default function Home( { navigation  }) {

    return (

<View style={styles.container}>

   <View  style={styles.v1} >
           

   <View  style={styles.v3 }>
   <Text  style={styles.t2}>Waste Collection</Text>  
   </View>
        
       <View  style={styles.v2 }>
    

       <TouchableOpacity style={styles.t1} 
        onPress = {  ( ) => { navigation.navigate("WasteCollection"   ,  {    screentype :  "iwc"}     )}}>
           <Text>Informal Waste Collector</Text>
       </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}  
       onPress = {  ( ) => { navigation.navigate("WasteCollection"   ,     {    screentype :  "cud"}    )}}>
      <Text>Clean-up Drive</Text> 
      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1}  
      onPress = { ( ) => { navigation.navigate("WasteCollection"   ,     {    screentype :  "os"}    )} }>
     <Text>Other Sources</Text> 
      </TouchableOpacity>  
      </View>

      </View>  


      <View  style={styles.v1} >
           
      <View   style={styles.v3} >
      <Text  style={styles.t2} >Segregation & Processing</Text>   
      </View>
        

      <View style={styles.v2 }>
    

      <TouchableOpacity style={styles.t1}>
         <Text>Segregation</Text>
      </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}>
      <Text>Processing</Text>
      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1}>
     <Text>Transportation</Text>
      </TouchableOpacity>  
      </View>

  

      </View>  


      <View  style={styles.v1} >
      
      <View   style={styles.v3} >
      <Text  style={styles.t2} >Sales</Text>  
      </View>
    
      <View style={styles.v2 }>
    

      <TouchableOpacity style={styles.t1}>

      <Text>Plastic Waste</Text>
      </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}>
      <Text>Other Waste</Text>

      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1}>

      </TouchableOpacity>  

      </View>  

       </View>
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

     v1 : {

       flex : 1 , 
       width : "100%"  , 
       backgroundColor : "red"  , 
       
  
     }  ,  

      v2  : {

        
          flex : -1 , 
          width : "100%"  ,  
          height : "80%"   , 
           backgroundColor : "green"  , 
           justifyContent : "flex-start"   , 
           flexDirection : "row"  ,
            alignItems : "center"  , 
            justifyContent :  "space-around" , 

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
         height : "20%"   , 
         backgroundColor : "#fff"  ,   
         justifyContent  : "center"  , 
           
       }
  });
  