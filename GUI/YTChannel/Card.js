import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import data from './test_data.json';

export function Card({currentVideo}) {
  return (
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
            {currentVideo.snippet.channelTitle + " " + currentVideo.statistics.viewCount}
          </Text>
        </View>
      </View>
    </View>
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