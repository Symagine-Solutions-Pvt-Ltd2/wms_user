import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar  , Modal , Image  , Dimensions  , ImageBackground     , BackHandler  , Alert } from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



import CleanUpDrive from '../assets/CleanUpDrive.jpg' ; 
import informalwc from '../assets/informalwc.jpg' ; 
import othersource from '../assets/othersource.jpg' ;
import plasticwaste from '../assets/plasticwaste.jpg'  ; 
import processing from '../assets/processing.jpg'  ;
import seggregation  from '../assets/seggregation.jpg' ;
import Transport from '../assets/Transport.png'  ;
import otherwaste from '../assets/otherwaste.jpg' 



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Home( { navigation   , route  }) {
  
 //   console.log( "inhome")  ; 
 //  console.log(  route.params.token)  ;
     

 const backAction = () => {
  Alert.alert("Hold on!", "Do you want to exit from app ?", [
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel"
    },
    { text: "YES", onPress: () => BackHandler.exitApp() }
  ]);
  return true;
};

React.useEffect(() => {
  BackHandler.addEventListener("hardwareBackPress", backAction);

  return () =>
    BackHandler.removeEventListener("hardwareBackPress", backAction);
}, []);
     




 
  
   
  const [ modalVisible, setModalVisible ] = React.useState( false  );
  
  

   const handler1  = () => {

    setModalVisible(  !modalVisible) ; 
    navigation.navigate("Summary Table"   , { token : route.params.token} )

   } 

    
   const handler2 = () => {
    
    navigation.navigate("About"  )  ; 
    setModalVisible(  !modalVisible) ; 
   }
  

    return (

<View style={styles.container}> 
  
<StatusBar style="auto" />   

   <Modal 

    transparent={true}
      visible={modalVisible}
      animationType="slide" 
     onRequestClose={() => {
         setModalVisible(!modalVisible);
          }}
>   
 
<View  style={styles.m1}>
   <LinearGradient
        // Background Linear Gradient
        colors={["rgba(120, 175, 234, 1)" , 
          "rgba(59, 77, 97, 1)]}" ]} 
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.8 }}
        style={ {  height : "100%"  , width  : "100%"}}
      >  

           <View style={styles.to3}>        
          <TouchableOpacity
             onPress = {  ()  =>  { setModalVisible( !modalVisible) }} >
           <MaterialCommunityIcons name="window-close" size={24} color="#fff" />
         </TouchableOpacity>  

         </View>  


         <TouchableOpacity style={styles.to2} 
            onPress = {  ( ) => {  handler2() }}
         >
             <Text  style= { styles.to4}>About</Text>
         </TouchableOpacity>  

         
          <TouchableOpacity   style={styles.to2}
          
          onPress = {  ( ) => {  handler1()}}>
             <Text  style= { styles.to4} >Summary Table</Text>
            </TouchableOpacity>  
 
              
  
             
         <TouchableOpacity  style={styles.to2} 
          onPress = { () => {  navigation.navigate( "LogIn")}}
         >
             <Text  style= { styles.to4} >Log Out</Text>
        </TouchableOpacity>  
          
         </LinearGradient>
      </View>
