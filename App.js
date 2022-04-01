import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './src/Header';
import Boxes from './src/Boxes';


 export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Header/>
        <Boxes/>
        
      </View>
      
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  }
   



});



