import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        'Work',
        'Swim',
        'Study',
        'Sleep',
        'Run'
    ],
      notetext: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((val, key) =>{
          return (
          <View style={styles.list}>
            <Text key={key} style={styles.item}>{val}</Text>
          </View>
          
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  list: {
    borderBottomWidth : 1,
    borderBottomColor: '#ededed'
  }
})
