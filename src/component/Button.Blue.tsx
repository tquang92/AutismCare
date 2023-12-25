import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export const BlueButton = (props: any) => {
  return (
      <TouchableOpacity style={styles.blueButton}><Text style={styles.textButton}>{props.text}</Text></TouchableOpacity>
  )
}

// export default {BlueButton, TextButton};

const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: "#76CFF1",
    justifyContent: 'center',
    alignItems: 'center',
    width:331,
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