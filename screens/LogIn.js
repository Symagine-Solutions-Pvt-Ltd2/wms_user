import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity  , StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

     if( json.message  === "Login successful") {
       
     // console.log(json.data.token );  
      navigation.navigate("Home" ,   { token  : json.data.token  } );
     // console.log( "vbvhv")  ; 

       

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

<LinearGradient
        // Background Linear Gradient
        colors={["rgba(120, 175, 234, 1)" , 
          "rgba(59, 77, 97, 1)]}" ]} 
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.6 }}
        style={styles.v1_background}
      >


</LinearGradient>

</View>  

<View style={styles.v2}  >

<Text></Text>

</View>  

  <View style={styles.v3} >

  <TouchableOpacity  style={  login ? styles.to2 :  styles.to1}   
      onPress = {  ()  =>  { handler1() }}
  >

    <Text    > login </Text>
    </TouchableOpacity>
   
    
    <TouchableOpacity  style={  login ? styles.to1 :  styles.to2 }
          onPress = {   ()  =>  { handler2() }}
         >
    <Text >  Signup </Text>
    </TouchableOpacity>
  
  </View> 
    
   {( login )
  ? 
    
<View style={styles.v4} >


  
        <View style={styles.ip1}  >
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip6} 
              placeholder="Email Address"    value= { email1 }  onChangeText= { onChangeEmail1 } />
         
          
         <View   style={styles.v6} > 
        <Icon  name="user" size={27} /> 
         </View>
       </View>
   
         

       <View style={styles.ip2}   >
   <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip6} 
            placeholder="Password"  value= { Password2  }   onChangeText = {  onChangePassword2}/>     

     <View   style={styles.v6} > 
        <Icon  name="eye-slash" size={27} /> 
         </View>
       </View>


<View style={styles.ip7} > 
  <Icon     name="check"  style={{ borderWidth : 4  , padding : 5 ,  }}      size={22} /> 
  <TouchableOpacity
      onPress = {  ( ) => { navigation.navigate("PlasticProcessing")}}
  >
<Text> Remember me</Text>      
</TouchableOpacity>
<TouchableOpacity  
   onPress = {  ( ) => { navigation.navigate("SummaryTable")}}>
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
    
    <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6}      
            placeholder="Name"  value= {   name }   onChangeText = {onChangeName }/>    
        
        <View   style={styles.v6}  > 
        <Icon  name="user" size={27} /> 
         </View>
    
     </View> 
       
   

  
<View   style={styles.ip2}  >  

<TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip6}  
                   placeholder="Email Address"   value= { email }   onChangeText = {  onChangeEmail } />
  
 
  <View    style={styles.v6}  > 
  <Icon  name="envelope" size={27} /> 
  </View>
    
  </View>  

  


<View   style={styles.ip3} >   

<TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6} 
         placeholder="Password"  value= { password }  onChangeText = {  onChangePassword} />        

<View   style={styles.v6}  > 
  <Icon  name="eye-slash" size={27} /> 
  </View>
    
</View>    



 

<View  style={styles.ip4}  >   
<TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip6} 
         placeholder="Re-enter  Password"  value= { password1  }  onChangeText = {  onChangePassword1 }/>    

<View   style={styles.v6}  >  

  <Icon  name="eye-slash" size={27} /> 
  </View>
</View>   
  



<View  style={styles.ip5}>   

<TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6} 
         placeholder="Organisation Name"  value= { organization }   onChangeText = {  onChangeOrganization }  />      
<View  style={styles.v6}  >  

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
       backgroundColor : '#fff'  , 
        alignItems: "center"  , 
        justifyContent : "center"  , 
       
    }
      , 

      v1_background : {
          
        flex : -1  , 
         width : "100%"  , 
         height : "100%"  , 

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
         justifyContent : "flex-start"   , 
         flexDirection : "row"  , 
         alignItems: "center" , 

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

    }  , 
    

     ip6 : {

      height : "100%"  , 
      width : "90%"  , 
      backgroundColor : "#fff" , 
      textAlignVertical : "center" , 
      padding : 0 , 
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

   }   , 
  
    v6 : {

      height : "100%"  , 
      width : "10%"  , 
      backgroundColor : "#fff" , 
      padding : 0 , 
      paddingLeft : 5 , 
      alignItems :"flex-start" , 
      justifyContent : "center" , 




    }
    , 
   to2 : {
         
      
      borderBottomWidth : 5 ,  
       borderColor : "#333D79"  , 
       height : "50%"  ,
        
   }
   ,  
   
   to1 : {
       
    height : "50%"  ,

   }
   ,    
   

   to4 : {
        
       
    height :  "15%"   , 
    width :  "40%"  ,   
    position : "absolute"  , 
    top : "93%"  , 
    zIndex : 10 , 
    textAlign : "center"  , 
     borderWidth :  1 , 
     backgroundColor : "#333D79" ,
     flexDirection : "row",  
     borderRadius : 10 ,
     borderWidth : 5 , 
     borderColor : "#fff"
     

   }
   ,    
   

     
  });
  