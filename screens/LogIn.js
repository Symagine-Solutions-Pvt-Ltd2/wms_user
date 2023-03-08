import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity  , StatusBar } from 'react-native';

import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function LogIn(   { navigation  }) {

  const [ login  , onChangeLogin ] = React.useState( true );

    
  const [ visible  ,   onChangeVisibility ] = React.useState( true ); 


  
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");  



   // login 
  const [ Password2 , onChangePassword2 ] = React.useState("");     // password   
  const [  email1, onChangeEmail1 ] = React.useState("");  // email 
  

 // signup
  const [ name , onChangeName ] = React.useState("");     // password   
  const [ email , onChangeEmail ] = React.useState("");  // email 
  const [ password , onChangePassword ] = React.useState("");     // password   
  const [ password1 , onChangePassword1  ] = React.useState("");     // set password  
  const [ organization  , onChangeOrganization   ] = React.useState("");     //  organization 
 
   

  console.log(name ) ; 
  console.log(  email ) ; 
  console.log( password ) ; 
  console.log( password1) ; 
  console.log(  organization  ) ; 
 


  const [ icon , onChangeIcon] = React.useState( 'eye-slash');

   const handlePasswordVisibility   = ()  => {
            
    if(  icon == 'eye-slash') {
     
      onChangeIcon('eye')  ; 
      onChangeVisibility( false) ; 

    }else if(    icon == 'eye') {

      onChangeIcon('eye-slash')  ; 
      onChangeVisibility( true ) ; 
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
     const response = await fetch( 'http://10.0.2.2:8000/user/registeruser'  , 
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

       if( json.message  === "Registered Successfully.") {
               
          
        console.log( "vbvhv")  ; 
         onChangeLogin(  true)  ; 

       } else {
           
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
   const response = await fetch( 'http://10.0.2.2:8000/user/loginuser'  , 
   {   method: 'POST', 

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

     if( json.message  === "Login successful") {
             
      navigation.navigate("Home");
      console.log( "vbvhv")  ; 

       

     } else {
         
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

<Text>ygjggh gugu </Text>

</View>  

<View style={styles.v2}  >

<Text>second </Text>

</View>  

  <View style={styles.v3} >

  <TouchableOpacity  style={  login ? styles.to2 :  styles.to1}   
      onPress = {  ()  =>  { handler1() }}
  >
    <Text> login </Text>
    </TouchableOpacity>
   
    
    <TouchableOpacity  style={  login ? styles.to1 :  styles.to2 }
          onPress = {   ()  =>  { handler2() }}
         >
    <Text>  Signup </Text>
    </TouchableOpacity>
  
  </View> 
    
   {( login )
  ? 
    
<View style={styles.v4} >

         
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
              placeholder="Email Address"    value= { email1 }  onChangeText= { onChangeEmail1 } />


   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
            placeholder="Password"  value= { Password2  }   onChangeText = {  onChangePassword2}/>        

<View style={styles.ip3} > 
  <Icon     name="check"  style={{ borderWidth : 4 , borderColor : "pink"  , padding : 5 ,  }}      size={22} /> 
<Text> Remember me</Text>      

<TouchableOpacity  
   onPress = {  ( ) => { navigation.navigate("Home")}}>
<Text>Forgot Password?</Text>
</TouchableOpacity>
    
  </View >
    
  <TouchableOpacity  
       style={styles.to4} 
      onPress = {  submit2 } >

    <Text> login</Text>
  </TouchableOpacity>
</View>

:

<View style={styles.v5} >  

  
<View  style={styles.ip1} >
    
    <TextInput  autoCapitalize='none'   autoCorrect={ false}      
            placeholder="Name"  value= {   name }   onChangeText = {onChangeName   }/>    
        
        <View     > 
        <Icon  name="user" size={27} /> 
         </View>
    
     </View> 
       
   

  
<View   style={styles.ip2}  >  

<TextInput  autoCapitalize='none'   autoCorrect={ false} 
                   placeholder="Email Address"   value= { email }   onChangeText = {  onChangeEmail } />
  
 
  <View   > 
  <Icon  name="envelope" size={27} /> 
  </View>
    
  </View>  

  


<View   style={styles.ip3} >   

<TextInput  autoCapitalize='none'   autoCorrect={ false}  
         placeholder="Password"  value= { password }  onChangeText = {  onChangePassword} />        

<View  > 
  <Icon  name="eye-slash" size={27} /> 
  </View>
    
</View>    



 

<View  style={styles.ip4}  >   
<TextInput  autoCapitalize='none'   autoCorrect={ false}   
         placeholder="Re-enter  Password"  value= { password1  }  onChangeText = {  onChangePassword1 }/>    

<View  >  

  <Icon  name="eye-slash" size={27} /> 
  </View>
</View>   
  



<View  style={styles.ip5}>   

<TextInput  autoCapitalize='none'   autoCorrect={ false} 
         placeholder="Organisation Name"  value= { organization }   onChangeText = {  onChangeOrganization }  />      
<View  >  

<Icon  name="building" size={27} /> 
</View>
</View>



   <TouchableOpacity style={styles.to4} 
      onPress = {  submit1 }
 >
     <Text>Sign Up</Text>
   </TouchableOpacity>  


</View>

}

    </View>
        
      
    );
  }
  
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
       backgroundColor : '#78AFEA'  , 
        alignItems: "center"  , 
        justifyContent : "center"  , 
       
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
         elevation  : 6 , 
         borderRadius : 10 , 
         justifyContent : "flex-start"   , 
         flexDirection : "row"  , 

      }
   , 
    

   v4 : {
       
     
    width :  "90%"  , 
    top: "20%"  , 
    height : "50%"  , 
    backgroundColor : "red"  , 
    elevation  : 6 , 
    zIndex :  5 ,
     
    alignItems : "center"  , 
     
   }   , 

    ip1 : {
       
      position : "absolute"  , 
      top : "0%"  , 
      height :  "10%"   , 
      width :  "100%"  , 
      paddingLeft : 15 , 
      textAlign : "left"  , 
      borderColor: "#000000" , 
       borderWidth :  1 , 
       backgroundColor : "pink" , 
       flexDirection : "row"  , 


    }  , 


   ip2 : {
          
      
    position : "absolute"  , 
    top : "16%"  , 
    height :  "10%"   , 
    width :  "100%"  , 
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "pink"  , 
     flexDirection : "row"  , 

   }  ,  


   ip3 : {
        
    height :  "10%"   , 
    width :  "100%"  ,   
    position : "absolute"  , 
    top : "32%"  , 
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "blue" ,
     flexDirection : "row", 



  }  , 
  

  ip4 : {
    
  
    top : "48%" , 
    position : "absolute"  , 
    height :  "10%"   , 
    width :  "100%"  ,   
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "pink"   , 
     flexDirection : "row"  , 


  }  , 
  

  ip5 : {
    
     
    top : "64%" ,
    position : "absolute"  , 
    height :  "10%"   , 
    width :  "100%"  ,   
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "pink" ,  
      flexDirection : "row"   , 


    }  , 


   v5 : {
    
    

    width :  "90%"  , 
    top : "20%"  , 
    height :  "65%" , 
    backgroundColor  : "green"  , 
    elevation  : 6 , 
    zIndex :  5 , 
    alignItems : "center"  , 

   }   , 

   to2 : {
         
    backgroundColor : "red"  , 
      borderBottomWidth : 5 ,  
       borderColor : "black"  , 
        
   }
   ,  
   
   to1 : {
       
        
   }
   ,    
   

   to4 : {
        
       
    height :  "10%"   , 
    width :  "50%"  ,   
    position : "absolute"  , 
    top : "95%"  , 
    zIndex : 10 , 
    textAlign : "center"  , 
    borderColor: "#000000" , 
     borderWidth :  1 , 
     backgroundColor : "blue" ,
     flexDirection : "row", 

   }
   ,    
   

     
  });
  