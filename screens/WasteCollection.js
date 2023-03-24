import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";  
import { Dropdown } from 'react-native-element-dropdown';


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
  const [ state3  , onState3Change  ] = React.useState ( "" );     
  const [   state4  , onState4Change   ] = React.useState ( "Location" );    // gps location 
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
      setLocation( `${location.coords.longitude},${location.coords.latitude}`);
   
    })();
  }, []);
 
  

   
  const dropdowndata1 = [ 
                               // types of plastic 
    { label: 'PET', value: '1' },     
    { label: 'HDPE', value: '2' },
    { label: 'PVC', value: '3' },
    { label: 'LDPE', value: '4' }, 
    { label: 'PP', value: '5' },
    { label: 'ps', value: '6' },
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
      
  const submit  = () => {   

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/wastecollectordetail'  , 
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
      const response = await fetch( 'http://10.0.2.2:8000/user/cleanupdrivedetail'  , 
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
      const response = await fetch( 'http://10.0.2.2:8000/user/othersourcedetail'  , 
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
   
    
  console.log( state1)  ; 
  console.log( state2)  ; 
  console.log( state3)  ; 
  console.log( state4)  ; 
  console.log( state5)  ; 
  console.log( state6)  ; 
  console.log( state7)  ;  
  console.log( state8)  ;   
  console.log( value1 ) ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/palsticwasteentry'  , 
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
  "capture_gps" :  state4 ,  
  "wmu_code" :  state2  , 
   "date_of_entry" :   state3 , 
   "plastic_type" :  dropdownValue1   , 
   "quantity" :  state5 , 
   "rate"  :  state6 ,
   "total_cost" :  state7
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
        
        alert( "Information submitted Successfully !") ; 
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 
  

 
 const submit2  = () => {    // for registering the data   (  waste ) (  iwc )
   
    
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
      const response = await fetch( 'http://10.0.2.2:8000/user/otherwasteentry'  , 
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
  "capture_gps" :  state4 ,  
  "wmu_code" :  state2  , 
   "date" :   state3 , 
   "plastic_type" :  dropdownValue2   , 
   "quantity" :  state5 , 
   "rate"  :  state6 ,
   "total_cost" :  state7
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);    
        alert( "Information submitted Successfully !")    ;
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
      const response = await fetch( 'http://10.0.2.2:8000/user/cleanupdriveentry'  , 
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
      "capture_gps" :  state4  , 
      "date_of_entry" : state3 ,  
      "location_of_cleanup" : state13  , 
      "no_of_participants" :  state9 , 
      "type_of_plastic" : dropdownValue1   , 
      "quantity" : state5 ,  
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);     
        alert( "Information submitted Successfully !") ;
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
      const response = await fetch( 'http://10.0.2.2:8000/user/cleanupdrivetransportation'  , 
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
       "capture_gps" :  state4 , 
       "date_of_entry" : state3 , 
      "no_of_participants" :  state9, 
       "location_of_cleanup" :  state13 , 
       "from" : state11 , 
         "to" :  state12, 
         "quantity" :  state10 , 
        "no_of_vehicles" : state5 , 
        "cost_per_unit" :  state6, 
        "total_cost" :  state7 
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);   
        
        alert( "Information submitted Successfully !");
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 



  













 
 const submit5  = () => {    // (  os2)
   
    
  console.log( state8)  ; 
  console.log( state1)  ;  

  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log(  value1)  ;   

  console.log( state13)  ;  
  console.log( state11)  ; 
  console.log( state12)  ; 
  console.log( state5)  ; 
  console.log( state6)  ; 
  console.log( state7)  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/othersourceentry'  , 
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
    "capture_gps" :  state4 , 
    "date_of_entry":  state3 , 
    "type_of_plastic" :  dropdownValue1 , 
    "mention_source" :   state12 , 
    "source_location" :  state13   , 
    "condition_plastic" :  state11, 
    "rate" :  state6 , 
    "total_cost" :  state7 , 
    "quantity" :  state5 
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);     

        alert( "Information submitted Successfully !") ; 
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
      const response = await fetch( 'http://10.0.2.2:8000/user/othersourcetransportation'  , 
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
    "capture_gps" :  state4 , 
    "date_of_entry": state3 , 
     "from" :   state11 , 
     "to" :   state12 ,
    "quantity" : state10 , 
    "no_of_vehicles" :  state5  , 
     "cost_per_unit" :  state6 , 
      "total_cost" :  state7 ,  
    
      
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);  
        
        alert( "Information submitted Successfully !");
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
  onState4Change( location) ;
  alert("Successfully captured GPS!") ; 
}



  
  
      switch (  screentype ) {
        

         //  informal waste collector 




          case "iwc" :   
             
          return ( 
              
            <View  style={styles.container} > 
          
          <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />
      

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Collector"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submit() }  }    
            > 
              <Icon  name="arrow-right" size={27} color = "red" /> 
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

                                     
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2}  
             value= {  state3 }  onChangeText= { onState3Change }
                      placeholder="Date of Entry (dd-mm-yyyy)"
                                     />

           <View  style={styles.v5} > 
     
            <TouchableOpacity style={styles.to2}  
                     onPress = {  ()  =>  { gpsHandler() } }
            > 
             <Text style={styles.t1} >Capture GPS</Text>   
            
            </TouchableOpacity>      
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                    placeholder={ state4}
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
            <Text>Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text> Other Recyclable Waste</Text>

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
                        placeholder="Quantity (in KGs)"
                    />  
  
                     
                  <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5} 
                   value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                        placeholder="Rate/KG (INR)"
                    />
                     
                     </View>
                     
  
  
                  <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                        placeholder= { `Total Cost( INR )  = ${ state7}` }    editable= { false }
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
                       placeholder="Quantity (in KGs)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="Rate/KG (INR)" 
                       value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                   />
                    
                    </View>
                    
 
 
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                      placeholder= { `Total Cost( INR )  = ${ state7}` }    editable = {  false }
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
            </View>

        

          )  

 


















          // clean up  drive  



          case "cud"  : 
             
          return ( 
              
            <View  style={styles.container} >

         <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Management Unit"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submitcud() }  }    
            > 
                <Icon  name="arrow-right" size={27} color = "red" /> 
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
             value= {  state3 }  onChangeText= { onState3Change }
                      placeholder="Date of Entry (dd-mm-yyyy)"
                                     />  


                <View  style={styles.v5} >     

            <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip6}  
                      placeholder= "Number of Participants"       value= {  state9}  onChangeText= { onState9Change } 

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
                        value= {  state4 }  onChangeText= { onState4Change }
                      placeholder="Captured Location"
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
            <Text>Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text>Transportation</Text>

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
                value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5 ) } }
                        placeholder="Quantity (in KGs)"
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
                       placeholder="From (Place)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="To (Place)" 
                       value= {  state12 }  onChangeText= { onState12Change }
                   />
                    
                    </View>
  
              
            <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state10 }  onChangeText= { onState10Change }
                       placeholder="Quantity (in KGs)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="Number of Vehicles" 
                       value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                   />
                    
                    </View>
                    

               <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4}  
            
                 value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                       placeholder="Cost per Unit (INR)"
                   />  
 
                  

                 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                      placeholder= { `Total Cost( INR )  = ${ state7}` }    editable = {  false }
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

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Management Unit"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submitos() }  }    
            > 
                 <Icon  name="arrow-right" size={27} color = "red" /> 
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
               value= {  state3 }  onChangeText= { onState3Change }
                        placeholder="Date of Entry (dd-mm-yyyy)"
                                       />  
  
  
                  <View  style={styles.v5} >    
                    </View>
  
                 
                
             <View  style={styles.v5} > 
       
              <TouchableOpacity style={styles.to2}
                  onPress = {  ()  =>  { gpsHandler() } }
              > 
               <Text style={styles.t1} >Capture GPS</Text>   
              </TouchableOpacity>      
              <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                          value= {  state4 }  onChangeText= { onState4Change }
                        placeholder="Captured Location"
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
            <Text>Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text>Transportation</Text>

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
              
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5} 
                     value= {  state11 }  onChangeText= { onState11Change }
                        placeholder="Condition of Plastic"
                    />  
  
                     
                  <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5} 
                        value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                        placeholder="Quantity (in KGs)"
                    />
                     
                     </View>
                       
                     <View  style={styles.ip7}> 
                   
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                        placeholder= "Mention the Source"       value= {  state12 }  onChangeText= { onState12Change } 
  
                                       />
  
               <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5}  
                        placeholder= "Source Location"     value= {  state13 }  onChangeText= { onState13Change }
                                       />
                  
                  </View >

                    
                    
                     <View  style={styles.ip7}> 
                     <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5} 
                        value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                        placeholder="Rate/KG (INR)"
                    />
  
                  <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5} 
                        placeholder= { `Total Cost( INR )  = ${ state7}` }    editable= { false }
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
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="To (Place)" 
                       value= {  state12 }  onChangeText= { onState12Change }
                   />
                    
                    </View>
  
              
            <View  style={styles.ip7}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state10 }  onChangeText= { onState10Change }
                       placeholder="Quantity (in KGs)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="Number of Vehicles" 
                       value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                   />
                    
                    </View>
                    

               <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4}  
            
                 value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                       placeholder="Cost per Unit (INR)"
                   />  
 
                  

                 <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                      placeholder= { `Total Cost( INR )  = ${ state7}` }    editable = {  false }
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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      backgroundColor : "#fff"  , 
      alignItems   : "center"  , 
      
    },
      

    v1: {
          
      flex : 1  ,   
      width :"80%"  , 
      backgroundColor : '#fff'  , 
      alignItems : "center"  , 
      flexDirection : "row"  ,
      justifyContent :  "space-between" ,  
   


    }  , 


    v2 : {
      
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
    width : "10%"  , 
    height : "50%"  ,    
    borderRadius : 50  , 
    backgroundColor :  "black"  , 

   }  , 

    to2 : {
        
      flex : -1 ,   
      width : "40%"  , 
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
      height : "30%"  ,   
      backgroundColor : "#fff"  , 
      borderRadius : 5 ,     
      alignItems  :  "center"  , 

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
      height : "30%"  ,   
      backgroundColor : "#3B4D61"  , 
      borderRadius : 5 ,     
      alignItems  :  "center"  , 


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



    t1  :  {

   
     

    }   ,    


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
      fontWeight : "300" ,   
      textAlign : "center"
   
    },
    selectedTextStyle: { 
       

      fontSize: 16 , 
  
    },
    iconStyle: {
      width: 20,
      height: 20,
    },  

    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  
   

  });
  