
import { StyleSheet  } from 'react-native';
  

import LogIn from './screens/LogIn';
import   Home from './screens/Home' ;
import  WasteCollection from './screens/WasteCollection'  ; 
import  Processing from './screens/Processing'  ; 
import   About from './screens/About' ; 
import Summary from './screens/Summary' ; 
import Sales from './screens/Sales'  ; 
import SummaryView from './screens/SummaryView' ; 
import SummaryTable from './screens/SummaryTable'  ;
import PlasticProcessing from './screens/PlasticProcessing'  ;




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
      backgroundColor: '#78AFEA'   } ,  headerBackVisible : false  ,  headerShadowVisible : false  ,  headerTintColor:  '#78AFEA'     }}   
       />   

       <Stack.Screen name="PlasticProcessing" component={ PlasticProcessing}  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,   headerTintColor:  '#fff'     }}   
       />  
      
      <Stack.Screen name="About" component={ About }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,   headerTintColor:  '#fff'     }}   
       />              

      <Stack.Screen name= "Summary Table" component={ SummaryTable }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'    }}    
          
       />  


       
      <Stack.Screen name= "Summary" component={Summary }  options={{    headerStyle: {
      backgroundColor: '#78AFEA'   } ,      headerTintColor:  '#fff'   , headerShadowVisible : false  }}    
          
       />    


         
      <Stack.Screen name= "Summary View" component={ SummaryView }   options={  ({ route }) => ({   headerTitle : route.params.name   , 
           headerStyle: {
      backgroundColor: '#78AFEA'   }   ,      headerTintColor:  '#fff'
               })}    
          
       />   
        
        
        <Stack.Screen name= "WasteCollection" component={ WasteCollection }  options={  ({ route }) => ({   headerTitle : route.params.name   , 
           headerStyle: {
      backgroundColor: '#fff'   }   
               })}  
          
       />  

        
      <Stack.Screen name= "Processing" component={ Processing }  options={

       ({ route }) => ({   headerTitle : route.params.name   , 
  headerStyle: {
backgroundColor: '#fff'   }   
      })
      }
          
       />  

         
        <Stack.Screen name= "Sales" component={Sales }  options={  

({ route }) => ({   headerTitle : route.params.name   , 
  headerStyle: {
backgroundColor: '#fff'   }   
      })
        }
          
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