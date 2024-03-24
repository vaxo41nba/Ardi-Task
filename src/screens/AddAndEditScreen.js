import {Platform, StyleSheet, TextInput, View} from 'react-native';
import React, {useReducer} from 'react';

import AppButton from '../components/AppButton';
import RadioButton from '../components/RadioButton';

import {categories, images} from '../constants/news';

export default function AddAndEditScreen({navigation, route}) {
  const isAndroid = Platform.OS === 'android';

  const title = route?.params?.post?.title;
  const content = route?.params?.post?.content;
  const id = route?.params?.post?.id;
  const newsToDisplay = route?.params?.newsToDisplay;
  const modifyNews = route?.params?.modifyNews;
  const action = route?.params?.action;

  const reducer = (state, action) => {
    const {title, category, content, type} = action;
    switch (type) {
      case 'editTitle':
        return {...state, title};
      case 'editCategory':
        return {...state, category};
      case 'editContent':
        return {...state, content};
      default:
        return state;
    }
  };

  const [postState, dispatch] = useReducer(reducer, {title, content});

  const editTitle = title => dispatch({type: 'editTitle', title});
  const editContent = content => dispatch({type: 'editContent', content});
  const chooseCategory = category => dispatch({type: 'editCategory', category});

  const save = () => {
    let array = [];

    if (action === 'edit') {
      array = newsToDisplay;
      const i = array.findIndex(e => e.id === id);
      array[i].title = postState.title;
      array[i].content = postState.content;
    }

    if (action === 'add') {
      array = [
        ...newsToDisplay,
        {
          id: Math.random(),
          title: postState.title,
          category: postState.category,
          content: postState.content,
          image: images[postState.category],
        },
      ];
    }

    modifyNews(array);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Title"
        value={postState?.title ?? ''}
        onChangeText={editTitle}
        style={styles.input}
      />

      {action === 'add' && (
        <View style={styles.radioButtons}>
          {categories.map(c => (
            <RadioButton
              key={c}
              text={c}
              selected={c === postState.category}
              onPress={() => chooseCategory(c)}
            />
          ))}
        </View>
      )}

      <TextInput
        placeholder="Add Content"
        value={postState?.content ?? ''}
        onChangeText={editContent}
        style={[styles.input, isAndroid && {flex: 1, textAlignVertical: 'top'}]}
        multiline
      />

      <AppButton onPress={save} title="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  radioButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
});
