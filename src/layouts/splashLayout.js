import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

export default class splashLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: '',
    };
  }

  handleRoom = val => {
    if (this.state.room.length === 0) {
      Alert.alert('Ooops!', 'Please fill all the room!');
    } else {
      this.props.navigation.navigate('Room', {room: this.state.room});
      this.setState({room: ''});
    }
  };
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0b1423', '#293c5b']}
        style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../assets/26904-world.json')}
            style={{height: 175}}
            autoPlay
            loop
          />
        </View>
        <View
          style={{
            width: '100%',
            height: '25%',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: '25%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              marginVertical: 10,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#74a9d2',
            }}>
            <TextInput
              style={{width: '100%', height: 100, color: '#74a9d2'}}
              placeholderTextColor="#74a9d2"
              placeholder="Room id"
              value={this.state.room}
              onChangeText={e => this.setState({room: e})}
            />
          </View>
          <View
            style={{
              width: '70%',
              height: '25%',
              borderRadius: 40,
              marginVertical: 10,
              backgroundColor: '#74a9d2',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#ce9222',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,
              elevation: 17,
            }}>
            <TouchableOpacity
              onPress={this.handleRoom}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#a2851a'}}>
                JOIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '25%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#a2851a'}}>
            Meet people around the world
          </Text>
          <Text style={{fontSize: 16, color: '#8e751a'}}>No account use !</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({});
