import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [
        {text:'Work'},
        {text:'Swim'},
        {text:'Study'},
        {text:'Sleep'},
        {text:'Run'}
    ],
      notetext: ''
    }
  }
  addTodo(){
    if(this.state.notetext){
      this.state.data.push({
        text : this.state.notetext
      });
    }
    this.setState({data : this.state.data})
    this.setState({notetext : ''})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.create}>
          <TextInput
          onChangeText={(notetext)=> {this.setState({notetext : notetext})}}
          placeholder="New To do"
          style={styles.textInput}
          />
          <TouchableOpacity style={styles.btnadd}>
            <Button title="Add" onPress={this.addTodo.bind(this)}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.list}>
          {this.state.data.map((val, key) =>{
            return (
              <Text key={key} style={styles.item}>{val.text}</Text>
            )
          })}
          </View>
        </ScrollView>
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
    borderBottomWidth : 1,
    borderBottomColor: '#ededed'
  },
  list: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textInput:{
    flex: 1,
    alignItems: 'stretch',
  },
  btnadd: {
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 18
  },
  create:{
    paddingLeft: 10,
    flexDirection : 'row',
    justifyContent: 'space-between'
  }
})
