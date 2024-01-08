import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props: any) => {
  return (
    <View>
      <Text style={styles.heading}>{props.text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({heading: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
    padding: 11,
    alignItems:'flex-start',
    flexShrink:0,
    alignSelf:'center',
    

}})