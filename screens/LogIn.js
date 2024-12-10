import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity  , StatusBar  , Dimensions  , Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 

import Arrow from '../assets/Arrow.png'  ; 

export default function LogIn(   { navigation  }) {

  const [ login  , onChangeLogin ] = React.useState( true );

    
  


  
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");  



   // login 
  const [ Password2 , onChangePassword2 ] = React.useState("");     // password   
  const [  email1, onChangeEmail1 ] = React.useState("");  // email 
  const [ visible1  ,   onChangeVisibility1 ] = React.useState( true );   
  const [ icon1 , onChangeIcon1] = React.useState( 'eye-slash');  
  const [ visible2  ,   onChangeVisibility2 ] = React.useState( true );   
  const [ icon2 , onChangeIcon2] = React.useState( 'eye-slash');  

 // signup
  const [ name , onChangeName ] = React.useState("");     // password   
  const [ email , onChangeEmail ] = React.useState("");  // email 
  const [ password , onChangePassword ] = React.useState("");     // password   
  const [ password1 , onChangePassword1  ] = React.useState("");     // set password  
  const [ organization  , onChangeOrganization   ] = React.useState("");     //  organization 
  const [ icon , onChangeIcon] = React.useState( 'eye-slash');
  const [ visible  ,   onChangeVisibility ] = React.useState( true );  
  

  console.log(name ) ; 
  console.log(  email ) ; 
  console.log( password ) ; 
  console.log( password1) ; 
  console.log(  organization  ) ; 
 




   const handlePasswordVisibility   = ()  => {
            
    if(  icon == 'eye-slash') {
     
      onChangeIcon('eye')  ; 
      onChangeVisibility( false) ; 

    }else if(    icon == 'eye') {

      onChangeIcon('eye-slash')  ; 
      onChangeVisibility( true ) ; 
    }
        
   }  ;  


 
  
   const handlePasswordVisibility1   = ()  => {
            
    if(  icon1 == 'eye-slash') {
     
      onChangeIcon1('eye')  ; 
      onChangeVisibility1( false) ; 

    }else if(    icon1 == 'eye') {

      onChangeIcon1('eye-slash')  ; 
      onChangeVisibility1( true ) ; 
    }
        
   }  ; 
  
  


   const handlePasswordVisibility2   = ()  => {
            
    if(  icon2 == 'eye-slash') {
     
      onChangeIcon2('eye')  ; 
      onChangeVisibility2( false) ; 

    }else if(    icon2 == 'eye') { 

      onChangeIcon2('eye-slash')  ; 
      onChangeVisibility2( true ) ; 
    }
        
   }  ; 
  




  
   const handler1   = ()  => {
               
         onChangeLogin( true)  ;
   }  ; 

   const handler2   = ()  => {
            
    onChangeLogin(  false)  ; 
        
   }  ; 
    

   const submit1  = ()  => {
            


    const pushdata =  async () => {  

   try {
     const response = await fetch( 'http://circsol.in:5000/user/registeruser'  , 
     {   method: 'POST', 

         headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json'  ,
       
       }
   , 
   body: JSON.stringify({
      
    "name": name,
    "email_id":  email ,
    "organisation_name": organization ,
    "password": password ,
    "confirm_password": password1 , 

 }),
}
    );
     const json = await response.json();
       console.log(json.message);     

       if( json.status  === "success") {
               
        alert(  json.message)  ;  
        console.log( "vbvhv")  ; 
         onChangeLogin(  true)  ;
         onChangeName("") ;
         onChangeEmail("") ;
         onChangeOrganization("") ; 
         onChangePassword("") ;
         onChangePassword1("") ; 
         

       } else {
           

        alert(  json.message)  ; 
         console.log(   json.message )  ;  

       }
   } catch (error) {
     console.error(error);
   }  
 };

 
 
  pushdata() ; 
 
 console.log("bhjgnagxaxh")  ;  

}; 
  
     


