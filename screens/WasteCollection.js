import { StyleSheet, Text, View  , TextInput ,  TouchableOpacity    , StatusBar } from 'react-native';

import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';   
import * as Location from "expo-location";  
import { Dropdown } from 'react-native-element-dropdown';


export default function WasteCollection ( {   route , navigation  }) {  

     
  const [value1, setValue1] = React.useState(  null);  //  dropdown value select for plastic   
  const [value2, setValue2] = React.useState(  null);  //  dropdown value select  for waste 

  const [isFocus1, setIsFocus1] = React.useState(false);    // plastic 
  const [isFocus2, setIsFocus2] = React.useState(false);    //  waste  

  const [ code  , onErrorchange ] = React.useState (false );
  const [  designchange   , onDesignchange ] = React.useState (  true  );  //  toogle between  plastic waste and other waste (  subdivision;s state change  of every scrren ) 

  const [ state1  , onState1Change  ] = React.useState ( "" );   // willbe changed to name later   
  
  const [ state2  , onState2Change   ] = React.useState ( "Code of Waste Management Unit" );  
  const [ state3  , onState3Change  ] = React.useState ( "" );     
  const [   state4  , onState4Change   ] = React.useState ( "15.23456,-30.67890" );    // gps location 
  const [ state5  , onState5Change  ] = React.useState (  0  );      // state 5, 6 will be used to multiply . 
  const [   state6  , onState6Change   ] = React.useState (  0  ); 
   const [ state7 , onState7Change  ] = React.useState (  0  );   
  const [   state8  , onState8Change   ] = React.useState ( "" );   // saving the code , to replace state1 with name 

   
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
            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6InJpbW1vQGhtYWlsLmNvbSIsInJvbGVfaWQiOiIyIiwiX2lkIjoiNjNmZWVlYWZmNWQwYTkxNWRhNDFlNTY5IiwiZXhwIjoxNjc4ODcwMDc5fQ.D-5eGqRClgxIUN3v1zCo3JY1mUR1pao0zHl-_DNKa9g'
        
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
            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6InJpbW1vQGhtYWlsLmNvbSIsInJvbGVfaWQiOiIyIiwiX2lkIjoiNjNmZWVlYWZmNWQwYTkxNWRhNDFlNTY5IiwiZXhwIjoxNjc4ODcwMDc5fQ.D-5eGqRClgxIUN3v1zCo3JY1mUR1pao0zHl-_DNKa9g'
        
        }
    , 
    body: JSON.stringify({
       
           
      "wc_code" : state8,
     "wc_name" :  state1  ,
  "capture_gps" :  state4 ,  
  "wmu_code" :  state2  , 
   "date_of_entry" :   state3 , 
   "plastic_type" :  value1  , 
   "quantity" :  state5 , 
   "rate"  :  state6 ,
   "total_cost" :  state7
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);     
   /*  */
    } catch (error) {
      console.error(error);
    }  
   };


  pushdata()  ; 

 } ; 
  

 
 const submit2  = () => {    // for registering the data   (  plastic )
   
    
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
            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6InJpbW1vQGhtYWlsLmNvbSIsInJvbGVfaWQiOiIyIiwiX2lkIjoiNjNmZWVlYWZmNWQwYTkxNWRhNDFlNTY5IiwiZXhwIjoxNjc4ODcwMDc5fQ.D-5eGqRClgxIUN3v1zCo3JY1mUR1pao0zHl-_DNKa9g'
        
        }
    , 
    body: JSON.stringify({
       
           
      "wc_code" : state8,
     "wc_name" :  state1  ,
  "capture_gps" :  state4 ,  
  "wmu_code" :  state2  , 
   "date" :   state3 , 
   "plastic_type" :  value2  , 
   "quantity" :  state5 , 
   "rate"  :  state6 ,
   "total_cost" :  state7
   
   }),
   }
     );  

      const json = await response.json(); 
   
        console.log(json);     
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

  
  
      switch (  screentype ) {
        

         //  informal waste collector 




          case "iwc" :   
             
          return ( 
              
            <View  style={styles.container} >

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Collector"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submit() }  }    
            > 

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
     
            <TouchableOpacity style={styles.to2}> 
             <Text style={styles.t1} >Capture GPS</Text>   
            </TouchableOpacity>      
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                        value= {  state4 }  onChangeText= { onState4Change }
                      placeholder="Captured Location"
                  />
            </View>   

            </View>  

            <View style={styles.v4} >    

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
            setValue1(item.value);
            setIsFocus1(false);
          }}
         
        />

               
               
              </View>
                 


             <View  style={styles.ip4}> 
              
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
            setValue2(item.value);
            setIsFocus2(false);
          }}
         
        />
             </View>
              
            <View  style={styles.ip4}> 
             
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

              
            </View>
        
            </View>   
            }
            </View>

        

          )  



          // clean up  drive  



          case "cud"  : 
             
          return ( 
              
            <View  style={styles.container} >

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Management Unit"   value= {  state1 }  onChangeText= { onState1Change } />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submit() }  }    
            > 

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

            <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                      placeholder= "Number of Participants"  
                                     />

             <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip5}  
                      placeholder= "Location of Clean-Up" 
                                     />
                  </View>

               
              
           <View  style={styles.v5} > 
     
            <TouchableOpacity style={styles.to2}> 
             <Text style={styles.t1} >Capture GPS</Text>   
            </TouchableOpacity>      
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3}  
                        value= {  state4 }  onChangeText= { onState4Change }
                      placeholder="Captured Location"
                  />
            </View>   

            </View>  

            <View style={styles.v4} >    

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
                onPress = {( ) => { submit1() }  }  
            > 

               <Text> Submit </Text>
            </TouchableOpacity>
         
            </View>  
            : 
             
            < View  style={styles.v8}>   
                  

                  <View  style={styles.ip4}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                       placeholder="From (Place)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="To (Place)" 
                       value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                   />
                    
                    </View>
  
              
            <View  style={styles.ip4}> 
             
             <TextInput  autoCapitalize='none'   autoCorrect={ false}     style={styles.ip5}  
                 value= {  state5 }  onChangeText= {( state5 ) => { handler3( state5) }  }
                       placeholder="Quantity (in KGs)"
                   />  
 
                    
                 <TextInput  autoCapitalize='none'   autoCorrect={ false}    style={styles.ip5}
                       placeholder="Number of Vehicles" 
                       value= {  state6 }  onChangeText= {( state6 ) => { handler4( state6) }  }
                   />
                    
                    </View>
                    
                   
                    <TextInput  autoCapitalize='none'   autoCorrect={ false}   style={styles.ip4} 
                      placeholder= "Cost per Unit (INR)"  editable = {  false }
                   />
 
                  

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

              
            </View>
        
            </View>   
            }
            </View>

        

          )  

  // other sources 



          case "os"  :  

          return ( 
              
             
            <View  style={styles.container} >

            <View   style={styles.v1} >   
       
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip1} 
                      placeholder="Code of Waste Collector"
                                     />

            <TouchableOpacity  style={styles.to1}  
            onPress = {( ) => { submit() }  }    
            > 

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
                      placeholder="Code of Waste Management Unit"
                                     />

                                     
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip2} 
                      placeholder="Date of Entry (dd-mm-yyyy)"
                                     />

           <View  style={styles.v5} > 
     
            <TouchableOpacity style={styles.to2}> 
             <Text style={styles.t1} >Capture GPS</Text>   
            </TouchableOpacity>      
            <TextInput  autoCapitalize='none'   autoCorrect={ false}  style={styles.ip3} 
                      placeholder="Captured Location"
                  />
            </View>   

            </View>  

            <View style={styles.v4} >    

            <View   style={styles.v6}>    
            <TouchableOpacity  style={styles.to3} >
            <Text>Plastic Waste</Text>
            </TouchableOpacity>  

            <TouchableOpacity  style= {  [ styles.to3   ,  { backgroundColor : "pink"}  ]  }  >
            <Text> Other Recyclable Waste</Text>
            </TouchableOpacity>
         
            </View> 

       
           
               
            <View style={styles.v8}>    

            
             <View  > 
              
            <TextInput  autoCapitalize='none'   autoCorrect={ false} 
                      placeholder="Quantity (in KGs)"
                  />  

                   
                <TextInput  autoCapitalize='none'   autoCorrect={ false}  
                      placeholder="Rate/KG (INR)"
                  />
                   
                   </View>
                   


                <TextInput  autoCapitalize='none'   autoCorrect={ false}  
                      placeholder="Total Cost (INR)"
                  /> 


            <TouchableOpacity style={styles.to5}  
              

            > 
               <Text> Submit </Text>
            </TouchableOpacity>
         
            </View>

              
            </View>
        
            </View>   
            }
            </View>
         
         )

          default :   

          return ( 
            <View>

             <Text>ndsbdjhsb gdjhagdj </Text>
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
    borderColor : "grey"  , 
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
    borderColor : "grey"  , 
    borderWidth : 1 , 
    borderRadius : 28 ,  
    flexDirection : "row"  , 
    textAlign : "center"  , 




  }  , 


   

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
      backgroundColor : "#fff"    , 
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
      backgroundColor : "pink"

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
      backgroundColor  :  "#78AFEA"  ,  
      flexDirection : "row"  , 
       alignItems : "flex-end"  ,   
       justifyContent  : "center"  , 
    
    }  , 
   
      v8 : {
           
      flex : -1 ,
      width : "100%" ,
      height :  "80%" ,  
      backgroundColor  :  "green"  ,  
      justifyContent : "space-evenly"  , 
      alignItems : "center"  , 

      }  ,  



    t1  :  {

      flex : -1 ,
      width : "100%" ,
      height :  "100%" ,  


    }   ,    


    // dropdown style 


    

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
  