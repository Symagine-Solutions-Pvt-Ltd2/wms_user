import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity  , Dimensions     , StatusBar  , Platform  , KeyboardAvoidingView   , ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";  
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';












export default function WasteCollection ( {   route , navigation  }) {  
  /* 

  console.log( "inwastecollection")  ; 
  console.log(  route.params.token)  ; */
  const token = route.params.token ;  
         
  const [location, setLocation] = React.useState(null);   //location
  const [errorMsg, setErrorMsg] = React.useState(null);  
    
  const [value1, setValue1] = React.useState( null);  //  dropdown value select for plastic   
  const [ dropdownValue1  , setDropdownValue1] = React.useState( null);  //  dropdown value select for plastic

  const [value2, setValue2] = React.useState(  null);  //  dropdown value select  for waste 
  const [ dropdownValue2  , setDropdownValue2] = React.useState( null);


  const [isFocus1, setIsFocus1] = React.useState(false);    // plastic 
  const [isFocus2, setIsFocus2] = React.useState(false);    //  waste  

  const [ code  , onErrorchange ] = React.useState (false );  // 
  const [  designchange   , onDesignchange ] = React.useState (  true  );  //  toogle between  plastic waste and other waste (  subdivision;s state change  of every scrren ) 

  const [ state1  , onState1Change  ] = React.useState ( "" );   // willbe changed to name later   
  
  const [ state2  , onState2Change   ] = React.useState ( "Code of Waste Management Unit" );  
  const [ state3  , onState3Change  ] = React.useState ( "" );       //date 
  const [   state4  , onState4Change   ] = React.useState ( false );    // gps location 
  const [ state5  , onState5Change  ] = React.useState (  0  );      // state 5, 6 will be used to multiply . 
  const [   state6  , onState6Change   ] = React.useState (  0  ); 
   const [ state7 , onState7Change  ] = React.useState (  0  );   
  const [   state8  , onState8Change   ] = React.useState ( "" );   // saving the code , to replace state1 with name   

  

  // extra states --> 2 states numeric ,  three states = string  


  const [   state9  , onState9Change   ] = React.useState ( 0 ); 
  const [   state10  , onState10Change   ] = React.useState (  0 ); 
  const [   state11  , onState11Change   ] = React.useState ( "" ); 
  const [   state12  , onState12Change   ] = React.useState ( "" ); 
  const [   state13  , onState13Change   ] = React.useState ( "" ); 
 

  // stages of  plastic  

  
  const [isFocus3, setIsFocus3] = React.useState(false);    // plastic 
  const [value4, setValue4] = React.useState( "");
  const [value5 , setValue5] = React.useState( "Plastic condition");
  const [ ProcessingStage , setProcessingStage ] =  React.useState( []); 


  
  const  handler5  = () => {   
  
    const pushdata =  async () => {  
  
      try {
        const response = await fetch( 'http://circsol.in:5000/user/lists'  , 
        {    
          method: 'POST', 
     
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'  ,  
              'token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6InJpbW1vQGhtYWlsLmNvbSIsInJvbGVfaWQiOiIyIiwiX2lkIjoiNjQyMTI0MmYyMGVjZWI1MDhjNDdlYjJiIiwiZXhwIjoxNjgwNjg0ODM2fQ.lTKqS_zCzPy1wdsmsO4fuzBNrF2zB76wXyhRV2uBNVg" , 
          
          }
      , 
      body: JSON.stringify({

        "stage_of_processing" : value4
     }),
     }
       );  
  
        const json = await response.json(); 
     
          console.log(json); 
          setProcessingStage( json.data) ; 

      } catch (error) {
        console.error(error);
      }  
     };
  
    setIsFocus3(true);
    pushdata()  ; 
    
    }


    const  handler6  = (   title ) => {     
      

      if(  value5 === "Plastic condition"  ){
       
        setValue5(  title ) ; 
        setProcessingStage([]) ;
      }else{
           
        let  newTitle =  value5 + ","+ title ; 
        setValue5(  newTitle ) ; 
        setProcessingStage([]); 
      }
   
    }


 

  React.useEffect(() => {   // setting gps location 
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync(); 
      
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert("error while capturing gps!") ; 
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log( location.coords.longitude) ; 
      console.log( location.coords.latitude) ; 
      setLocation( `${location.coords.latitude},${location.coords.longitude}`);
   
    })();
  }, []);
 
  

   
  const dropdowndata1 = [ 
                               // types of plastic 
    { label: 'PET', value: '1' },     
    { label: 'HDPE', value: '2' },
    { label: 'PVC', value: '3' },
    { label: 'LDPE', value: '4' }, 
    { label: 'PP', value: '5' },
    { label: 'PS', value: '6' },
    { label: 'MLP', value: '7' }, 

  ];  
     

  const dropdowndata2 = [ 

    // types  of waste 

    { label: 'Glass', value: '1' },     
    { label: 'Paper', value: '2' },
    { label: 'Carton', value: '3' },
    { label: 'Metal - Iron', value: '4' }, 
    { label: 'Metal - Copper', value: '5' },
    { label: 'Metal - Tin', value: '6' },
    { label: 'Metal - Aluminium', value: '7' },  
    { label: 'Other', value: '8' },  

  ];  
     

   
  

  const screentype  =   route.params.screentype   ;   

 //   coding to set the date 
  // state3  is used to set date 
  

  let  date1 = new Date() ;
  console.log( date1) ; 
  date1.setDate(date1.getDate() - 7);

  let finalDate =  date1.getFullYear()+ ','+ (date1.getMonth()+1)  + ',' + date1.getDate();
  
 
 
  
  const [   mindate  ,  setMinDate  ] = React.useState(  date1 ) ;



  console.log( mindate.getFullYear() ) ; 




  const [ date, setDate ] = React.useState(  new Date()) ;
  const [  mode , setMode ] = React.useState( "date") ;
  const [ show , setShow  ] = React.useState(  false) ;
  
  const onChange = (  event , selectedDate)  => {
         
    const currentDate = selectedDate ||  date ; 
    
    setShow(  Platform.OS === "ios") ; 
    setDate( currentDate) ; 

    let tempDate = new Date( currentDate) ;
    let fDate = tempDate.getDate() + "-"  + (tempDate.getMonth()+1 )  + "-" +  tempDate.getFullYear() ; 
     onState3Change( fDate) ; 
    console.log( fDate) ; 


  }  

  const showMode = (  currentMode  ) => {

    setShow( true ) ;
    setMode(  currentMode) ; 
}







  //  api  request handlers 
      
  const submit  = () => {   

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/wastecollectordetail'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      "wc_code" :  state1   
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);  
        
        
   
       if ( json.msg  === "Retrieve successfully") {
                
         
         
        console.log(  json.data )  ;   
      
        onState2Change(   json.data.wmu_code) ;
        onState8Change(  state1 )  ; 
        onState1Change(  json.data.wc_name  )  ;
       
         
         console.log( "vbvhv")  ; 
         
         if(  code === true  ){
          onErrorchange( false  )  ;
         }

   
        } else {
            
          console.log(   json.message )  ;   
          onErrorchange(  true )  ;

   
        }
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 
 
 


 const submitcud  = () => {      // cud1 api 

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/cleanupdrivedetail'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      "wmu_code" :  state1
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);     
          

       if ( json.message === "Retrieve successfully") {
                
         
      
        console.log(  json.data )  ;   
        onState8Change(  state1 )  ;  
        onState1Change(   json.data.wmu_name) ; 
  
         console.log( "cud1")  ;  
         
         if(  code === true  ){
          onErrorchange( false  )  ;
         }

   
        } else {
            
          console.log(   json.message )  ;   
          onErrorchange(  true )  ;

   
        }
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ;   





    
        const submitos = () => {      // os1 api 

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/othersourcedetail'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      "wmu_code" :  state1
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);     
          

       if ( json.message === "Retrieve successfully") {
                
         
      
        console.log(  json.data )  ;   
        onState8Change(  state1 )  ;  
        onState1Change(   json.data.wmu_name) ; 
  
         console.log( "cud1")  ;  
         
         if(  code === true  ){
          onErrorchange( false  )  ;
         }

   
        } else {
            
          console.log(   json.message )  ;   
          onErrorchange(  true )  ;

   
        }
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 
  





      

 const submit1  = () => {    // for registering the data   (  plastic )
   
    
  console.log( location )  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/palsticwasteentry'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :  token , 
        
        }
    , 
    body: JSON.stringify({
       
           
      "wc_code" : state8,
     "wc_name" :  state1  ,
  "capture_gps" :   location  ,  
  "wmu_code" :  state2  , 
   "date_of_entry" :   state3 , 
   "plastic_type" :  dropdownValue1   , 
   "quantity" :  `${state5}` , 
   "rate"  :  `${state6}` ,
   "total_cost" : `${state7}`
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
         
       if(   json.message === "submitted Successfully."){

       
        alert( json.message) ; 
 


   setValue1("")  ; 
  onState5Change(  0) ;
  onState6Change( 0 ) ;
  onState7Change( 0 ) ; 
  setDropdownValue1("") ; 


       }
       else{
          
               
        alert( json.message) ;  
       }


   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 
  

 
 const submit2  = () => {    // for registering the data   ( other waste ) (  iwc )
   
    
  console.log( state1)  ; 
  console.log( state2)  ; 
  console.log( state3)  ; 
  console.log( state4)  ; 
  console.log( state5)  ; 
  console.log( state6)  ; 
  console.log( state7)  ;  
  console.log( state8)  ;   
  console.log( value2 ) ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/otherwasteentry'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
           
      "wc_code" : state8,
     "wc_name" :  state1  ,
  "capture_gps" :  location  ,  
  "wmu_code" :  state2  , 
   "date" :   state3 , 
   "plastic_type" :  dropdownValue2   , 
   "quantity" :  `${state5}` , 
   "rate"  : `${state6}`,
   "total_cost" :  `${state7}`
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);  
        
          
       if(   json.message === "submitted Successfully."){

       
        alert( json.message) ; 
         
        setDropdownValue2("")  ; 
         setValue2("")  ; 
      onState5Change(  0) ;
      onState6Change(  0) ;
      onState7Change(  0 ) ; 


       }
       else{
          
               
        alert( json.message) ;  
       }

   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



    
 
 
 const submit3  = () => {    // for registering the data  (  cud2)
   
    
  console.log( state8)  ; 
  console.log( state1)  ; 
  console.log( state3)  ; 
  console.log( state9)  ; 
  console.log( state13)  ;  
  console.log( state4)  ;  
  console.log( value1)  ; 
  console.log( state5)  ; 
 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/cleanupdriveentry'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :token , 
        
        }
    , 
    body: JSON.stringify({
       
      
  
        "wmu_code" : state8 , 
      "wmu_name":  state1 , 
      "capture_gps" :  location , 
      "date_of_entry" : state3 ,  
      "location_of_cleanup" : state13  , 
      "no_of_participants" :  `${state9}` , 
      "type_of_plastic" : dropdownValue1   , 
      "quantity" : `${state5}` ,  
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
        
           
        if(   json.message === "submitted Successfully."){

       
          alert( json.message) ; 
      
          setValue1("")  ; 
        onState5Change(  0  ) ;
        setDropdownValue1("")  ;
  
  
         }
         else{
            
                 
          alert( json.message) ;  
         }
  
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 


  

 //cleanupdrivetransportation 


   
 
 const submit4  = () => {    // (  cud3)
   
    
  console.log( state8)  ; 
  console.log( state1)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state9)  ;   

  console.log( state13)  ;  
  console.log( state11)  ; 
  console.log( state12)  ; 
    
  console.log( state10)  ;  
  console.log( state5)  ; 
  console.log( state6)  ; 
  console.log( state7)  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/cleanupdrivetransportation'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      
  
      "wmu_code" :  state8 , 
      "wmu_name" :   state1 , 
       "capture_gps" :  location , 
       "date_of_entry" : state3 , 
      "no_of_participants" :  `${state9}`, 
       "location_of_cleanup" :  state13 , 
       "from" : state11 , 
         "to" :  state12, 
         "quantity" :   `${state10}` , 
        "no_of_vehicles" :  `${state5}` , 
        "cost_per_unit" :  `${state6}`, 
        "total_cost" : `${state7}`
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
          

            
       if(   json.message === "submitted Successfully."){

       
        alert( json.message) ; 
      
        
  
        onState10Change( "" )  ; 
        onState11Change("") ;
        onState12Change("")  ; 
        onState5Change(  0 ) ;
        onState6Change(  0 ) ;
        onState7Change( 0 ) ; 


       }
       else{
          
               
        alert( json.message) ;  
       }

   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



  













 
 const submit5  = () => {    // (  os2)
   
     

  console.log("in submit buuton ") ;
  console.log( state12)  ; 
  console.log( state13)  ; 

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/othersourceentry'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      
  
   "wmu_name" :  state1 ,
   "wmu_code" :  state8 ,
    "capture_gps" : location  , 
    "date_of_entry":  state3 , 
    "type_of_plastic" :  dropdownValue1 , 
    "mention_source" :   state12 , 
    "source_location" :  state13   , 
    "condition_plastic" :   value5 , 
    "rate" :  `${state6}` , 
    "total_cost" :  `${state7}`, 
    "quantity" :  `${state5}` 
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);     

           
        if(   json.message === "submitted Successfully."){

       
          alert( json.message) ; 
       
          onState13Change("") ;
          onState12Change("") ; 
          setDropdownValue1("")  ; 
           setValue1("")  ; 
        onState5Change(0 ) ;
        onState6Change(  0 ) ;
        onState7Change( 0 ) ; 
        setValue5("Plastic condition") ; 
        setValue4("")  ; 
  
  
         }
         else{
            
                 
          alert( json.message) ;  
         }
  
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



 
 
 const submit6  = () => {    // (  os3)
   
    
  console.log( state1)  ; 
  console.log( state8)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state12)  ;   

  console.log( state11)  ;  
  console.log( state10)  ; 
  console.log( state5)  ; 
    
  console.log( state6)  ;  
  console.log( state7)  ; 



  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://circsol.in:5000/user/othersourcetransportation'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :token , 
        
        }
    , 
    body: JSON.stringify({
       
      
  
      "wmu_name" :   state1,
    "wmu_code" :  state8,
    "capture_gps" :  location , 
    "date_of_entry": state3 , 
     "from" :   state11 , 
     "to" :   state12 ,
    "quantity" : `${state10}` , 
    "no_of_vehicles" : `${state5}`   , 
     "cost_per_unit" :  `${state6}`  , 
      "total_cost" : `${state7}` ,  
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);  
        
        if(   json.message === "submitted Successfully."){

       
          alert( json.message) ; 
      
          onState10Change("") ; 
          onState11Change("") ; 
          onState12Change("") ; 
        onState5Change(  0) ;
        onState6Change( 0 ) ;
        onState7Change(  0 ) ; 
  
         }
         else{
            
                 
          alert( json.message) ;  
         }
  

   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 













  
   const handler1   = ()  => {
               
       onDesignchange(   true  ) ; 
       onState5Change( 0 )  ; 
       onState6Change( 0)  ; 
       onState7Change ( 0 )  ; 
       onState11Change( "") ; 
       setValue1("") ;

   }  ; 

   const handler2   = ()  => {
               
    onDesignchange(  false ) ; 
    
    onState5Change( 0 )  ; 
    onState6Change( 0)  ; 
    onState7Change ( 0 )  ; 
    onState11Change( "") ; 
    setValue2("") ;

}  ; 
   

     const handler3   = (  value )  => {
       
      console.log( "in handler 3 ") ; 
       console.log( value) ; 
      onState5Change( value) ; 
      let sum = value * state6 ;
      onState7Change( sum)  ; 
      console.log(sum )  ; 

      
}  ;   

  
   
const handler4   = (  value )  => {
       
  console.log( "in handler 4 ") ; 
   console.log( value) ; 
  onState6Change( value) ;  

  let sum = value * state5  ;
  onState7Change( sum)  ; 
  console.log(sum )  ; 

  
}  ;    


  
 const gpsHandler = () => { 

/*   console.log( "haKJxhjj")  ; 
  console.log(  state4)  ; 
  onState4Change( location) ;
  console.log(  state4)  ;  */

  console.log( state4) ; 
  if(  state4 ===  false){
    onState4Change( !state4 ) ;
  }
 
  alert("Successfully captured GPS!") ; 
}



  
  
      switch (  screentype ) {
        

         //  informal waste collector 




          case "iwc" :   
             
          return ( 
              
            <View    style={styles.container} > 
          
          <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />
           
         

           {
    show&& (
   
     <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display = 'default'
          onChange={onChange}  
          maximumDate = { new Date()}
          minimumDate ={ new Date( mindate.getFullYear()  , mindate.getMonth()  , mindate.getDate()+1 )  }
        
        
     />
    )

  }

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                   placeholder="Code of Waste Collector"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submit() }  }    
            > 
              <Icon  name="arrow-right" size={27} color = "#fff" /> 
            </TouchableOpacity >    

      
            </View>   
              
        
            { 

            ( code) ? 
                
            <View   style={styles.v2} > 

              </View>   
             :  
             <View   style={styles.v2} >    

               
             <View style={styles.v3} > 
              
              
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
                   placeholder={ state2}  editable= { false }
                                     />

              <View style={styles.ip2} >                       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.dateInput}   
             value= {  state3 }  onChangeText= { onState3Change }
                placeholder="Date of Entry (dd-mm-yyyy)"
                                     />
            <TouchableOpacity  
            onPress={ () => { showMode( 'date')}}
            style={styles.to7 }>               
            <MaterialCommunityIcons name="calendar-range" size={24} color="#000000" />
            </TouchableOpacity>  
                                     </View>

           <View  style={styles.v5} > 
     
            <TouchableOpacity style={styles.to2}  
                     onPress = {  ()  =>  { gpsHandler() } }
            > 
             <Text style={styles.t1} >Capture GPS</Text>   
            
            </TouchableOpacity>   

            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
               placeholder={ ( state4 )? location : "Location" }
                  />
            </View>   

            </View>  

            <View style={styles.v4} >  


             <LinearGradient
        // Background Linear Gradient
        colors={["rgba(120, 175, 234, 1)" , 
          "rgba(59, 77, 97, 1)]}" ]} 
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.8 }}
        style={ {  height : "100%"  , width  : "100%"}}
      >  

            <View   style={styles.v6}>    
            <TouchableOpacity  style={ designchange  ? styles.to3 :  styles.to6 } 
                  onPress = {  ()  =>  { handler1() } }
             >
            <Text style= {  designchange ? { } : {  color : "#fff"}}>Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text  style= {  designchange ? {  color : "#fff" } : { } } > Other Recyclable Waste</Text>

            </TouchableOpacity>
         
            </View>
          {  ( designchange  ) ? 
            < View  style={styles.v8}>   
                 
                
             <View  style={styles.to5} >  
                          
               <Dropdown
          style={[styles.dropdown, isFocus1&& { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdowndata1}
          labelField="label"
          valueField="value"
          placeholder=  "Types of Plastic"
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            
            setDropdownValue1( item.label)  ; 
            setValue1(item.value);
            setIsFocus1(false);
          }}
         
        />

               
               
              </View>
                 


             <View  style={styles.ip7}> 
              
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5} 
                value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5 ) } }
                placeholderTextColor='#ffffff8C'      placeholder="Quantity (in KGs)"  keyboardType="number-pad"
                    />  
  
                     
                  <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5} 
                   value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                   placeholderTextColor='#ffffff8C'    placeholder='Rate/KG(INR)'   keyboardType="number-pad" 
                   /> 
                     
                     </View>
                     
  
  
                  <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                placeholderTextColor='#ffffff8C'            placeholder= { `Total Cost( INR )  = ${ state7}` }    editable= { false }
                    />
  


               
            <TouchableOpacity style={styles.to5} 
                onPress = {( ) => { submit1() }  }  
            > 

               <Text> Submit </Text>
            </TouchableOpacity>

              
        
         
            </View>  
            : 
             
            < View  style={styles.v8}>   
                 
      
            <View  style={styles.to5} >  
               
            <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdowndata2}
          labelField="label"
          valueField="value"
          placeholder=  "Types of Waste"
          value={value2}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {

            setDropdownValue2(  item.label) ; 
            setValue2(item.value);
            setIsFocus2(false);
          }}
         
        />
             </View>
              
            <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                 placeholderTextColor='#ffffff8C'    placeholder="Quantity (in KGs)"   keyboardType="number-pad"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="Rate/KG (INR)"    keyboardType="number-pad"
                       placeholderTextColor='#ffffff8C'        value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                   />
                    
                    </View>
                    
 
 
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                 placeholderTextColor='#ffffff8C'    placeholder= { `Total Cost( INR )  = ${ state7}` }    editable = {  false }
                   />
 


              
           <TouchableOpacity style={styles.to5} 
                 onPress = {( ) => { submit2() }  }  
           > 

              <Text> Submit </Text>
           </TouchableOpacity>
        
           </View>  

          }
               
               </LinearGradient>
              
            </View>
        
            </View>   
            } 
        

  

            </View >

        

          )  

 


















          // clean up  drive  



          case "cud"  : 
             
          return ( 
              
            <View  style={styles.container} >

         <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />   

{
    show&& (
   
     <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display = 'default'
          onChange={onChange}  
          maximumDate = { new Date()}
          minimumDate ={ new Date( mindate.getFullYear()  , mindate.getMonth()  , mindate.getDate()+1 )  }
        
        
     />
    )

      }

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                       placeholder="Code of Waste Management Unit"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submitcud() }  }    
            > 
                <Icon  name="arrow-right" size={27} color = "#fff" /> 
            </TouchableOpacity >    

      
            </View>   
  
            { 

            ( code) ? 
                
            <View   style={styles.v2} > 

              </View>   
             :  
             <View   style={styles.v2} >    

               
             <View style={styles.v3} > 
              
             <View style={styles.ip2} >                       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.dateInput}   
             value= {  state3 }  onChangeText= { onState3Change }     
                      placeholder="Date of Entry (dd-mm-yyyy)"
                                     />  
            <TouchableOpacity  
            onPress={ () => { showMode( 'date')}}
            style={styles.to7 }>               
            <MaterialCommunityIcons name="calendar-range" size={24} color="#000000" />
            </TouchableOpacity>  
            </View>

                <View  style={styles.v5} >     

            <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip6}  
                         placeholder= "Number of Participants"       value= {  state9}  onChangeText= { onState9Change } 
                         keyboardType="number-pad"
                                     />

             <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip6}  
                        placeholder= "Location of Clean-Up"     value= {  state13 }  onChangeText= { onState13Change }
                                     />
                  </View>

               
              
           <View  style={styles.v5} > 
     
            <TouchableOpacity style={styles.to2} 
                onPress = {  ()  =>  { gpsHandler() } }
            > 
             <Text style={styles.t1} >Capture GPS</Text>   
            </TouchableOpacity>      
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                      editable= { false}
                      placeholder={ ( state4 )? location : "Location" }
                  />
            </View>   

            </View> 


            <View style={styles.v4} >     

             
            <LinearGradient
        // Background Linear Gradient
        colors={["rgba(120, 175, 234, 1)" , 
          "rgba(59, 77, 97, 1)]}" ]} 
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.8 }}
        style={ {  height : "100%"  , width  : "100%"}}
      >  


            <View   style={styles.v6}>    
            <TouchableOpacity  style={ designchange  ? styles.to3 :  styles.to6 } 
                  onPress = {  ()  =>  { handler1() } }
             >
            <Text  style= {  designchange ? { } : {  color : "#fff"}}>Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text  style= {  designchange ? {   color : "#fff"} : { }}>Transportation</Text>

            </TouchableOpacity>
         
            </View> 


          {  ( designchange  ) ? 
            < View  style={styles.v8}>   
                 
      
             <View  style={styles.to5} >  
                          
               <Dropdown
          style={[styles.dropdown, isFocus1&& { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdowndata1}
          labelField="label"
          valueField="value"
          placeholder=  "Types of Plastic"
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {

            setDropdownValue1(  item.label)  ; 
            setValue1(item.value);
            setIsFocus1(false);
          }}
         
        />

               
               
              </View>
                 


            
              
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4} 
                value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5 ) } }  keyboardType="number-pad"
                       placeholder="Quantity (in KGs)"   placeholderTextColor='#ffffff8C' 
                    />  


               
            <TouchableOpacity style={styles.to5} 
                onPress = {( ) => { submit3() }  }  
            > 

               <Text> Submit </Text>
            </TouchableOpacity>
         
            </View>  
            
            
            :   
             
            < View  style={styles.v8}>   
                  

                  <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                   value= {  state11 }  onChangeText= { onState11Change } 
                   placeholderTextColor='#ffffff8C'        placeholder="From (Place)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                     placeholderTextColor='#ffffff8C'       placeholder="To (Place)" 
                       value= {  state12 }  onChangeText= { onState12Change }
                   />
                    
                    </View>
  
              
            <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state10 }  onChangeText= { onState10Change }   keyboardType="number-pad"
                 placeholderTextColor='#ffffff8C'          placeholder="Quantity (in KGs)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                  placeholderTextColor='#ffffff8C'         placeholder="Number of Vehicles"   keyboardType="number-pad"
                       value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                   />
                    
                    </View>
                    

               <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4}  
                  keyboardType="number-pad"
                 value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                 placeholderTextColor='#ffffff8C'              placeholder="Cost per Unit (INR)"
                   />  
 
                  

                 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
              placeholderTextColor='#ffffff8C'              placeholder= { `Total Cost( INR )  = ${ state7}` }    editable = {  false }
                   />
 


              
           <TouchableOpacity style={styles.to5} 
                 onPress = {( ) => { submit4() }  }  
           > 

              <Text> Submit </Text>
           </TouchableOpacity>
        
           </View>  

          }

         </LinearGradient>
            </View>
        
            </View>   
            }
            </View>

        

          )  



































  // other sources 



          case "os"  :  

          return ( 
               
               
            <View  style={styles.container} >

          <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />  
  
  {
    show&& (
   
     <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display = 'default'
          onChange={onChange}  
          maximumDate = { new Date()}
          minimumDate ={ new Date( mindate.getFullYear()  , mindate.getMonth()  , mindate.getDate()+1 )  }
        
        
     />
    )

  }


            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Management Unit" 
                      value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submitos() }  }    
            > 
                 <Icon  name="arrow-right" size={27} color = "#fff" /> 
            </TouchableOpacity >    

      
            </View>   
  
            { 

            ( code) ? 
                
            <View   style={styles.v2} > 

              </View>   
             :  
             <View   style={styles.v2} >    

                <View style={styles.v3} > 
              
             

                <View style={styles.ip2} >                       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.dateInput}   
             value= {  state3 }  onChangeText= { onState3Change }
           
                      placeholder="Date of Entry (dd-mm-yyyy)"
                                     />
            <TouchableOpacity  
            onPress={ () => { showMode( 'date')}}
            style={styles.to7 }>               
            <MaterialCommunityIcons name="calendar-range" size={24} color="#000000" />
            </TouchableOpacity>  
                                     </View>
  
  
                
                 
                
             <View  style={styles.v5} > 
       
              <TouchableOpacity style={styles.to2}
                  onPress = {  ()  =>  { gpsHandler() } }
              > 
               <Text style={styles.t1} >Capture GPS</Text>   
              </TouchableOpacity>      
              <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                         editable= { false}
                         placeholder={ ( state4 )? location : "Location" }
                    />
              </View>   
  
              </View>  

            <View style={styles.v4} >    
              
                
            <LinearGradient
        // Background Linear Gradient
        colors={["rgba(120, 175, 234, 1)" , 
          "rgba(59, 77, 97, 1)]}" ]} 
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.8 }}
        style={ {  height : "100%"  , width  : "100%"}}
      >  

            
            <View   style={styles.v6}>    
            <TouchableOpacity  style={ designchange  ? styles.to3 :  styles.to6 } 
                  onPress = {  ()  =>  { handler1() } }
             >
            <Text  style= {  designchange ? { } : {  color : "#fff"}} >Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text  style= {  designchange ? {   color : "#fff"} : { }}>Transportation</Text>

            </TouchableOpacity>
         
            </View>
          {  ( designchange  ) ? 
            < View  style={styles.v8}>   
                 
      
             <View  style={styles.to5} >  
                          
               <Dropdown
          style={[styles.dropdown, isFocus1&& { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dropdowndata1}
          labelField="label"
          valueField="value"
          placeholder=  "Types of Plastic"
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => { 
           // console.log( item.label ) ;  
           setDropdownValue1( item.label) ; 
            setValue1(item.value);
            setIsFocus1(false);
          }}
         
        />

               
               
              </View>
                 


             <View  style={styles.ip7}> 
           

                
              {/* <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5} 
                     value= {  state11 }  onChangeText= { onState11Change }
                     placeholderTextColor='#ffffff8C' 
                        placeholder="Condition of Plastic"
                    />  
   */}
  
      <View style={ styles.ip5}>
         <Dropdown 
        
        style={[styles.dropdown, isFocus3 && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle1}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={ ProcessingStage }
        labelField="TITLE"
        valueField="ID"
        value={ value5 }
        placeholder=  { value5 }
        onFocus={() => handler5() }
        onBlur={() => setIsFocus3(false)}
        onChange={item => {
        
        setValue4( item.TITLE) ;
        handler6(  item.TITLE)  ; 
        setIsFocus3(false);
        }}
       
      />

   </View>       
                     
                  <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5} 
                        value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                        placeholder="Quantity (in KGs)"   keyboardType="number-pad"
                        placeholderTextColor='#ffffff8C' 
                    />
                     
                     </View>
                       
                     <View  style={styles.ip7}> 
                   
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                        placeholder= "Mention the Source"       value= {  state12 }  onChangeText= { onState12Change } 
                        placeholderTextColor='#ffffff8C' 
                                       />
  
               <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5}  
                        placeholder= "Source Location"     value= {  state13 }  onChangeText= { onState13Change }
                        placeholderTextColor='#ffffff8C'        />
                  
                  </View >

                    
                    
                     <View  style={styles.ip7}> 
                     <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5} 
                        value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                        placeholder="Rate/KG (INR)"   placeholderTextColor='#ffffff8C'  keyboardType="number-pad"
                    />
  
                  <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5} 
                        placeholder= { `Total Cost( INR )  = ${ state7}` }    editable= { false }
                        placeholderTextColor='#ffffff8C' 
                    />
                  
                  </View >


               
            <TouchableOpacity style={styles.to5} 
                onPress = {( ) => { submit5() }  }  
            > 

               <Text> Submit </Text>
            </TouchableOpacity>
         
            </View>   

            : 
             
            < View  style={styles.v8}>   
                  

                  <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                   value= {  state11 }  onChangeText= { onState11Change } 
                       placeholder="From (Place)"
                       placeholderTextColor='#ffffff8C' 
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="To (Place)" 
                       value= {  state12 }  onChangeText= { onState12Change }
                       placeholderTextColor='#ffffff8C' 
                   />
                    
                    </View>
  
              
            <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state10 }  onChangeText= { onState10Change }
                       placeholder="Quantity (in KGs)"  keyboardType="number-pad"
                       placeholderTextColor='#ffffff8C' 
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="Number of Vehicles"   keyboardType="number-pad"  
                       value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                       placeholderTextColor='#ffffff8C' 
                   />
                    
                    </View>
                    

               <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4}  
                  placeholderTextColor='#ffffff8C'    keyboardType="number-pad"
                 value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                       placeholder="Cost per Unit (INR)"
                   />  
 
                  

                 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                      placeholder= { `Total Cost( INR )  = ${ state7}` }    editable = {  false }
                      placeholderTextColor='#ffffff'   
                   />
 


              
           <TouchableOpacity style={styles.to5} 
                 onPress = {( ) => { submit6() }  }  
           > 

              <Text> Submit </Text>
           </TouchableOpacity>
        
           </View>  

          }

            
     </LinearGradient>
            </View>
        
            </View>   
            }
            </View>

        

          ) 
         

   }  
     
  }
    

   
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


  const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      backgroundColor : "#fff"  , 
      alignItems : 'center'
     
      
    },
      
    inner : {

      flex: 1 , 
      backgroundColor : "#fff"  , 
      alignItems   : "center"  ,
    }  , 

    v1: {
          
       height : "10%"  ,  
      width :"80%"  , 
      backgroundColor : '#fff'  , 
      alignItems : "center"  , 
      flexDirection : "row"  ,
      justifyContent :  "space-between" ,  
   


    }  , 


    v2 : {
      
      height : "90%"  , 
      width :"100%"  , 
      flex : 8 ,  
      backgroundColor : '#fff'  , 
      shadowColor : "#00000"  ,
      shadowRadius : 10 ,
 
    
    }  , 

    v3 :  {
      
      flex : 3   , 
       flexDirection : "column"  , 
       justifyContent : "space-evenly"   , 
       alignItems : "center"  , 
    }  , 

      v4 :  {
              

        backgroundColor : "#78AFEA" , 
        flex : 6 , 
        borderTopStartRadius :  20 ,
        borderTopEndRadius :  20   , 
        justifyContent : "space-between" 


      }  , 


      ip1  :  {   

        flex : -1 ,
        width : "75%" ,
        height :  "50%" , 
        paddingLeft : 15 , 
        textAlign : "left"  , 
        borderColor : "grey"  , 
        borderWidth : 1 , 
        borderRadius : 28 ,  


      }
   , 
        
   ip2  :  {  
    flex : -1 ,
    width : "80%" ,
    height :  "20%" , 
    paddingLeft : 15 , 
    textAlign : "left"  , 
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    flexDirection : "row"  , 
    overflow : "hidden"  , 
    justifyContent : "center" , 

  }
