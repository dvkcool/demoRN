/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <ScrollView style={{marginTop: 20}}>
      <ManyThings/>
      </ScrollView>
    );
  }
}
class ManyThings extends Component{
  getThings(){
    var f=[];
    var i=0;
    for(i=0; i<50; i++){
      f.push(<Text key={i} style={{fontSize: 20, color: 'black'}}>Text Value {i}</Text>);
    }
    return f;
  }
  render(){
    return(
      <View>
      {this.getThings()}
      </View>
    );
  }
}
