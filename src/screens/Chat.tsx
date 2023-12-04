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
      <Text style={STYLES.title}>Gặp các bác sĩ của chúng tôi</Text>
      <View style={{ width: "100%", paddingHorizontal: 16, flex: 1 }}>
        <FlatList
          data={nurses}
          renderItem={({ item }) => <CardItem {...item} />}
        />
      </View>
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
