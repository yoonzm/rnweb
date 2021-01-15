/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Modal,
  Text,
  View,
  ActivityIndicator,
  Switch,
  Button,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'red',
        paddingHorizontal: 15,
      }}>
      <Text
        style={{
          backgroundColor: 'green',
        }}>
        哈哈哈
      </Text>
      <Modal transparent visible>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
          }}>
          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: 'white',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>略略略</Text>
            <ActivityIndicator color="red" />
            <Switch />
            <Button
              title="按钮"
              onPress={() => {
                alert('哈哈哈');
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
