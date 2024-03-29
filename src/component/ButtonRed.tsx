import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { PropsWithChildren } from "react";

type BtnProps = {
  text: string
} & TouchableOpacityProps

export const RedButton = (props: BtnProps) => {
  return (
      <TouchableOpacity style={styles.redButton} {...props}><Text style={styles.textButton}>{props.text}</Text></TouchableOpacity>
  )
}

;

const styles = StyleSheet.create({
  redButton: {
    backgroundColor: "#EF4444",
    width:180,
    height:41,
    borderRadius: 100,
    paddingLeft:16,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: "center",
    marginBottom:10
  },
  textButton: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500'
  }

})