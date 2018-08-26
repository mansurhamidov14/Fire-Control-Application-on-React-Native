import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Header, Icon } from 'react-native-elements'

const LeftComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{console.log(props.name)}}
    >
      <Icon
        name='menu'
        color="#ffffff"
      />
    </TouchableOpacity>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  
  render() {
    return (
      <View>
        <Header
          leftComponent={<LeftComponent name={this.state.name}/>}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FormLabel>Name</FormLabel>
        <FormInput placeholder="hello" onChangeText={text => this.setState({name:text})}/>
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
