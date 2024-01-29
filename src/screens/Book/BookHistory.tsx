import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../component/Header";
import { STYLES } from "../../styles/styles";
import { BlueButton } from "../../component/Button.Blue";
import { useNavigation } from "@react-navigation/native";
import { RedButton } from "../../component/ButtonRed";

const BookHistory = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Hẹn tư vấn từ xa"/>
      <Text style={[STYLES.title, { marginTop: 15, marginBottom: 10 }]}>Lịch hẹn của bạn</Text>
      <Text style={[
          STYLES.title,
          {
            fontSize: 12,
            marginBottom: 25,
            color: "#9CA3AF",
          },
        ]}
        >Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)</Text>
      <View style={styles.container}>
        <Text style={[STYLES.headline, {color:"#76CFF1", paddingTop:42}]}>10:00 AM Hôm nay</Text>
        <View style={[styles.content, {marginTop: 20,}]}>
          <View>
            <Text style={[STYLES.headline, {color:'white'}]}> Bác sĩ</Text>
            <Text style={[STYLES.word, {color:'white'}]}>Jaxson Bator</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={[STYLES.headline, {color:'white'}]}> Bệnh nhân</Text>
            <Text style={[STYLES.word, {color:'white'}]}>Jaylon Philips</Text>
          </View>
        </View>
        <View style={styles.content}>
            <Text style={[STYLES.headline, {color:'white'}]}> Ngày sinh</Text>
            <Text style={[STYLES.word, {color:'white'}]}>15/01/2003</Text>
        </View>
        <View style={styles.content}>
            <Text style={[STYLES.headline, {color:'white'}]}> Giới tính:</Text>
            <Text style={[STYLES.word, {color:'white'}]}>Nữ</Text>
        </View>
      </View>
      <View style={styles.button}>
        <RedButton text="Huỷ"/>
        <BlueButton  text="Gặp ngay" width={50}/>
      </View>
  </SafeAreaView>
  )
}

export default BookHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374151',

  },
  content:{
    borderTopWidth:1, 
    borderColor: '#4B5563',
    flexDirection:'row',
    margin:12,
    paddingVertical:12,
    height:49,
    alignItems:"center"
  },
  button: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  }, 
  
})
