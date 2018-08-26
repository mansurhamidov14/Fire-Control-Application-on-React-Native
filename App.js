import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Header, Icon } from 'react-native-elements'

const LeftComponent = () => {
  return (
    <TouchableOpacity
      onPress={()=>{console.log(this.props.name)}}
    >
      <Icon
        name='menu'
        color="#ffffff"
      />
    </TouchableOpacity>
  );
}

export default class App extends React.Component {


  render() {
    return (
      <View>
        <Header
          leftComponent={<LeftComponent name={this.name}/>}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FormLabel>Name</FormLabel>
        <FormInput placeholder="hello" ref={node => this.name = node}/>
        <FormValidationMessage></FormValidationMessage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
