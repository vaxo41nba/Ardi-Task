import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';

import {AppContext} from '../screens/Main';

export default function CategoryFilterButton({category}) {
  const {handlePress, selectedCategory} = useContext(AppContext);
  const backgroundColor = selectedCategory === category ? 'lime' : 'lightblue';

  return (
    <Pressable
      onPress={() => handlePress(category)}
      style={[styles.container, {backgroundColor}]}>
      <Text style={styles.text}>{category}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'lime',
    borderRadius: 10,
  },
  text: {textTransform: 'capitalize'},
});