const submit2  = ()  => {
            


  const pushdata =  async () => {  

 try {
   const response = await fetch( 'http://circsol.in:5000/user/loginuser'  , 
   {   
    
    method: 'POST', 

       headers: {
         'Accept': 'application/json',
         'Content-type': 'application/json'  ,
        
     
     }
 , 
 body: JSON.stringify({
    
  
  "email_id":  email1 , 
  "password": Password2 ,

}),
}
  );
   const json = await response.json(); 

     console.log(json);     

     if( json.status  === "success") {
       
      alert(  json.message)  ;  
      navigation.navigate("Home" ,   { token  : json.data.token  } );
     // console.log( "vbvhv")  ; 
          
        onChangeEmail1("") ;
        onChangePassword2("") ; 

     } else {
         

      alert(  json.message)  ; 
       console.log(   json.message )  ;  

     }
 } catch (error) {
   console.error(error);
 }  
};



pushdata() ; 

console.log("bhjgnagxaxh")  ;  

}; 

   

    return (
      <View style={styles.container}>
          

       <StatusBar  barStyle="light-content" 
       backgroundColor="#78AFEA"  />   
        
   
<View style={styles.v1}  >

<LinearGradient
        // Background Linear Gradient
        colors={["rgba(120, 175, 234, 1)" , 
          "rgba(59, 77, 97, 1)]}" ]} 
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.6 }}
        style={styles.v1_background}
      >

{
 ( login) ? 

<Text style={styles.text1 }>Welcome Back!</Text>
  : 
  <Text  style={styles.text1 }>Hello User!</Text>
}
</LinearGradient>

</View>  

<View style={styles.v2}  >
 

</View>  

  <View style={styles.v3} >

    < View style={ styles.v7 }>

  <TouchableOpacity  style={  login ? styles.to2 :  styles.to1}   
      onPress = {  ()  =>  { handler1() }}
  >

    <Text  style={   login ? styles.text3 :  styles.text2}   > Log In </Text>
    </TouchableOpacity>
   
    
    <TouchableOpacity  style={  login ? styles.to1 :  styles.to2}
          onPress = {   ()  =>  { handler2() }}
         >
    <Text  style={  login ? styles.text2 :  styles.text3}   >  Sign Up </Text>
    </TouchableOpacity>
   
    </View>
  </View> 
    
   {( login )
  ? 
    
<View style={styles.v4} >


  
        <View style={styles.ip1}  >
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip6} 
              placeholder="Email Address"    value= { email1 }  onChangeText= { onChangeEmail1 } />
         
          
         <View   style={styles.v6} > 
        <Icon  name="user" size={27}  color={"grey"} /> 
         </View>
       </View>
   
         

       <View style={styles.ip2}   > 
       
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip6} 
      secureTextEntry={ visible}       placeholder="Password"  value= { Password2  }   onChangeText = {  onChangePassword2}/>     

     <TouchableOpacity  style={styles.v6}
     onPress={ () => { handlePasswordVisibility()}} > 
        <Icon  name= {icon } size={27}   color={"grey"} /> 
         </TouchableOpacity>
       </View>


  <View style={styles.ip7} > 
  {/*  <Icon     name="check"  style={{ borderWidth : 4  , padding : 5 ,  }}      size={22} /> 
  <TouchableOpacity
  >
<Text> Remember me</Text>      
</TouchableOpacity> */}
 

{/* <TouchableOpacity   
   onPress={ () => {    navigation.navigate("PlasticProcessing" ) }}
 >
<Text>Forgot Password?</Text>
</TouchableOpacity>
     */}
  </View >  
    
  <TouchableOpacity  
       style={styles.to4} 
      onPress = {  submit2 } >
  <Icon  name="arrow-right" size={27} color = "#fff" /> 
  </TouchableOpacity>
</View>

:

<View style={styles.v5} >  

  
<View  style={styles.ip1} >
    
    <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6}      
            placeholder="Name"  value= {   name }   onChangeText = {onChangeName }/>    
        
        <View   style={styles.v6}  > 
        <Icon  name="user" size={27} color={"grey"} /> 
         </View>
    
     </View> 
       
   

  
<View   style={styles.ip2}  >  

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip6}  
                   placeholder="Email Address"   value= { email }   onChangeText = {  onChangeEmail }   />
  
 
  <View    style={styles.v6}  > 
  <Icon  name="envelope" size={27}   color={"grey"} /> 
  </View>
    
  </View>  

  


