import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export default function AppButton(props) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 50,
    backgroundColor: 'lime',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
