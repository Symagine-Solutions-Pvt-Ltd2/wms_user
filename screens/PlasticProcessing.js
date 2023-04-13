import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';


  const data = [
    
  ];


  export default function  PlasticProcessing(   { navigation  }) {

 
    const [isFocus3, setIsFocus3] = React.useState(false);    // plastic 
    const [value4, setValue4] = React.useState( "");
    const [value5 , setValue5] = React.useState( "Stages");
    const [ ProcessingStage , setProcessingStage ] =  React.useState( []); 

    
  const  handler5  = () => {   
  
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
      

      if(  value5 === "Stages"  ){
       
        setValue5(  title ) ; 
        setProcessingStage([]) ;
      }else{
           
        let  newTitle =  value5 + ","+ title ; 
        setValue5(  newTitle ) ; 
        setProcessingStage([]); 
      }
   
    }



    return (
      <View style={styles.container}>
         <Dropdown 
        
          style={[styles.dropdown, isFocus3 && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
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
    );
  };

 

  const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14, 
      color: "red"
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    selectedStyle: {
      borderRadius: 12,
    
    },
  });