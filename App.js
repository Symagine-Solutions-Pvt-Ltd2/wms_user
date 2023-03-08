
import { StyleSheet  } from 'react-native';
  

import LogIn from './screens/LogIn';
import   Home from './screens/Home' ;
import  WasteCollection from './screens/WasteCollection'  ; 
import  PlasticProcessing from './screens/PlasticProcessing'  ; 
import   About from './screens/About' ; 
import SummaryWasteCol from './screens/SummaryWasteCol' ; 
import SummarySegProc from './screens/SummarySegProc' ; 
import SummarySales from './screens/SummarySales' ; 
import SummaryTable from './screens/SummaryTable'  ;



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

  const Stack =  createNativeStackNavigator()  ;  

  return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName= "LogIn" >

         <Stack.Screen name="LogIn" component={LogIn}  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#78AFEA'   , headerShadowVisible : false  }}   
       />
           
           
         <Stack.Screen name="Home" component={ Home}  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,   headerTintColor:  '#fff'     }}   
       />  
      
      <Stack.Screen name="About" component={ About }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,   headerTintColor:  '#fff'     }}   
       />              

      <Stack.Screen name= "SummaryTable" component={ SummaryTable }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}    
          
       />  


       
      <Stack.Screen name= "Summary" component={SummaryWasteCol }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}    
          
       />   
        
        <Stack.Screen name= "WasteCollection" component={ WasteCollection }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}    
          
       />  

        
      <Stack.Screen name= "PlasticProcessing" component={ PlasticProcessing }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#78AFEA'   , headerShadowVisible : false  }}    
          
       />  

            
       
         </Stack.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    backgroundColor: '#fff'
  },

});