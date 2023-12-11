import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Detail = () => {
  const route = useRoute();
  const { name, image}: any= route.params;
  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({})