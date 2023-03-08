import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View   , TouchableOpacity  , Modal  , FlatList  } from 'react-native';   
import   React  , { useState , useEffect   , useRef  }   from 'react'; 
import { Dropdown } from 'react-native-element-dropdown';
      

  export default function   DropDown(  {  data   , placeholderval  } ) {   
    console.log( data )  ; 
     
    const [value, setValue] = useState(  null);
    const [isFocus, setIsFocus] = useState(false);  

    console.log( value)  ; 

    
    return (
      <View style={styles.container}>
        
        
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder=  { placeholderval }
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
         
        />
      </View>
    );
  };
   




  const styles = StyleSheet.create({
    container: {
          
       flex : -1 ,
       width : "100%" ,
       height : "100%" ,   
       backgroundColor : "#fff"  , 
          borderColor : "grey"  , 
        borderWidth : 1 , 
         borderRadius : 28 ,  
    }, 


    dropdown: {
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
   
