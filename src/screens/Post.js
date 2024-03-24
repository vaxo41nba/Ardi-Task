import React from 'react';
import {StyleSheet, Image, ScrollView, Text} from 'react-native';

export default function Post({route}) {
  const {
    params: {
      post: {image, title, content},
    },
  } = route;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  content: {
    fontSize: 17,
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
});
