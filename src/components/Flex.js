import React, {Component} from 'react';
import {View} from 'react-native';

export default class MyLayout extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 500,
        height: 500,
      }}>
        <View style={{
          flex: 1,
          width: 100,
          margin: 20,
          flexGrow: 1,
        }} />
        <View style={{
          flex: 1,
          width: 100,
          flexGrow: 6,
        }}>
          <View style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexGrow: 2,
          }}>
            <View style={{
              flex: 1,
              width: 100,
              height: 100,
            }} />
            <View style={{
              flex: 1,
              width: 100,
              height: 100,
              alignItems: 'center',
              marginLeft: 10,
              flexWrap: 'wrap',
            }} />
            <View style={{
              flex: 1,
              width: 100,
              height: 100,
              alignItems: 'center',
              marginLeft: 10,
            }} />
          </View>
          <View style={{
            flex: 1,
            height: 100,
            flexGrow: 4,
          }}>
            <View style={{
              flex: 1,
              width: 100,
              marginHorizontal: 20,
              marginTop: 60,
              marginBottom: 20,
              flexWrap: 'wrap',
              flexGrow: 2,
            }} />
          </View>
        </View>
      </View>
    );
  }
};