import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity , Pressable   , StatusBar, Platform, Button } from 'react-native';

import React from "react";  
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";
import DateTimePicker from '@react-native-community/datetimepicker';



export default function PlasticProcessing ( {   route , navigation  }) {
     
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
     

    // date time picker 

    
    let  date1 = new Date() ;
    console.log( date1) ; 
    date1.setDate(date1.getDate() - 7);

    let finalDate =  date1.getFullYear()+ ','+ (date1.getMonth()+1)  + ',' + date1.getDate();
    
   
   
    
    const [   mindate  ,  setMinDate  ] = React.useState(  date1 ) ;
  

  
    console.log( mindate.getFullYear() ) ; 


    
    const [ date, setDate ] = React.useState(  new Date()) ;
    const [  mode , setMode ] = React.useState( "date") ;
    const [ show , setShow  ] = React.useState(  false) ;
    const [  text1 , setText1  ] = React.useState( "Empty") ;
   


  

    const onChange = (  event , selectedDate)  => {
         
      const currentDate = selectedDate ||  date ; 
      
      setShow(  Platform.OS === "ios") ; 
      setDate( currentDate) ; 

      let tempDate = new Date( currentDate) ;
      let fDate = tempDate.getDate() + "-"  + (tempDate.getMonth()+1 )  + "-" +  tempDate.getFullYear() ; 
      setText1( fDate) ; 
      console.log( fDate) ; 
 

    }  


    const showMode = (  currentMode  ) => {

             setShow( true ) ;
             setMode(  currentMode) ; 
      }

  


    React.useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync(); 
        
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
   

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
    return ( 
      <View style={styles.container}>
      <View style={styles.v1}>
        <Text >{text}</Text>
      </View>

<View style={styles.v1}>
  
  <Text>
    { text1}
  </Text> 
  <View style={  {backgroundColor : "grey"} }  >
     <Button title="datepicker"  onPress={() => { showMode( 'date')}} />
  </View>

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
</View>

<View>

  <Text>sjhqjsqhjsqjhs</Text>

  
  <Text>sjhqjsqhjsqjhs</Text>
  
  <Text>sjhqjsqhjsqjhs</Text>

  
  <Text>sjhqjsqhjsqjhs</Text>
  
  <Text>sjhqjsqhjsqjhs</Text>

  
  <Text>sjhqjsqhjsqjhs</Text>
  
  <Text>sjhqjsqhjsqjhs</Text>
  
  <Text>sjhqjsqhjsqjhs</Text>
  <Text>sjhqjsqhjsqjhs</Text>
  
  <Text>sjhqjsqhjsqjhs</Text>
  
  <Text>sjhqjsqhjsqjhs</Text>

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


       backgroundColor : "red"

    }
  });
  