import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header';
import { STYLES } from "../../../styles/styles";
import {BlueButton, TextButton} from '../../component/Button.Blue'

const BookOverView = () => {
  return (
    <View>
      <Header text="Hẹn tư vấn từ xa"/>
      <Text style={[STYLES.title, {marginTop: 15, marginBottom:10}]}>Gặp các bác sĩ của chúng tôi</Text>
      <Text style={[STYLES.title, {fontSize:12, fontWeight:"400", marginBottom: 25, color: "#9CA3AF"}]}>Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)</Text>
      <BlueButton>
        <TextButton text="+ Đặt lịch hẹn tư vấn từ xa"/>
      </BlueButton>
    </View>

  )
}

export default BookOverView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coolGray',
    alignItems: "center",
    justifyContent: "center",
  }
})