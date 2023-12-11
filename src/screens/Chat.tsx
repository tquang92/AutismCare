import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { STYLES } from "../../styles/styles";
import CardItem from "../component/CardItem";
import Header from "../component/Header";

const coolGray = "#374151";

const Chat = () => {
  const nurses = [
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
    {
      image: {
        uri: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=",
      },
      name: "Jaxson Bator",
      specialist: "tâm thần",
      booking: "10:00 AM Hôm nay",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Hẹn tư vấn từ xa"/>
      <ScrollView style={{ paddingHorizontal: 16}}>

      <Text style={[STYLES.title, {marginTop: 15, marginBottom:10}]}>Gặp các bác sĩ của chúng tôi</Text>
      <Text style={[STYLES.title, {fontSize:12, fontWeight:"400", marginBottom: 25, color: "#9CA3AF"}]}>Ngày giờ hiển thị theo giờ Việt Nam (BMT+7:00)</Text>
      <View style={{ width: "100%", flex: 1 }}>
        {nurses.map(
          (item, index)=><CardItem {...item}  key={index}/>
        )

        }
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: coolGray,
    alignItems: "center",
    justifyContent: "center",
  },
});