<View   style={styles.ip3} >   

<TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6} 
     secureTextEntry= {visible1 }    placeholder="Password"  value= { password }  onChangeText = {  onChangePassword} />        

<TouchableOpacity style={styles.v6} 
  onPress={ () => { handlePasswordVisibility1()}}
> 
  <Icon  name= { icon1 } size={27}  color={"grey"} /> 
  </TouchableOpacity>
    
</View>    



 

<View  style={styles.ip4}  >   
<TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip6} 
      secureTextEntry= {visible2}    placeholder="Re-enter  Password"  value= { password1  }  onChangeText = {  onChangePassword1 }/>    

<TouchableOpacity    style={styles.v6} 
  onPress={ ()=> { handlePasswordVisibility2()}}
>  

  <Icon  name={icon2} size={27}   color={"grey"} /> 
  </TouchableOpacity>
</View>   
  



<View  style={styles.ip5}>   

<TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6} 
         placeholder="Organisation Name"  value= { organization }   onChangeText = {  onChangeOrganization }  />      
<View  style={styles.v6}  >  

<Icon  name="building" size={27}   color={"grey"} /> 
</View>
</View>



   <TouchableOpacity style={styles.to4} 
      onPress = {  submit1 }
 >
        <Icon  name="arrow-right" size={27} color = "#fff" /> 
   </TouchableOpacity>  


