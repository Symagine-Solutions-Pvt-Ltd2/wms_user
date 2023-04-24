import { StyleSheet, Text, View  , TextInput , Dimensions  ,  TouchableOpacity    , StatusBar } from 'react-native';

import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";  
import { Dropdown } from 'react-native-element-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function Sales ( {   route , navigation  }) {  
 
/*        
  console.log( "insales")  ; 
  console.log(  route.params.token)  ; */ 
  const token = route.params.token ; 
         
         
     const [location, setLocation] = React.useState(null);   //location
     const [errorMsg, setErrorMsg] = React.useState(null);  
  
    const [value1, setValue1] = React.useState(  null);  //  dropdown value select for plastic 
    const [ dropdownValue1  , setDropdownValue1 ] = React.useState( null);
    
    const [value2, setValue2] = React.useState( null);  //  dropdown value select  for waste
    const [ dropdownValue2  , setDropdownValue2 ] = React.useState( null);
    
  
    const [isFocus1, setIsFocus1] = React.useState(false);    // plastic 
    const [isFocus2, setIsFocus2] = React.useState(false);    //  waste  
  
    const [ code  , onErrorchange ] = React.useState (false );
    const [  designchange   , onDesignchange ] = React.useState (  true  );  //  toogle between  plastic waste and other waste (  subdivision;s state change  of every scrren ) 
  
    const [ state1  , onState1Change  ] = React.useState ( "" );   // willbe changed to name later   
    
    const [ state2  , onState2Change   ] = React.useState ( "" );  
    const [ state3  , onState3Change  ] = React.useState ( "" );       // date 
    const [   state4  , onState4Change   ] = React.useState (  false );    // gps location 
    const [ state5  , onState5Change  ] = React.useState (  0  );      // state 5, 6 will be used to multiply . 
    const [   state6  , onState6Change   ] = React.useState (  0  ); 
     const [ state7 , onState7Change  ] = React.useState (  0  );   
    const [   state8  , onState8Change   ] = React.useState ( "" );   // saving the code , to replace state1 with name 
    const [   state11  , onState11Change   ] = React.useState ( "" ); 
      


     
  // stages of  plastic  

  
  const [isFocus3, setIsFocus3] = React.useState(false);    // plastic 
  const [value4, setValue4] = React.useState( "");
  const [value5 , setValue5] = React.useState( "Processing stage");
  const [ ProcessingStage , setProcessingStage ] =  React.useState( []); 


  
  const  handler5  = () => {     //  stages of processing  
  
    const pushdata =  async () => {  
  
      try {
        const response = await fetch( 'http://clean-sundarbans.com:5000/user/lists'  , 
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
      

      if(  value5 === "Processing stage"  ){
       
        setValue5(  title ) ; 
        setProcessingStage([]) ;
      }else{
           
        let  newTitle =  value5 + ","+ title ; 
        setValue5(  newTitle ) ; 
        setProcessingStage([]); 
      }
   
    }


 


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







        
    const submit = () => {     // plastic waste 
  
    const pushdata =  async () => {  
  
      try {
        const response = await fetch( 'http://clean-sundarbans.com:5000/user/plasticwaste'  , 
        {    
          method: 'POST', 
     
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'  ,  
              'token' :  token , 
          
          }
      , 
      body: JSON.stringify({
         
        "bu_code" :  state1   
     
     }),
     }
       );  

       
        const json = await response.json(); 
     
          console.log(json);     
     
         if ( json.message  === "Retrieve successfully") {
                  
           
           
          console.log(  json.data )  ;   
        
          onState2Change(   json.data.wmu_code) ;
          onState8Change(  state1 )  ; 
          onState1Change(  json.data.buyer_organisation  )  ;
         
           
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
  
   const submit1 = () => {     // other waste 
  
    const pushdata =  async () => {  
  
      try {
        const response = await fetch( 'http://clean-sundarbans.com:5000/user/otherwaste'  , 
        {    
          method: 'POST', 
     
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'  ,  
              'token' :   token , 
          
          }
      , 
      body: JSON.stringify({
         
        "bu_code" :  state1   
     
     }),
     }
       );  

       
        const json = await response.json(); 
     
          console.log(json);     
     
         if ( json.message  === "Retrieve successfully") {
                  
           
           
          console.log(  json.data )  ;   
        
          onState2Change(   json.data.wmu_code) ;
          onState8Change(  state1 )  ; 
          onState1Change(  json.data.buyer_organisation  )  ;
         
           
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




    
  
   
   const submit2  = () => {    //plastic waste 2
     
      
    console.log( state8)  ; 
    console.log( state1)  ;

    console.log( state3)  ; 
    console.log( state4)  ; 
    console.log( state2)  ; 
    console.log( state5)  ; 
    console.log( state6)  ; 
    console.log( state7)  ;  
    console.log( state11)  ;   
    console.log( value1 ) ; 
  
  
    const pushdata =  async () => {  
  
      try {
        const response = await fetch( 'http://clean-sundarbans.com:5000/user/salesplasticwasteentry'  , 
        {    
          method: 'POST', 
     
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'  ,  
              'token' :  token , 
          
          }
      , 
      body: JSON.stringify({
         
      
"bu_code":  state8 ,
"buyer_organisation":  state1 ,
"wmu_code": state2  ,
"capture_gps":  location   , 
"date_of_entry":  state3  ,
"type_of_plastic":  dropdownValue1 , 
"stage_of_processing":  value5 ,
"quantity":  `${state5}` , 
"rate_per_kg": `${state6}`  ,
"total_cost":   `${state7}`  , 
     
     }),
     }
       );  
  
        const json = await response.json(); 
     
          console.log(json);   

          if(   json.message ===  "submitted Successfully." ) {
          
            alert(  json.message );
          
      
            onState5Change( 0 ) ; 
            onState6Change( 0 ) ; 
            onState7Change( 0 ) ; 
            setDropdownValue1("")  ; 
            setValue1("") ;
            setValue5("Processing stage") ; 
            setValue4("")  ; 
          

  
  
          }else{
  
            alert(  json.message );
          }
  
     /*  */
      } catch (error) {
        console.error(error);
      }  
     };
  
  
    pushdata()  ; 
  
   } ; 
  
    
   
   
   const submit3  = () => {    //other waste 2
     
      
    console.log( state8)  ; 
    console.log( state1)  ;
   

    console.log( state3)  ; 
    console.log( state4)  ; 
    console.log( state2)  ; 
    console.log( state5)  ; 
    console.log( state6)  ; 
    console.log( state7)  ;  
    console.log( value1 ) ; 
  
  
    const pushdata =  async () => {  
  
      try {
        const response = await fetch( 'http://clean-sundarbans.com:5000/user/salesotherwasteentry'  , 
        {    
          method: 'POST', 
     
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'  ,  
              'token' :  token , 
          
          }
      , 
      body: JSON.stringify({
         
        "bu_code": state8,
        "buyer_organisation": state1,
        "wmu_code":  state2,
        "capture_gps":   location ,
        "date_of_entry": state3,
        "type_of_waste": dropdownValue1,
        "quantity": `${state5}`,
        "rate_per_kg": `${state6}` ,
        "total_cost":`${state7}`
     
     }),
     }
       );  
  
        const json = await response.json(); 
     
          console.log(json); 
          
          if(   json.message ===  "submitted Successfully." ) {
          
            alert(  json.message );
          
        
       
      
            onState5Change(0) ; 
            onState6Change( 0) ; 
            onState7Change( 0 ) ; 
            setValue1("") ;
            setDropdownValue1("")  ; 
  
  
  
          }else{
  
            alert(  json.message );
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
         setValue1("") ;
  
     }  ; 
  
     const handler2   = ()  => {
                 
      onDesignchange(  false ) ; 
      
      onState5Change( 0 )  ; 
      onState6Change( 0)  ; 
      onState7Change ( 0 )  ; 
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


      console.log( state4) ; 
      if(  state4 ===  false){
        onState4Change( !state4 ) ;
      }
      alert("Successfully captured GPS!") ; 
    }



  
    
    
        switch (  screentype ) {
          
  
           //plastic_waste
  

  
            case "plastic_waste" :   
               
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
                 placeholder="Code of Buyer"   value= {  state1 }  onChangeText= { onState1Change } />
  
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
                     value= {  state2 }  onChangeText= { onState2Change }
                            placeholder="Code of Waste Management Unit"
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
                   
  
  
               <View  style={styles.ip7}> 
              {/*   
                <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5} 
                  value= {  state11 }  onChangeText= { onState11Change }
                  placeholderTextColor='#ffffff8C'      placeholder="Stage of Processing"
                      />   */}
               
                       
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
                     value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }  keyboardType="number-pad"
                     placeholderTextColor='#ffffff8C'    placeholder="Quantity (in KGs)"  
                      />
                       
                       </View>
                       
                       <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip4} 
                     value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }   keyboardType="number-pad"
                     placeholderTextColor='#ffffff8C'      placeholder="Rate/KG (INR)"
                      />
      
                    <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                       placeholderTextColor='#ffffff8C'       placeholder= { `Total Amount (INR) = ${ state7}` }    keyboardType="number-pad"
                      />
    
  
  
                 
              <TouchableOpacity style={styles.to5} 
                  onPress = {( ) => { submit2() }  }  
              > 
  
                 <Text> Submit </Text>
              </TouchableOpacity>
           
              </View>  
            
  
            
              </LinearGradient >  
                
              </View>
          
              </View>   
              }
              </View>
  
          
  
            )  
  
  
  






























            //other_waste 
  
  
  
            case "other_waste"  : 
               
  
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
                       placeholder="Code of Buyer"   value= {  state1 }  onChangeText= { onState1Change } />
  
              <TouchableOpacity  style={styles.to1}  
              onPress = {( ) => { submit1() }  }    
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
                        value= {  state2 }  onChangeText= { onState2Change }
                            placeholder="Code of Waste Management Unit"
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

              < View  style={styles.v8}>   
                   
        
               <View  style={styles.to5} >  
                            
                 <Dropdown
            style={[styles.dropdown, isFocus1&& { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle }
            data={dropdowndata2}
            labelField="label"
            valueField="value"
            placeholder=  "Types of Waste"
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
                   
  
  
             
                
                <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip4} 
                  value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5 ) } }  keyboardType="number-pad"
                  placeholderTextColor='#ffffff8C'        placeholder="Quantity (in KGs)"
                      />  
    
                       
                    <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip4} 
                     value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }  keyboardType="number-pad"
                     placeholderTextColor='#ffffff8C'      placeholder="Rate/KG (INR)"
                      />
                       
                    
                       
    
    

                       <TextInput   autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4}   keyboardType="number-pad"
                      placeholderTextColor='#ffffff8C'     placeholder= { `Total Cost( INR )  = ${ state7}` }    editable= { false }
                      />
    
    
  
  
                 
              <TouchableOpacity style={styles.to5} 
                  onPress = {( ) => { submit3() }  }  
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
    

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



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
      flexDirection : "row" , 
      overflow: "hidden"
  
  
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
      textAlign : "center"  , 
      borderColor : "#fff"  , 
      borderWidth : 1 , 
      borderRadius : 28 ,  
      flexDirection : "row"  , 
      justifyContent : "space-between"  ,
  
  
  
    }  , 
  
  
    ip5 : {
  
      flex : -1 ,
      width : "48%" ,
      height :  "100%" , 
      color : "#fff"  , 
      textAlign : "center"  , 
      borderColor : "#fff"  , 
      borderWidth : 1 , 
      borderRadius : 28 ,  
      flexDirection : "row"  , 
      overflow :"hidden"  , 
  
  
  
  
  
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
        justifyContent : "center"  ,
        justifyContent : "center"  ,
  
      }   ,    
  
       to5 : {
           
        flex : -1 ,   
        width : "50%"  , 
        height : "13%"  ,  
        backgroundColor : "#fff"  , 
        borderRadius : 10 ,   
        alignItems : "center"  , 
        justifyContent: 'center'
       }  , 
  
       to6 : {
  
        flex : -1 ,   
        width : "40%"  , 
        height : "30%"  ,   
        backgroundColor : "#3B4D61"  , 
        borderRadius : 5 ,     
        alignItems  :  "center"  , 
        justifyContent : "center"  ,
  
  
       }  , 

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
        backgroundColor  :  "#78AFEA"  ,  
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

      placeholderStyle1: {
        fontSize: 14,
      color : "#ffffff8C"  , 
        textAlign : "center"
     
      },
  
      selectedTextStyle: { 
         
        textAlign : "center"   , 
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
    