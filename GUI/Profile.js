import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export const Profile = () => {
  const [title, onChangeTitle] = React.useState('Title');
  const [content, onChangeContent] = React.useState('Content');
  const onPress = () => {
    fetch('http://localhost:5000/post/new-app', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
              'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content
      })
    }).then((response) => response.text())
      .then((text) => {
        console.log(text);
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput 
        style={{
          width:"70%",
          height: 40,
          borderColor: '#ffffff',
          backgroundColor:"#e6e6e6",
          marginBottom: 10
        }}
        onChangeText={text => onChangeTitle(text)}
        value={title}
       />
       <TextInput 
        multiline={true}
        style={{
          width:"70%",
          height: 80,
          backgroundColor:"#e6e6e6",
          marginBottom: 10
        }}
        onChangeText={text => onChangeContent(text)}
        
        value={content}
        
       />
      <TouchableOpacity
        style={{backgroundColor: 'pink',
                borderRadius: 30,
                padding: 30,}}
        onPress={onPress}
        >
        <Text>Post</Text>
        </TouchableOpacity>
    </View>
  );
}
