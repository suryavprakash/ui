import React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';


 
export default  class Boxes extends React.Component{
  
   render(){
    return(
      <View style={styles.container}>

          <View style={styles.box1}>
         
               <View style={styles.inner1}>
                <TouchableOpacity>
                   <Text style={{color:'white',fontSize:40}} >72</Text>
                   <Text style={{color:'white' ,marginLeft:70, marginTop:1}}>kg</Text>
                   <Text style={{color:'white',marginTop:10}}>Weight</Text>
                    </TouchableOpacity>
                </View>
                 
           </View>
               <View style={styles.box2}>
               <View style={styles.inner2}>
                <TouchableOpacity>
                <Text style={{color:'white',fontSize:40}} >175</Text>
                   <Text style={{color:'white' ,marginLeft:70, marginTop:1}}>kg</Text>
                   <Text style={{color:'white',marginTop:10}}>Weight</Text>
                 </TouchableOpacity>
                </View>
           </View>
               <View style={styles.box3}>
               <View style={styles.inner3}>
                <TouchableOpacity>
                <Text style={{color:'white',fontSize:40}} >Boxing, Gym, R</Text>
                <Text style={{color:'white',marginTop:10,marginLeft:1}}>Experience</Text>
                 </TouchableOpacity>
                </View>
           </View>
             <Text style={{}}>          </Text>
              
              <Text style={{fontSize:20,marginTop:30}}>🔒 Advanced</Text>
          

              <Text> </Text>
            
      
               <View style={styles.box4}>
               
               <View style={styles.inner4}>
                  
                   </View>
          
           </View>
           
              <View style={styles.box5}>
               <View style={styles.inner5}>
                   
                   </View>
          
           </View>
       
      
      </View>
        
    );
  }
}
const styles=StyleSheet.create({
    container: {
        
         width: '100%',
         height: '100%',
         padding: 5,
        flexDirection:'row',
        flexWrap:'wrap'
   
    },
   
    box1:{
    
      width:'50%',
      height:'20%',
      
      
         padding: 5

    },
  
    box2: {
        width: '50%',
        height: '20%',
           
        padding: 5
  
    },

     box3: {
        width: '100%',
        height: '20%',
        padding: 5
  
    },
    
     box4: {
        width: '50%',
        height: '20%',
        padding: 5,
        marginLeft:-160,
        marginTop:70
        
       
       
      
    
  
    },
         box5: {
        width: '50%',
        height: '20%',
        padding: 5,
         marginTop:70
        
       
      
        
 
  
    },

      inner1: {
        flex: 1,
        backgroundColor: 'darkorange',
         borderRadius: '20px 50px 30px 5px',
           marginTop:3,
        alignItems: 'center',
        justifyContent: 'center'
    },
       inner2: {
        flex: 1,
           borderRadius: '20px 50px 30px 5px',
        backgroundColor: 'darkblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
       inner3: {  
        flex: 1,
        backgroundColor: 'skyblue',
           borderRadius: '20px 50px 30px 5px',
        alignItems: 'center',
        justifyContent: 'center'
    },
       inner4: {
        flex: 1,
           borderRadius: '20px 50px 30px 5px',
        backgroundColor: 'darkorange',
        alignItems: 'center',
        justifyContent: 'center'
    },
           inner5: {
        flex: 1,
        backgroundColor: 'skyblue',
           borderRadius: '20px 50px 30px 5px',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

 






