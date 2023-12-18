import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const BlueButton = (props: any) => {
  return (
      <TouchableOpacity style={styles.blueButton}><Text style={styles.textButton}>{props.button}</Text></TouchableOpacity>
  )
}
export const TextButton = (props: any) => {
  return (
    <View>
      <Text style={styles.textButton}>{props.text}</Text>
    </View>
  )
}

// export default {BlueButton, TextButton};

const styles = StyleSheet.create({
  blueButton: {
    color: "#76CFF1",
    justifyContent: 'center',
    alignItems: 'center',
    height: 21,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flex: 1,
  },
  textButton: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '500'
  }

})