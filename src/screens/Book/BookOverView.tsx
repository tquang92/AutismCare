<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header';
import {BlueButton} from '../../component/Button.Blue'
import { STYLES } from '../../styles/styles';
=======
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../component/Header";
import { STYLES } from "../../styles/styles";
import { BlueButton } from "../../component/Button.Blue";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
>>>>>>> 085df23dc5fcdcd75884515ea059fdf0513c8726

const BookOverView = () => {
  return (
<<<<<<< HEAD
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
=======
    <SafeAreaView style={styles.container}>
      <Header text="Hẹn tư vấn từ xa" />
      <Text style={[STYLES.title, { marginTop: 15, marginBottom: 10, paddingLeft: 16 }]}>
        Lịch hẹn của bạn
      </Text>
      <Text
        style={[
          STYLES.title,
          {
            fontSize: 12,
            marginBottom: 25,
            color: "#9CA3AF",
            flex:1,
            paddingLeft: 16
          },
        ]}
      >
        Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)
      </Text>
      <Ionicons style={styles.icon} name="calendar-outline" size={96} color="#6B7280" />
      <Text style={[STYLES.word, 
        {
          alignSelf:'center',
          flex:1,
          marginBottom: 25,
          color: "#D1D5DB",
        }
        ]}
        >
          Không có lịch hẹn sắp tới</Text>
      <BlueButton
        text="+ Đặt lịch hẹn tư vấn từ xa"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />
    </SafeAreaView>
  );
};
>>>>>>> 085df23dc5fcdcd75884515ea059fdf0513c8726

export default BookOverView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coolGray',
  },
  content:{
<<<<<<< HEAD
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
=======
    flex: 1
  }, 
  icon: {
    alignSelf:'center',
    marginBottom: 14
    
>>>>>>> 085df23dc5fcdcd75884515ea059fdf0513c8726
  }
})