, 
        
ip3  :  {  
  flex : -1 ,
  width : "60%" ,
  height :  "100%" , 
  textAlign : "center", 
  borderColor : "grey"  , 
  borderWidth : 1 , 
  borderRadius : 28 ,   
  backgroundColor : "#fff"


}
,     

  ip4 : {

    flex : -1 ,
    width : "80%" ,
    height :  "10%" , 
    
    color : "#fff"  ,

    textAlign : "left"  , 
    borderColor : "#fff"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    flexDirection : "row"  , 
    justifyContent : "space-between"  ,
    textAlign : "center" , 



  }  , 


  ip5 : {

    flex : -1 ,
    width : "48%" ,
    height :  "100%" , 
    textAlign : "left"  , 
    borderColor : "#fff"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    flexDirection : "row"  , 
    textAlign : "center"  , 
 
    color : "#fff" , 
    overflow : "hidden"  , 



  }  , 
  

  ip6: {
   
    flex : -1 ,
    width : "48%" ,
    height :  "100%" , 
    textAlign : "left"  , 
  
    borderWidth : 1 , 
    borderRadius : 28 ,  
    flexDirection : "row"  , 
    textAlign : "center"  , 


  }
  
    , 

    ip7 : {

      flex : -1 ,
      width : "80%" ,
      height :  "10%" , 
     
      textAlign : "left"  , 
      borderRadius : 28 ,  
      flexDirection : "row"  , 
      justifyContent : "space-between"  ,
      textAlign : "center" , 


    }

    , 

   to1 : {
     
    flex : -1 ,   
    width :  windowWidth / 9  , 
    height :  windowWidth / 9 ,    
    borderRadius : 50  , 
    backgroundColor :  "#547AA3"  , 
    alignItems : "center"  , 
    justifyContent : "center"  , 

   }  , 

    to2 : {
        
      flex : -1 ,   
      width : "37%"  , 
      height : "100%"  ,  
      backgroundColor : "#78AFEA"    , 
      justifyContent  : "center"   , 
      flexDirection : "row" , 
      alignItems : "center"  ,   
      borderColor : "grey"  , 
      borderWidth : 1 , 
      borderRadius : 28 ,   
    }  , 
    
    to3 : {

      flex : -1 ,   
      width : "40%"  , 
      height : "40%"  ,   
      backgroundColor : "#fff"  , 
      borderRadius : 5 ,     
      alignItems  :  "center"  , 
      justifyContent : "center"  ,

    }   ,    

     to5 : {
         
      flex : -1 ,   
      width : "50%"  , 
      height : "13%"  ,  
      backgroundColor : "#fff"  , 
      borderRadius : 10 ,  
      justifyContent: "center"  , 
      alignItems : "center"  ,

     }  , 

     to6 : {

      flex : -1 ,   
      width : "40%"  , 
      height : "40%"  ,   
      backgroundColor : "#547AA3"  , 
      borderRadius : 5 ,     
      alignItems  :  "center"  ,
      justifyContent : "center"  , 
   

     }
    
     , 
     
     to7 : {

      flex : -1 ,   
      width : "20%"  , 
      height : "100%"  ,   
      backgroundColor : "#fff"  ,  
      alignItems  :  "center"  ,
      justifyContent : "center" 


     }



  , 



    v5 : {

     
      flex : -1 ,
      width : "80%" ,
      height :  "20%" ,  
      backgroundColor  : "#fff"  , 
      flexDirection :  "row"  , 
      justifyContent : "space-between" , 
      alignItems : "center"  , 
    
    }  , 
   
    v6 : {

     
      flex : -1 ,
      width : "100%" ,
      height :  "20%" ,   
      flexDirection : "row"  , 
       alignItems : "flex-end"  ,   
       justifyContent  : "center"  , 
    
    }  , 
   
      v8 : {
           
      flex : -1 ,
      width : "100%" ,
      height :  "80%" ,  
    
      justifyContent : "space-evenly"  , 
      alignItems : "center"  , 

      }  ,  
  

       v9 : {

           

       }
 ,   

     pc1: {

    textColor : "#fff"

     }  , 

    t1  :  {

     color : "#fff"  , 
     fontWeight: '600' ,
     fontStyle: 'normal'  , 
      fontSize:12 , 
     lineHeight: 22, 
     letterSpacing: -0.408 ,
     color : "#fff"
     

    }   ,    

     

    dateInput : {

      flex : -1 ,
      width : "80%" ,
      height :  "100%" ,   

    }  , 
    // dropdown style 


    

    dropdown: { 
      width :"100%"  , 
      height:  "100%" , 
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8, 

    },
    icon: {
      marginRight: 5,
    },

    placeholderStyle: {
      fontSize: 16,
      textAlign : "center"
   
    }, 


    placeholderStyle1: {
      fontSize: 14,
    color : "#ffffff8C"  , 
      textAlign : "center"
   
    },

    selectedTextStyle: { 
       

      fontSize: 12 ,  
      textAlign : "center"  , 
    
  
    },
    iconStyle: {
      width: 20,
      height: 20,
      color : "#ffffff8C"
    },  

    inputSearchStyle: {
     
      fontSize: 12,
   
    },
  
   

  });
  