import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header';
import {BlueButton} from '../../component/Button.Blue'
import { STYLES } from '../../styles/styles';

const BookOverView = () => {
  return (
    <View style={styles.container}>
      <Header text="Hẹn tư vấn từ xa"/>
      <Text style={[STYLES.title, {marginTop: 15, marginBottom:10,alignSelf:'flex-start', marginLeft: 10}]}>Lịch hẹn của bạn</Text>
      <Text style={[STYLES.title, {fontSize:12, fontWeight:"400", marginBottom: 25, color: "#9CA3AF", alignSelf:'flex-start', marginLeft: 10}]}>Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)</Text>
    <View style={styles.content}>
      <Text>Không có lịch hẹn sắp tới</Text>
    </View>
    <BlueButton  text="+ Đặt lịch hẹn tư vấn từ xa"/>
  </View>
  )
}

export default BookOverView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coolGray',
  },
  content:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})
