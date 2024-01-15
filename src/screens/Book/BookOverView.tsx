import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../component/Header";
import { STYLES } from "../../styles/styles";
import { BlueButton } from "../../component/Button.Blue";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const BookOverView = () => {
  const navigation = useNavigation<any>();
  return (
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
            flex: 1,
            paddingLeft: 16
          },
        ]}
      >
        Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)
      </Text>
      <Ionicons style={styles.icon} name="calendar-outline" size={96} color="#6B7280" />
      <Text style={[STYLES.word,
      {
        alignSelf: 'center',
        flex: 1,
        marginBottom: 25,
        color: "#D1D5DB",
      }
      ]}
      >
        Không có lịch hẹn sắp tới</Text>
      <View style={{ width: "100%", height: 41, }}>

        <BlueButton
          text="+ Đặt lịch hẹn tư vấn từ xa"
          onPress={() => {
            navigation.navigate("Chat");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374151',
  },
  content: {
    flex: 1
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 14

  }
})