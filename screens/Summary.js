import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar  , Modal   } from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function  Summary( { route ,  navigation }) {
 
   let screentype= route.params.screentype ; 


  switch (  screentype ) {
        

   case "wastecollection" : 
    return (

<View style={styles.container}> 

<View  style={styles.v1} >
  
   <Text style={styles.t1}  >
   Informal Waste Collector
     </Text>
   
  </View>

  <View View  style={styles.v2} >
   <TouchableOpacity      style={styles.to1}
       onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "wastecollectionst"  ,  prop1 : "Waste Collector"  , prop2 : "Type of Plastic"  ,  prop3 : "Qunatity"  , prop4 : "Total Cost"   } )}}
   >

  <Text   style={styles.t2}>Summary Table</Text> 

  <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity> 

    </View>
     

    <View  style={styles.v1} >
     
    <Text   style={styles.t1}>
     Clean-up Drive
     </Text>
    
     </View>

     <View   style={styles.v1}>
    <TouchableOpacity  style={styles.to1}
        onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "wastecollectionst" } )}}
    >  

    
     <Text   style={styles.t2}>
     Plastic Waste Summary Table
     </Text> 
     <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity>
    </View>
 


    <View   style={styles.v2}>
    <TouchableOpacity   style={styles.to1}
        onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "wastecollectionst" } )}}
    >
     <Text   style={styles.t2}> 
      Transportation Summary Table
     </Text>

     <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity>
       </View>  



    
       <View  style={styles.v1} >
     
     <Text   style={styles.t1}>
      Other Source
      </Text>
     
      </View>
 
      <View   style={styles.v1}>
     <TouchableOpacity  style={styles.to1}
         onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "wastecollectionst" } )}}
     >  
 
     
      <Text   style={styles.t2}>
      Plastic Waste Summary Table
      </Text>

      <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
     </TouchableOpacity>
     </View>
  
 
 
     <View   style={styles.v2}>
     <TouchableOpacity   style={styles.to1}
         onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "wastecollectionst" } )}}
     >
      <Text   style={styles.t2}> 
       Transportation Summary Table
      </Text>

      <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
     </TouchableOpacity>
        </View>  
 
 
 
 





  </View> 


    
    );

    case "segproc" : 
    return (

<View style={styles.container}> 

<View  style={styles.v1} >
  
   <Text style={styles.t1}  >
   Segregation
     </Text>
 
  </View>

  <View View  style={styles.v2} >
   <TouchableOpacity      style={styles.to1}
       onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "segregation_st"  ,  prop1 : "Waste Segregator"  , prop2 : "Waste Management Unit"  ,  prop3 : "Qunatity"  , prop4 : "Amount Paid"   }  )}}
   >
  <Text   style={styles.t2}>Summary Table</Text>

  <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity> 

    </View>
     

    <View  style={styles.v1} >
     
    <Text   style={styles.t1}>
    Processing
     </Text>
     
     </View>

    


    <View   style={styles.v2}>
    <TouchableOpacity   style={styles.to1}
        onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "processing_st"  ,   prop1 : "Waste Management Unit"  , prop2 : "Type of Plastic"  ,  prop3 : "Qunatity"  , prop4 : "Amount Paid"   } )}}
    >
     <Text   style={styles.t2}> 
      Summary Table
     </Text> 

     <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity>
       </View>  



    
       <View  style={styles.v1} >
     
     <Text   style={styles.t1}>
       Transportation
      </Text>

      
     
      </View>
 
      
 
 
     <View   style={styles.v2}>
     <TouchableOpacity   style={styles.to1}
         onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "transportation_st"  ,  prop1 : "Waste Management Unit"  , prop2 : "Type of Waste"  ,  prop3 : "Qunatity"  , prop4 : "Total Cost"   } )}}
     >
      <Text   style={styles.t2}> 
        Summary Table
      </Text> 

      <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
     </TouchableOpacity>
        </View>  
 

  </View> 



    ) ;  


    case "sales" : 
    return (

    
<View style={styles.container}> 

<View  style={styles.v1} >
  
   <Text style={styles.t1}  >
   Plastic Waste
     </Text>
 
  </View>

  <View View  style={styles.v2} >
   <TouchableOpacity      style={styles.to1}
       onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "pwaste_st"   ,    prop1 : "Buyer"  , prop2 : "Type of Plastic"  ,  prop3 : "Qunatity"  , prop4 : "Total Amount"  } )}}
   >
  <Text   style={styles.t2}>Summary Table</Text> 

  <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity> 

    </View>
     

    <View  style={styles.v1} >
     
    <Text   style={styles.t1}>
    Other Waste 
     </Text>
    
     </View>

    


    <View   style={styles.v2}>
    <TouchableOpacity   style={styles.to1}
        onPress = {  ( ) => { navigation.navigate("SummaryView"  , { api_end : "owaste_st"  ,   prop1 : "Buyer"  , prop2 : "Type of Waste"  ,  prop3 : "Qunatity"  , prop4 : "Total Amount"  } )}}
    >
     <Text   style={styles.t2}> 
      Summary Table
     </Text> 

     <View style={styles.v4}>
  <Icon  name="arrow-right" size={27} color = "#78AFEA"  backgroundColor = "#fff" /> 
  </View> 
    </TouchableOpacity>  


    
       </View>  


  </View> 

    ) ; 


  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1 ,  
      backgroundColor : '#fff'  , 
       alignItems : "center"  , 

    },  

     v1 : {
      
      
      
       width : "100%" , 
       height : "8%" , 
       backgroundColor : "#fff" , 
      alignItems :"flex-start" , 
      justifyContent : "center"  , 
      borderBottomWidth : 1 , 
      borderBottomColor : "#78AFEA"  , 
  
     }  ,  

      v2  : {
           
        height : "8%"  , 
        width : "100%" , 
        backgroundColor : "#fff" ,
        borderBottomWidth : 3, 
        borderBottomColor : "#78AFEA"  , 


      }
  , 
       t1: {
               
        
        height : "90%" , 
        fontWeight: '600' ,
        fontStyle: 'normal'  , 
         fontSize:  26 , 
        lineHeight: 22 , 
        letterSpacing: -0.408 ,
        padding : 0 ,
        textAlign : "left" ,
        textAlignVertical : "center"  ,
       backgroundColor : "#fff" 
        

       }
       ,
        t2 : {
           
          
         marginRight : 10 , 
         fontWeight: '400' ,
        fontStyle: 'normal'  , 
         fontSize: 22 , 
        lineHeight: 22 ,
   
         backgroundColor:  "#fff" , 
        letterSpacing: -0.408 ,
        textAlignVertical : "center"  ,
        
         

       }  , 

       v3 : {
               
         flex : -1 , 
         width : "100%"  ,  
         height : "30%"   , 
         backgroundColor : "#fff"  ,   
         justifyContent  : "center"  
           
       }  ,  

       v4 : {
        justifyContent : "center"  ,
        borderColor : "#78AFEA" , 
        borderWidth : 1 , 
        height : 40 , 
        width :  40 , 
        borderRadius : 20 , 
        alignItems  : "center" , 
        justifyContent : "center" , 

       }
 , 

       to1 : {

        height : "100%"   , 
        width : "100%"  ,
        backgroundColor : '#fff' , 
        flexDirection : "row"  , 
        alignItems : "center" , 
         

       }  , 

       
       
       to2 : {

        height : "50%"  , 
        alignItems : "center"   , 
        justifyContent : "center" , 
         

       }  , 

  });
  