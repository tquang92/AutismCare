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
import { nurses } from "../data/items";

const coolGray = "#374151";

const Chat = () => {
  

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
