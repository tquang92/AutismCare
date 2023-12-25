import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { PropsWithChildren } from "react";

type BtnProps = {
  text: string
} & TouchableOpacityProps

export const BlueButton = (props: any) => {
  return (
      <TouchableOpacity style={styles.blueButton}><Text style={styles.textButton}>{props.text}</Text></TouchableOpacity>
  )
}

// export default {BlueButton, TextButton};

const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: "#76CFF1",
    width:343,
    height:'auto',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: "center",
    marginBottom:10
  },
  textButton: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '500'
  }

})