</Modal>

   <View    style={styles.v4}>
     

   <TouchableOpacity  style={styles.to1} 
       onPress={() => { setModalVisible( true)}  }  
   >              
    <MaterialCommunityIcons name="menu" size={30} color="#000000" />
    </TouchableOpacity>  
   </View>

   <View  style={styles.v1} >
           

   <View  style={styles.v3 }>
   <Text  style={styles.t2}>Waste Collection</Text>  
   </View>
        
       <View  style={styles.v2 }>
    

       <TouchableOpacity style={styles.t1} 
        onPress = {  ( ) => { navigation.navigate("WasteCollection"   ,  {   token : route.params.token ,   name : "Informal Waste Collector"   ,  screentype :  "iwc"  }     )}}>
         

            
         <ImageBackground   source= { informalwc }    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "80%" , textAlign: "center" ,  color : "#fff"}}>Informal Waste Collector</Text>
            </LinearGradient>
          </ImageBackground>  

       
       </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}  
       onPress = {  ( ) => { navigation.navigate("WasteCollection"   ,     {  token : route.params.token  ,    name : "Clean-up Drive" ,    screentype :  "cud"}    )}}>
        
           
        <ImageBackground   source= { CleanUpDrive }    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "80%" , textAlign: "center" ,  color : "#fff"}}>Clean-up Drive</Text>
            </LinearGradient>
          </ImageBackground>  
      
      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1}  
      onPress = { ( ) => { navigation.navigate("WasteCollection"   ,     {  token : route.params.token  ,     name : "Other Source" ,   screentype :  "os"}    )} }>
      
      <ImageBackground   source= { othersource }    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "80%" , textAlign: "center" ,  color : "#fff"}}>Other Sources</Text>
            </LinearGradient> 
            </ImageBackground>
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
 <ImageBackground   source= { seggregation}    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "80%" , textAlign: "center" ,  color : "#fff"  , paddingBottom : 5 }}>Segregation</Text>
            </LinearGradient> 
            </ImageBackground>
      </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1}  
      
      onPress = { ( ) => { navigation.navigate("Processing"   ,     {  token : route.params.token  ,    name : "Processing"  ,   screentype :  "proccesing"}    )} }
      > 
        
 <ImageBackground   source= { processing  }    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "80%" , textAlign: "center" ,  color : "#fff" , paddingBottom : 5 }}>Processing</Text>
            </LinearGradient> 
            </ImageBackground>
      </TouchableOpacity> 


     <TouchableOpacity style={styles.t1} 
       onPress = { ( ) => { navigation.navigate("Processing"   ,     {  token : route.params.token ,     name : "Transportation"   ,     screentype :  "transportation"}    )} }
     >
 <ImageBackground   source= { Transport }    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "90%" , textAlign: "center" ,  color : "#fff"  , paddingBottom : 5 }}>Transportation</Text>
            </LinearGradient> 
            </ImageBackground>
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
       <ImageBackground   source= { plasticwaste }    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "85%" , textAlign: "center" ,  color : "#fff" , paddingBottom : 5}}>Plastic Waste</Text>
            </LinearGradient> 
            </ImageBackground>
      </TouchableOpacity>  

       
      <TouchableOpacity style={styles.t1} 
        onPress = { ( ) => { navigation.navigate("Sales"   ,     {    token : route.params.token   ,   name : "Other Waste"  ,    screentype :  "other_waste"}    )} }
      > 
        <ImageBackground   source= { otherwaste}    resizeMode ="cover" style= {  {   height :  windowWidth/4 , width : windowWidth/4   , borderRadius:12  , justifyContent :"flex-end"  } } >
         <LinearGradient
        // Background Linear Gradient
         colors={[  "#00000000" , 
          "#000000CC" ]} 
       
        locations = {[ 0.2 , 0.7]}
        style={ {  height : "100%"  , width  : "100%"  , justifyContent : "flex-end"  , alignItems :  "center"}}
      >  
            < Text  style= { {  width : "80%" , textAlign: "center" ,  color : "#fff"  , paddingBottom : 5}}>Other Waste</Text>
            </LinearGradient> 
            </ImageBackground>

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
      backgroundColor : '#fff'  , 
       alignItems : "center"  , 
       justifyContent : "center"  , 
        

    },    

     m1: {
        
   


        flex : -1 , 
      width : "80%" , 
      height : "80%" , 
   position : 'absolute'  , 
  backgroundColor: "blue",  
    top :  "10%" , 
    borderRadius : 10  , 
  
    


     }  , 

     v1 : {

       flex : 1 , 
       width : "100%"  , 
       backgroundColor : "#fff"  , 
       alignItems:"center"  , 
       
  
     }  ,  

      v2  : {

        
          flex : -1 , 
          width : "87%"  ,  
          height : "80%"   , 
           backgroundColor : "#fff"  , 
           justifyContent : "flex-start"   , 
           flexDirection : "row"  ,
            alignItems : "flex-start"  , 
            justifyContent : "space-between" , 
           

      }
  ,    

     v4 : {
        
       height : "6%"     , 
       width : "87%"    , 
       backgroundColor : "#fff"  , 
       alignItems : "flex-end"  , 
       
      
  

     }  , 


       t1: {
               
          
          flex : -1 , 
        width :  windowWidth/4  ,  
          height : windowWidth/4    ,  
          backgroundColor : "#fff"  , 
          borderRadius: 10 , 
        justifyContent : "flex-end"  , 
        alignItems : "center"  , 
        borderRadius: 10 , 
        overflow : "hidden"
  
         

       }
       ,
        t2 : {
           
          backgroundColor : "#fff"  , 
         fontWeight: '600' ,
        fontStyle: 'normal'  , 
         fontSize: 20 , 
        lineHeight: 22 , 
        letterSpacing: -0.408 ,
     
       }  ,  

         t3: {

          color : "#FFFFFF"  , 
         
          width : "80%" , 
          fontWeight: '800' ,
         fontStyle: 'normal'  , 
         
         lineHeight: 22 , 
         textAlign: 'center' , 
         letterSpacing: -0.408 ,

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


           to1 : {
               
          
             height : "100%"  ,
             backgroundColor : "#fff"  , 
             justifyContent : "center"  , 
             
           }  , 

            to2 : {

              width : "100%"  , 
              height : "10%"  ,
          


            }
        ,   

         to3 : {

          width : "100%"  , 
          height : "10%"  ,
     alignItems : "flex-end"  ,

         }  , 

         to4 : {

          color : "#FFFFFF"  , 
          width : "100%" , 
          fontWeight: '600' ,
         fontStyle: 'normal'  , 
         fontSize: 20 , 
         lineHeight: 22 , 
         textAlign: 'center' , 
         letterSpacing: -0.408 ,


          

         }
         
  , 

       v3 : {
               
         flex : -1 , 
         width : "87%"  ,  
         height : "20%"   , 
         backgroundColor : "#fff"  ,   
         justifyContent  : "center"  , 
         alignItems : "flex-start" , 
         padding : 0 , 
           
       }
  });
  