import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component{
  
  render(){
    return(
      <View style={styles.Header}>
         <Text style={{fontSize:30,marginRight:299}}>{'<'}</Text>
      <Text style={{fontSize:40,marginLeft:-170,marginTop:90}}>My Body</Text>
            <Text style={{fontsize:20}}>{'  '}</Text>
    
      <Text style={{marginLeft:-245,fontSize:20,marginTop:30}}>Basics</Text>
       
     </View>
      
    );
  }
}
const styles = StyleSheet.create({
  Header: {

width:'100%',
height:'40%',
backgroundColor:'white',
alignItems:'center',
justifyContent:'center',







  }




});
