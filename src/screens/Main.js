import React, {createContext, useReducer} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Categories from '../components/Categories';
import NewsCard from '../components/NewsCard';
import AppButton from '../components/AppButton';

import news, {categories} from '../../src/constants/news';

export const AppContext = createContext();

export default function Main({navigation}) {
  const handlePress = c => {
    if (c === selectedCategory) dispatch({type: 'reset'});
    else dispatch({type: 'selectCategory', selectedCategory: c});
  };

  const modifyNews = newsToDisplay =>
    dispatch({type: 'modifyNews', newsToDisplay});

  const add = () =>
    navigation.navigate('AddAndEdit', {
      newsToDisplay,
      modifyNews,
      action: 'add',
    });

  const reducer = (state, action) => {
    const {newsToDisplay, selectedCategory, type} = action;
    switch (type) {
      case 'selectCategory':
        return {...state, selectedCategory};
      case 'modifyNews':
        return {...state, newsToDisplay};
      case 'reset':
        return {...state, selectedCategory: null};
      default:
        return state;
    }
  };

  const [categoryState, dispatch] = useReducer(reducer, {
    selectedCategory: null,
    newsToDisplay: news,
    dropdownVisible: false,
  });
  const {selectedCategory, newsToDisplay} = categoryState;

  const state = {
    newsToDisplay,
    categories,
    handlePress,
    selectedCategory,
  };

  const newsArray = selectedCategory
    ? newsToDisplay.filter(n => n.category === selectedCategory)
    : newsToDisplay;

  return (
    <AppContext.Provider value={state}>
      <View style={styles.container}>
        <Categories />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.news}>
          {newsArray.map(n => (
            <NewsCard
              key={n.id}
              post={n}
              newsToDisplay={newsToDisplay}
              modifyNews={modifyNews}
            />
          ))}
        </ScrollView>

        <AppButton onPress={add} title="Add" />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  news: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10,
  },
});
