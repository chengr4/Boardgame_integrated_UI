import React, {useCallback} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export function Card({currentVideo}) {

  const supportedURL = 'https://www.youtube.com/watch?v=' + currentVideo.id.videoId;

  const onPress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL`);
    }
  });

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <Image 
        source={{uri:currentVideo.snippet.thumbnails.medium.url}}
        style={{
          width:'100%',
          height:200,
        }}
      />
      <View style={styles.describeCard}>
        {/* here may have a profile */}
        <View style={styles.videoDetail}>
          <Text style={styles.videoTitle}>{currentVideo.snippet.title}</Text>
          <Text style={styles.videoState}>
            {currentVideo.snippet.channelTitle}
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
  },
  describeCard: {
  },
  videoDetail: {
    paddingHorizontal: 15,
  },
  videoTitle: {
    fontSize: 16
  },

});