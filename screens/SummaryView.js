import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , FlatList   , TextInput  , Dimensions, TouchableOpacity   } from 'react-native'; 
import   React  , { useState , useEffect   ,  }   from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Viewlist( {  route  ,  navigation  }) {    

  const [   data  , setData  ] = useState([]) ;   //   data  for showing all the info     
  const [   loading   , setLoading   ] = useState( true ) ;  
  const [   pageNo   , setPageNo   ] = useState( 1 ) ;  
 
  
  let api_end =  route.params.api_end  ; 
   
  
  
  console.log( "inview" ) ; 
  console.log(  route.params.token  ) ; 




  const  base_url  = `http://circsol.in:5000/user/${api_end}` ; 
    
     

   const getData = async () => {
    try {
      const response = await fetch( base_url , 
      {   method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'  ,
            'token' :   route.params.token  , 
        }
    , 
    body: JSON.stringify({
       
      search_key :"",
      page_no : pageNo,
      limit :"10"
 
  }),
}
     );
      const json = await response.json();
        console.log(json.data);  
        setData( json.data) ;
        alert( json.message) ;  
         
    } catch (error) {
      console.error(error);
    }  
  };

  useEffect(() => {
    getData();  

  }, [ pageNo ]);

   
  

  const handler3 = () => {
    
    console.log( "handler3") ;
    
    if(  pageNo >= 2){

      setPageNo(  pageNo - 1)  ; 
    }
        
   }

   const  handler4 = () => {
      
    console.log( "handler4" ) ;

 

      setPageNo(  pageNo + 1 )  ; 
    
        
   }

  return (
    <View style={styles.container}> 
  
      <StatusBar style="auto" />  

      

        <View style={styles.v5}> 

        <Text style={styles.t1} >{ route.params.prop1}</Text>
        <Text  style={styles.t2}>{ route.params.prop2}</Text>
        <Text  style={styles.t3}>{ route.params.prop3}</Text>
        <Text style={styles.t7}>{ route.params.prop4 } </Text>
        </View>  


      <View style={styles.v2}>     
        
  {/*     < FlatList  data= { data }   
         keyExtractor = {(  key )  => {
            return  key._id  ;   
             }
            }
          
       renderItem={( element )  => { 
           console.log(   element )  ; 

      return (
          
           <View style={styles.v3 }  >  
            <Text> { element.item.w_c_name} </Text>  
            <Text> {  element.item.wc_code}</Text>
            <Text> {  element.item.status }</Text>
           </View>
      ) 
       }}  /> */}    




        { 
       
          data.map((  el ) => (  

           

         <View    key={ el.id  }  style={styles.v3 }  > 
          
          
           <Text style={styles.t4} > {  el.prop1 } </Text> 
           <Text style={styles.t5}> {   el.prop2  }  </Text>   
           <Text style={styles.t6}> {   el.prop3  }  </Text>
           <Text style={styles.t8}> {   el.prop4  }  </Text>
          </View>
             
              ) 
            
          )
       
       } 
       </View>   
        



       <View  style={styles.v4}>
         
         <TouchableOpacity 
          onPress = { () => { handler3()}}
         style={styles.to1}> 
         <Icon  name="arrow-left" size={27}  color = '#fff' /> 

         </TouchableOpacity> 

         <TouchableOpacity style={styles.to2} 
                 onPress = { () => { handler4()}}
           >
         <Icon  name="arrow-right" size={27}  color = '#fff' /> 

         </TouchableOpacity>
      </View>
    </View>
  );
}
  

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    paddingTop : 10 , 
  },  

   
  v1 : {
     
  
    backgroundColor: '#fff',  
    width : windowWidth  , 
    height :  "10%" , 

  }  , 

  v2 : {
    
  
    backgroundColor: 'red',  
    width : "100%"  ,   
    flexGrow : 0 ,
    height   :  "60%",  
    backgroundColor : "#fff"
  }  ,   

  v3 : {  

    flex : -1 , 
    width : "100%"  , 
    height : "10%" ,  
   flexDirection : "row"  , 
   justifyContent : "space-around"  ,  
   backgroundColor  : "#fff" ,
   borderBottomWidth : 2 ,  
   borderColor : "#000000"  , 

  }   , 


  v4 :  {


    backgroundColor: '#fff',  
    width : windowWidth  , 
    height :  "8%", 
    flexDirection : "row"  ,
    justifyContent : "space-between" , 
    alignItems : "flex-end" , 
     padding : 6 ,


  }  , 


   v5 : {
      
    flex : -1 , 
    width : "100%"  , 
    height : "5%" ,  
      backgroundColor : "#fff" , 
      flexDirection : "row" , 
      justifyContent : "space-around"

   }
     , 

  liSt : {  

   
    margin : 0 , 
    flex : 1 ,
    textAlign: "center"  , 
    padding :  0 , 
    margin :  0  ,
    backgroundColor : ''  ,  
    borderColor : "pink"  , 
    borderWidth : 7 , 
 
    }  , 
    

    t1 : {

       height : "100%"  , 
       width : "30%" ,
       backgroundColor : "#78AFEA" , 
       borderRadius : 8 , 
       color: "#fff" , 
       textAlign : "center" , 
       textAlignVertical : "center" , 

    } , 

    t2 : {

      height : "100%"  , 
      width : "30%" ,
      backgroundColor : "#78AFEA" , 
      borderRadius : 8 , 
      color: "#fff" , 
       textAlign : "center" , 
       textAlignVertical : "center" , 

   }  , 

   t3 : {

    height : "100%"  , 
    width : "17%" ,
    backgroundColor : "#78AFEA" , 
    borderRadius : 8 , 
    color: "#fff" , 
       textAlign : "center" , 
       textAlignVertical : "center" , 

 }  ,  

 t4 : {

  height : "100%"  , 
  width : "30%" ,
  backgroundColor : "#fff" , 
  textAlign : "center" , 
  textAlignVertical : "center" , 
    

 }  , 
  

 t5 : {

  height : "100%"  , 
  width : "30%" ,
  backgroundColor : "#fff" , 
  textAlign : "center" , 
  textAlignVertical : "center" , 

} , 

t6 : {


  height : "100%"  , 
  width : "17%" ,
  backgroundColor : "#fff" , 
  textAlign : "center" , 
  textAlignVertical : "center" , 


}  , 

t7 : {

height : "100%"  , 
width : "20%" ,
backgroundColor : "#78AFEA" , 
borderRadius : 8 , 
color: "#fff" , 
textAlign : "center" , 
textAlignVertical : "center" , 



}  ,  

t8 : {

  height : "100%"  , 
  width : "20%" ,
  backgroundColor : "#fff" , 
  textAlign : "center" , 
  textAlignVertical : "center" , 
}  , 



  to1: {

    height : '80%'  , 
    width : "20%"  , 
     backgroundColor : "#78AFEA" , 
     borderRadius : 8 , 
     alignItems : "center" , 
     justifyContent : "center"  , 


  }  , 
 
  to2 : {

    height : '80%'  , 
    width : "20%"  , 
     backgroundColor : "#78AFEA" , 
     borderRadius : 8 , 
     alignItems : "center" , 
     justifyContent : "center"  , 


  }
  , 

  ip1 :{


  width : "80%"  , 
   backgroundColor : "#fff"  , 
   padding : 0 , 
   borderColor : "grey" , 
   borderWidth : 2 , 
   borderRadius :10 , 


  }

});