</View>

}

    </View>
        
      
    );
  }


  
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      backgroundColor : '#fff' , 
       alignItems : "center"  , 
    },

    v1 : {
          
        position : "absolute"  , 
        height :  "30%"    , 
        width :  "100%"  , 
       backgroundColor : '#fff'  , 
        alignItems: "center"  , 
        justifyContent : "center"  , 
       
    }
      , 

      v1_background : {
          
        flex : -1  , 
         width : "100%"  , 
         height : "100%"  , 
         alignItems : "center"  , 

      }
    , 
    v2 : {
          
        position : "absolute"  , 
        height :  "70%"    , 
        width :  "100%"  , 
         top : "30%" , 
      backgroundColor: "#fff"  , 
        zIndex : 1
    
    }    , 


      v3 :  {
       

        top : "10%"  , 
        position : "absolute"  , 
        height :  "10%"   , 
        width :  "90%"  , 
        backgroundColor: "#fff", 
         zIndex :  5 , 
         shadowColor : "#00000"  ,
         shadowRadius : 2 , 
         borderTopLeftRadius : 10 , 
         borderTopRightRadius : 10 , 
         overflow : "hidden" , 
         alignItems : "center" , 
         justifyContent : "center"  , 

      }
   , 
    

   v4 : {
       
     
    width :  "90%"  , 
    top: "20%"  , 
    height : "50%"  , 
    backgroundColor : "#fff"  , 
    elevation  : 2 , 
    zIndex :  5 ,
     
    alignItems : "center"  , 
    borderBottomRightRadius : 10, 
    borderBottomLeftRadius : 10 ,
     
   }   , 

    ip1 : {
       
      position : "absolute"  , 
      top : "0%"  , 
      height :  "10%"   , 
      width :  "95%"  , 
      textAlign : "left"  , 
      borderColor: "#000000" , 
       borderWidth :  1 , 
       backgroundColor : "pink" , 
       flexDirection : "row"  , 
       justifyContent: "space-between" , 
     borderRadius : 10 , 
     borderColor : "grey" , 
     borderWidth : 2 , 
      overflow : "hidden" ,

    }  , 


   ip2 : {
          
      
    position : "absolute"  , 
    top : "16%"  , 
    height :  "10%"   , 
    width :  "95%"  , 
   
    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "pink"  , 
     flexDirection : "row"  , 
     justifyContent: "space-between" , 
     borderRadius : 10 , 
     borderColor : "grey" , 
     borderWidth : 2 , 
     overflow : "hidden" ,
   }  ,  


   ip3 : {
        
    height :  "10%"   , 
    width :  "95%"  ,   
    position : "absolute"  , 
    top : "32%"  , 

    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "#fff" ,
     flexDirection : "row", 
     justifyContent: "space-between" , 
     borderRadius : 10 , 
     borderColor : "grey" , 
     borderWidth : 2 , 
     overflow : "hidden" ,

  }  , 
  

  ip4 : {
    
  
    top : "48%" , 
    position : "absolute"  , 
    height :  "10%"   , 
    width :  "95%"  ,   
  
    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "pink"   , 
     flexDirection : "row"  , 
     justifyContent: "space-between" , 

     borderRadius : 10 , 
     borderColor : "grey" , 
     borderWidth : 2 , 
     overflow : "hidden" ,
  }  , 
  

  ip5 : {
    
     
    top : "64%" ,
    position : "absolute"  , 
    height :  "10%"   , 
    width :  "95%"  ,   

    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "pink" ,  
      flexDirection : "row"   , 
      justifyContent: "space-between" , 
      borderRadius : 10 , 
      borderColor : "grey" , 
      borderWidth : 2 , 

      overflow : "hidden" ,

    }  , 
    

     ip6 : {

      height : "100%"  , 
      width : "85%"  , 
      backgroundColor : "#fff" , 
      textAlignVertical : "center" , 
      padding  : 0 , 
      paddingLeft : 5 , 
    



     }  ,  

   ip7 : {

    height :  "10%"   , 
    width :  "95%"  ,   
    position : "absolute"  , 
    top : "32%"  , 
    textAlign : "left"  , 
     backgroundColor : "#fff" ,
     flexDirection : "row", 
     justifyContent: "space-between" , 
  


   }

     ,

   v5 : {
    
    

    width :  "90%"  , 
    top : "20%"  , 
    height :  "65%" , 
    backgroundColor  : "#fff"  , 
     elevation : 2, 
    zIndex :  5 , 
    alignItems : "center"  , 
     borderBottomRightRadius : 10, 
     borderBottomLeftRadius : 10 ,

   }   , 
  
    v6 : {

      height : "100%"  , 
      width : "15%"  , 
      backgroundColor : "#fff" , 
      padding : 0 , 
      paddingLeft : 5 , 
      alignItems :"flex-start" , 
      justifyContent : "center" , 




    }   , 


     v7 : {
      
      width : "95%"  , 
      height : "100%"  ,
      justifyContent : "flex-start"   , 
      flexDirection : "row"  , 
      alignItems: "center" , 
      backgroundColor: "#fff"




     }
    , 
   to2 : {
         
      
      borderBottomWidth : 5 ,  
      margin : 5 , 
       borderColor : "#547AA3"  , 
       backgroundColor : "#fff"  , 
  
        
   }
   ,  
   
   to1 : {
  
    borderBottomWidth : 5 ,
    margin : 5 , 
    borderColor : "#fff"  , 
    backgroundColor : "#fff"

   }
   ,    
   

   to4 : {
        
       
    height : windowWidth / 5 ,
    width :  windowWidth / 5 , 
    position : "absolute"  , 
    top : "88%"  , 
    zIndex : 8 , 
    textAlign : "center"  , 
     borderWidth :  1 , 
     backgroundColor : "#547AA3" ,
     alignItems : "center" , 
     justifyContent : "center" , 
     borderRadius : windowWidth / 5  , 
     borderWidth : 10 , 
     borderColor : "#fff"  , 
     elevation : 4, 
     overflow : "hidden"  ,
  
     

   }
   ,    
     
   text1 : {
  

   width : "90%"  , 
   fontWeight: '600' ,
   fontStyle: 'normal'  , 
    fontSize:24 , 
   lineHeight: 26, 
   letterSpacing: -0.408 ,
   color : "#fff"


   }   

   , 
   
   text2 :{
  
 
   fontWeight: '500' ,
   fontStyle: 'normal'  , 
    fontSize:16 , 
   lineHeight: 22, 
   letterSpacing: -0.408 ,
    color : "black" , 
  

   }  , 


   text3 :{
  
 
    fontWeight: '500' ,
    fontStyle: 'normal'  , 
     fontSize:16 , 
    lineHeight: 26, 
    letterSpacing: -0.408 ,
     color : "#547AA3"  ,
    padding : 4 , 
 
    }

     
  });
  