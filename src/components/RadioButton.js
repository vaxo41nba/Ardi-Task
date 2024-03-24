import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function RadioButton({text, onPress, selected}) {
  return (
    <Pressable style={styles.radio} onPress={onPress}>
      <View style={styles.big}>
        {selected && <View style={styles.small} />}
      </View>
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  big: {
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    marginRight: 10,
  },
  small: {
    width: 18,
    height: 18,
    borderRadius: 20,
    backgroundColor: 'black',
  },
});
