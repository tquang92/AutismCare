import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { STYLES } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CardItemProps } from "../types/data";



const CardItem = (props: CardItemProps) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail",{
          ...props
        });
      }}
      style={[
        STYLES.cardItem,
        { flexDirection: "row", padding: 16, marginBottom: 16 },
      ]}
      {...props}
    >
      <Image source={props.image} style={STYLES.image} />
      <View
        style={{
          paddingHorizontal: 16,
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Text style={STYLES.title}>BS. {props.name}</Text>
        <Text style={styles.ckhoa}>Chuyên khoa {props.specialist}</Text>
        <View style={styles.time}>
          <Text style={styles.timeTx}>Giờ đặt tiếp theo</Text>
          <Text style={[styles.timeTx, { fontWeight: "500" }]}>
            {" "}
            {props.booking}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  ckhoa: {
    fontSize: 10,
    fontWeight: "400",
    color: "#FFF",
  },
  time: {
    backgroundColor: "#374151",
    height: 22,
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 12,
    flexDirection: "row",
  },
  timeTx: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "400",
  },
});
