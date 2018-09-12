import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

function Empty(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16
  }
})

export default Empty
