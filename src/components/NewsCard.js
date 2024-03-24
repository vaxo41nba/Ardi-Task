import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NewsCard({post, newsToDisplay, modifyNews}) {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = bool => setModalVisible(bool);

  const handlePress = () => {
    if (modalVisible) toggleModal(false);
    else navigation.navigate('Post', {post});
  };

  const edit = () => {
    toggleModal(false);
    navigation.navigate('AddAndEdit', {
      post,
      newsToDisplay,
      modifyNews,
      action: 'edit',
    });
  };

  const remove = () => {
    toggleModal(false);
    let array = newsToDisplay.filter(n => n.id !== post.id);
    modifyNews(array);
  };

  return (
    <TouchableOpacity
      onLongPress={() => toggleModal(true)}
      onPress={handlePress}
      style={styles.card}>
      <Modal visible={modalVisible} transparent>
        <Pressable style={styles.modal} onPress={() => toggleModal(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.dropdownItem} onPress={edit}>
              Edit
            </Text>
            <Text style={styles.dropdownItem} onPress={remove}>
              Remove
            </Text>
          </View>
        </Pressable>
      </Modal>
      <Image source={post.image} style={styles.image} />
      <Text>{post.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 250,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownItem: {
    fontSize: 22,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
});
