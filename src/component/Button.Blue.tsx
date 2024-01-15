import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { PropsWithChildren } from "react";

type BtnProps = {
  text: string,
  width?: number,
} & TouchableOpacityProps

export const BlueButton = (props: BtnProps) => {
  return (
      <TouchableOpacity style={[styles.blueButton,{width: props.width?`${props.width}%`:"100%"}] } {...props}><Text style={styles.textButton}>{props.text}</Text></TouchableOpacity>
  )
}

// export default {BlueButton, TextButton};

const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: "#76CFF1",
    flex:1,
    height:41,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: "center",
    marginBottom:10,
    marginLeft:12
  },
  textButton: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '500'
  }

})