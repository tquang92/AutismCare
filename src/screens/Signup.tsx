import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const lightBlue = "#76CFF1";
const white = "#FFFFFF";
const darkGray = "#374151";
const lightGray = "#9CA3AF";
const gray = "#6B7280";

const Signup = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.title,
            { fontSize: 36, fontWeight: "500", color: white },
          ]}
        >
          AutismCare
        </Text>
      </View>

      <View style={styles.input}>
        <View style={styles.logo}>
          <Image source={require("../../assets/logo.png")} />
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 32 }}>
            <Text style={[styles.label, { color: lightBlue }]}>
              Số điện thoại
            </Text>
            <TextInput
              style={[styles.tinput, { marginTop: 5, marginBottom: 15 }]}
              placeholder="Số điện thoại"
              placeholderTextColor={lightGray}
            />
            <Text style={[styles.label, { color: lightBlue }]}>Mật khẩu</Text>
            <TextInput
              secureTextEntry={true}
              style={[styles.tinput, { marginTop: 5 }]}
              placeholder="Mật khẩu"
              placeholderTextColor={lightGray}
            />
            <Text style={[styles.label, { color: lightBlue }]}>
              Nhập lại mật khẩu
            </Text>
            <TextInput
              secureTextEntry={true}
              style={[styles.tinput, { marginTop: 5 }]}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor={lightGray}
            />
          </View>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.label}>Đăng ký</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 50 }}>
          <Text style={[styles.label, { color: lightBlue }]}>
            Bạn đã có tài khoản?
          </Text>
          <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={()=>{navigation.navigate("Login")}}>
            <Text
              style={[
                styles.label,
                { color: white, textDecorationLine: "underline" },
              ]}
            >
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 190,
    height: 70,
    marginVertical: 80,
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -130 / 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    flex: 1,
    backgroundColor: darkGray,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: "center",
  },
  tinput: {
    width: 311,
    height: 40,
    borderRadius: 100,
    backgroundColor: gray,
    color: white,
  },
  login: {
    width: 311,
    height: 41,
    borderRadius: 100,
    backgroundColor: lightBlue,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 32,
  },
});
