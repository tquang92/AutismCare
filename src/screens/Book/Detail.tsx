import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { CardItemProps } from '../../types/data';
import { STYLES } from '../../styles/styles';

const Detail = () => {
  const route = useRoute<any>();
  const {name , image, specialist, booking, degree, edu, exp}: CardItemProps = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={STYLES.headline}>{name}</Text>
        <Text style={STYLES.word}>chuyen khoa tam than</Text>
      </View>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum et earum aliquam? Facere ipsum aspernatur est animi laborum, quod, natus doloremque sapiente architecto enim eligendi ad culpa nihil similique atque.</Text>
      <Text>{specialist}</Text>
      <Text>{edu}</Text>
      <Text>{degree}</Text>
      <Text>{exp}</Text>

    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#374151'
  }
})