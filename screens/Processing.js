import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";  
import { Dropdown } from 'react-native-element-dropdown';


export default function WasteCollection ( {   route , navigation  }) {  
/* 
  console.log( "inprocessing")  ; 
  console.log(  route.params.token)  ; 

  */
  const token = route.params.token ; 
        


  const [location, setLocation] = React.useState(null);   //location
  const [errorMsg, setErrorMsg] = React.useState(null);  


  const [value1, setValue1] = React.useState( null);  //  dropdown value select for plastic 
  const [ dropdownValue1  , setDropdownValue1] = React.useState( null);  //  dropdown value select for plastic 

  const [value2, setValue2] = React.useState(  null);  //  dropdown value select  for waste 
  const [ dropdownValue2  , setDropdownValue2 ] = React.useState( null);  //  dropdown value select for plastic 


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
      
  const submitseg  = () => {      // seggregation 1

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/wsegregator'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' :  token , 
        
        }
    , 
    body: JSON.stringify({
       
      "uw_code" :  state1   
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);     
   
       if ( json.message  === "Retrieve successfully") {
                
         
         
        console.log(  json.data )  ;   
      
        onState2Change(   json.data.wmu_code) ;
        onState8Change(  state1 )  ; 
        onState1Change(  json.data.uw_name  )  ;
       
         
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
 

 const submitseg2  = () => {      //  seggregation2 

  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/primarysegregation'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      "uw_code":  state8,
    "uw_name": state1, 
    "wmu_code": state2 , 
    "capture_gps": state4,
    "date_of_entry":  state3,
    "segregated_waste_quantity":  state5 ,
    "working_hours": state6,
    "amount_paid": state10 
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);     

        alert( "Information submitted Successfully !");
        
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ;   



 const submitseg3  = () => {    // seggregation 3  
   
    
  console.log( state8)  ; 
  console.log( state1)  ; 
  console.log( state2)  ; 
  console.log( state4)  ; 
  console.log( state5)  ; 
  console.log( state3)  ; 
  console.log( state6)  ;  
  console.log( state10)  ;   
 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/secondarysegregation'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      "uw_code":  state8,
    "uw_name": state1, 
    "wmu_code": state2 , 
    "capture_gps": state4,
    "date_of_entry":  state3,
    "segregated_waste_quantity":  state5 ,
    "working_hours": state6,
    "amount_paid": state10 
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);    
        alert( "Information submitted Successfully !"); 
        
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 
  

 
 const submitproc = () => {  //   proccesing 1
   
   
  
  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/wmuview'  , 
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
   
       if ( json.message  === "Retrieve successfully") {
                
         
         
        console.log(  json.data )  ;   
      
       
        onState8Change(  state1 )  ; 
        onState1Change(  json.data.wmu_name  )  ;
       
         
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



      


 
 
 const submitproc1  = () => {    // proccesing 2
   
    
  console.log( state8)  ; 
  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log( state6)  ; 
  console.log( state10)  ;  
  console.log( state11)  ;  
  console.log( value1)  ; 
  console.log( state5)  ; 
 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/processing'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : token , 
        
        }
    , 
    body: JSON.stringify({
       
      
   "wmu_code":  state8 ,
   "capture_gps": state4 ,
     "date_of_entry":  state3,
     "quantity": state5,
        "working_hours": "70"  ,
         "amount_paid": state10 ,
     "type_of_plastic": dropdownValue1 ,
"stage_of_processing":state11   ,
"workers_involved": state6

   
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


  

 //transportation


   
 
 const submittrans  = () => {    // transpor1 
     
    
       
  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/transportation'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6InJpbW1vQGhtYWlsLmNvbSIsInJvbGVfaWQiOiIyIiwiX2lkIjoiNjNmZWVlYWZmNWQwYTkxNWRhNDFlNTY5IiwiZXhwIjoxNjc4OTQ2MjAxfQ._4eLOEn2-qlo3UGq44RMMjxn0X6Zfl2UEAkvjokH5UM'
        
        }
    , 
    body: JSON.stringify({
       
      "wmu_code" :  state1   
   
   }),
   }
     );
      const json = await response.json(); 
   
        console.log(json);     
   
       if ( json.message  === "Retrieve successfully") {
                
         
         
        console.log(  json.data )  ;   
      
        
        onState8Change(  state1 )  ; 
        onState1Change(  json.data.wmu_name  )  ;
       
         
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





 
 const submittrans2  = () => {    // transportation2
   
    
  console.log( state8)  ; 
  console.log( state1)  ;  

  console.log( state4)  ; 
  console.log( state3)  ; 
  console.log(  value1)  ;   

  console.log( state10)  ;  
  console.log( state11)  ; 
  console.log( state12)  ; 
  console.log( state5)  ; 
  console.log( state6)  ; 
  console.log( state7)  ; 


  const pushdata =  async () => {  

    try {
      const response = await fetch( 'http://10.0.2.2:8000/user/transportationentry'  , 
      {    
        method: 'POST', 
   
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,  
            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6InJpbW1vQGhtYWlsLmNvbSIsInJvbGVfaWQiOiIyIiwiX2lkIjoiNjNmZWVlYWZmNWQwYTkxNWRhNDFlNTY5IiwiZXhwIjoxNjc4OTQ2MjAxfQ._4eLOEn2-qlo3UGq44RMMjxn0X6Zfl2UEAkvjokH5UM'
        
        }
    , 
    body: JSON.stringify({
       
     
      "wmu_name" :  state1 ,
      "wmu_code" : state8 ,
     "capture_gps" : state4 , 
      "date_of_entry" : state3  , 
       "from":   state11 ,  
       "type_of_waste" : dropdownValue1  , 
      "to" : state12 , 
      "transport_quantity" : state10 , 
      "number_of_vehicle" : state5 , 
      "cost_per_unit" :  state6 , 
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



 
 



  
   const handler1   = ()  => {
               
       onDesignchange(   true  ) ; 
       onState5Change( 0 )  ; 
       onState6Change( 0)  ; 
       onState7Change ( 0 )  ; 
       onState10Change( 0) ; 
       
       setValue1("") ;

   }  ; 

   const handler2   = ()  => {
               
    onDesignchange(  false ) ; 
    
    onState5Change( 0 )  ; 
    onState6Change( 0)  ; 
    onState7Change ( 0 )  ; 
    onState10Change(  0 ) ; 

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

  
    
 const gpsHandler = () => { 
  onState4Change( location) ;
  alert("Successfully captured GPS!") ; 
}



  
  
      switch (  screentype ) {
        











         //  "seggregation"




          case "seggregation" :   
             
          return ( 
              
            <View  style={styles.container} >

             <StatusBar 
        barStyle="dark-content"  
        backgroundColor = '#fff'
       />
            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Segregator"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submitseg() }  }    
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
                       
                      placeholder= {state4 }
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
            <Text>Primary</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  designchange  ? styles.to6 :  styles.to3 }  
                onPress = {  ()  =>  { handler2() }} 
            >
            <Text> Secondary</Text>

            </TouchableOpacity>
         
            </View>
          {  ( designchange  ) ? 
            < View  style={styles.v8}>   
                


           
              
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4} 
                 value= {  state5 }  onChangeText= { onState5Change }
                        placeholder="Quantity of Waste Segregated (in KGs)"
                    />  
  
                     
                  <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip4} 
                     value= {  state6 }  onChangeText= { onState6Change }
                        placeholder="Working Hours"
                    />
                     
                     
                     
  
  
                  <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4}
                      value= {  state10 }  onChangeText= { onState10Change }
                        placeholder=  "Amount Paid (INR)"  
                    />
  


               
            <TouchableOpacity style={styles.to5} 
                onPress = {( ) => {  submitseg2() }  }  
            > 

               <Text> Submit </Text>
            </TouchableOpacity>
         
            </View>  
            : 
             
            < View  style={styles.v8}>   
                 
      
          
           
               
              
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4} 
                value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5 ) } }
                        placeholder="Quantity of Waste Segregated (in KGs)"
                    />  
  
                     
                  <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip4} 
                   value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                        placeholder="Working Hours"
                    />
                     
                     
                     
  
  
                  <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4}
                      value= {  state10 }  onChangeText= { onState10Change }
                        placeholder=  "Amount Paid (INR)"  
                    />

              
           <TouchableOpacity style={styles.to5} 
                 onPress = {( ) => { submitseg3() }  }  
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

 


























          // proccesing



          case "proccesing"  : 
             
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
            onPress = {( ) => { submitproc() }  }    
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
     
            <TouchableOpacity style={styles.to2} 
                onPress = {  ()  =>  { gpsHandler() } }
            > 
             <Text style={styles.t1} >Capture GPS</Text>   
            </TouchableOpacity>      
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                      placeholder= {state4}
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
            setDropdownValue1( item.label) ; 
            setValue1(item.value);
            setIsFocus1(false);
          }}
         
        />
               
              </View>
                 
              

              <View  style={styles.ip7} >
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5} 
                value= {  state11 }  onChangeText= {  onState11Change }
                        placeholder="Stage of Processing"
                    />  
                
            
              
              <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5} 
                value= {  state5 }  onChangeText= {onState5Change  }
                        placeholder="Quantity (in KGs)"
                    />  
                 

                 </View>


                <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4} 
                value= {  state6}  onChangeText= {onState6Change }
                        placeholder="Workers Involved"
                    />  


               <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4} 
                value= {  state10 }  onChangeText= { onState10Change }
                        placeholder="Amount Paid (INR)"
                    />  

               
            <TouchableOpacity style={styles.to5} 
                onPress = {( ) => { submitproc1 () }  }  
            > 

               <Text> Submit </Text>
            </TouchableOpacity>
         
            </View>  
            
            
            :   
             
             <View>
              </View>

          }
  
 </LinearGradient>
              
            </View>
        
            </View>   
            }
            </View>

        

          )  



































  // transportation



          case "transportation"  :  

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
            onPress = {( ) => { submittrans() }  }    
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
                  onPress = {  ()  =>  { gpsHandler() } } > 
               <Text style={styles.t1} >Capture GPS</Text>   
              </TouchableOpacity>      
              <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                        placeholder= { state4 }
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

                       setDropdownValue1( item.label)
                       setValue1(item.value);
                       setIsFocus1(false);
                     }}
                    
                   />
           
                          
                          
                         </View>
                            

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
                 onPress = {( ) => { submittrans2() }  }  
           > 

              <Text> Submit </Text>
           </TouchableOpacity>
        
           </View>  

          
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

  ip7 : {

    flex : -1 ,
    width : "80%" ,
    height :  "10%" , 
   
    textAlign : "left"  , 
    borderRadius : 28 ,  
    flexDirection : "row"  , 
    justifyContent : "space-between"  ,
    textAlign : "center" , 


  } , 


   

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
      alignItems : "center" , 
      justifyContent : "center" , 

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
      width : "100%"  , 
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
  