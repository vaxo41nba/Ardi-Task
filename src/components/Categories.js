import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';

import CategoryFilterButton from './CategoryFilterButton';
import {AppContext} from '../screens/Main';

export default function Categories() {
  const {categories} = useContext(AppContext);

  return (
    <View style={styles.container}>
      {categories.map(c => (
        <CategoryFilterButton key={c} category={c} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
});
