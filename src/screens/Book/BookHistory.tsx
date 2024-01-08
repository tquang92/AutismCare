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
            flex:1
          },
        ]}
        >Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)</Text>
      <Text style={[STYLES.headline, {color:"#76CFF1", paddingTop:42}]}>10:00 AM Hôm nay</Text>
      <View style={styles.button}>
        <RedButton text="Huỷ"/>
        <BlueButton  text="+ Đặt lịch hẹn tư vấn từ xa"/>
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
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  button: {
    flexDirection:'row'
  }
})
