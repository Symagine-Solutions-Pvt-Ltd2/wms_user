import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar  , Modal   } from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 



export default function Home( { navigation   , route  }) {
  
   // console.log( "inhome")  ; 
  // console.log(  route.params.token)  ; 


    return (

<View style={styles.container}>

   <View  style={styles.v1} >
           

   <View  style={styles.v3 }>
   <Text  style={styles.t2}>Waste Collection</Text>  
   </View>
        
       <View  style={styles.v2 }>
    

       <TouchableOpacity style={styles.t1} 
        onPress = {  ( ) => { navigation.navigate("WasteCollection"   ,  {   token : route.params.token ,   name : "Informal Waste Collector"   ,  screentype :  "iwc"  }     )}}>
           <Text  style={styles.t3}  >Informal Waste Collector</Text>
       </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}  
       onPress = {  ( ) => { navigation.navigate("WasteCollection"   ,     {  token : route.params.token  ,    name : "Clean-up Drive" ,    screentype :  "cud"}    )}}>
      <Text>Clean-up Drive</Text> 
      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1}  
      onPress = { ( ) => { navigation.navigate("WasteCollection"   ,     {  token : route.params.token  ,     name : "Other Source" ,   screentype :  "os"}    )} }>
     <Text>Other Sources</Text> 
      </TouchableOpacity>  
      </View>

      </View>  


      <View  style={styles.v1} >
           
      <View   style={styles.v3} >
      <Text  style={styles.t2} >Segregation & Processing</Text>   
      </View>
        

      <View style={styles.v2 }>
    

      <TouchableOpacity style={styles.t1}
        onPress = { ( ) => { navigation.navigate("Processing"   ,     {    token : route.params.token  ,     name : "Segregation"  ,  screentype :  "seggregation"}    )} }
      >
         <Text>Segregation</Text>
      </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}  
      
      onPress = { ( ) => { navigation.navigate("Processing"   ,     {  token : route.params.token  ,    name : "Processing"  ,   screentype :  "proccesing"}    )} }
      >
      <Text>Processing</Text>
      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1} 
       onPress = { ( ) => { navigation.navigate("Processing"   ,     {  token : route.params.token ,     name : "Transportation"   ,     screentype :  "transportation"}    )} }
     >
     <Text>Transportation</Text>
      </TouchableOpacity>  
      </View>

  

      </View>  


      <View  style={styles.v1} >
      
      <View   style={styles.v3} >
      <Text  style={styles.t2} >Sales</Text>  
      </View>
    
      <View style={styles.v2 }>
    

      <TouchableOpacity style={styles.t1} 
         onPress = { ( ) => { navigation.navigate("Sales"   ,     {   token : route.params.token  ,     name : "Plastic Waste"  ,   screentype :  "plastic_waste"}    )} }
      >

      <Text>Plastic Waste</Text>
      </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1} 
        onPress = { ( ) => { navigation.navigate("Sales"   ,     {    token : route.params.token   ,   name : "Other Waste"  ,    screentype :  "other_waste"}    )} }
      >
      <Text>Other Waste</Text>

      </TouchableOpacity> 


     <TouchableOpacity style={styles.t4}>
 
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
           backgroundColor : "#fff"  , 
           justifyContent : "flex-start"   , 
           flexDirection : "row"  ,
            alignItems : "flex-start"  , 
            justifyContent :  "space-around" , 
           

      }
  , 
       t1: {
               
          
          flex : -1 , 
          width : "30%"  ,  
          height : "50%"   ,  
          backgroundColor : "pink"  , 
          borderRadius: 10 , 
        justifyContent : "flex-end"  , 
        alignItems : "center"  , 
        padding : 10 , 
         

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

         t3: {



        }  , 
       
        t4 : {

     backgroundColor : "#fff" ,
     width : "30%"  ,  
     height : "50%"   ,  
    
     borderRadius: 10 , 
   justifyContent : "flex-end"  , 
   alignItems : "center"  , 
   padding : 10 , 
    
        }  , 

       v3 : {
               
         flex : -1 , 
         width : "100%"  ,  
         height : "20%"   , 
         backgroundColor : "#fff"  ,   
         justifyContent  : "center"  , 
           
       }
  });
  