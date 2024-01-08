import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { PropsWithChildren } from "react";

type BtnProps = {
  text: string
} & TouchableOpacityProps

export const RedButton = (props: any) => {
  return (
      <TouchableOpacity style={styles.redButton}><Text style={styles.textButton}>{props.text}</Text></TouchableOpacity>
  )
}

;

const styles = StyleSheet.create({
  redButton: {
    backgroundColor: "#EF4444",
    width:167,
    height:'auto',
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