import { StyleSheet, Touchable, TouchableOpacity, View, Text } from "react-native";
import React from "react";

export interface NotificationBoxProps {
    title: string;
    content: string;
    BottomBox: React.FC;
    showModal?: boolean;
}

const NotificationBox = (props: NotificationBoxProps) => {
    return props.showModal ? (
        <View
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.2)",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "#fff",
                    width: "70%",
                    borderRadius: 16,
                    padding: 16
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: '#000',
                        fontWeight: "bold",
                        textAlign:'center',
                        paddingBottom:10
                    }}
                >
                    {props.title}
                </Text>
                <Text
                    style={{
                        marginBottom: 3,
                        textAlign:'center',
                        fontSize: 12,
                        lineHeight: 18,
                    }}
                >
                    {props.content}
                </Text>
                <props.BottomBox />
            </View>
        </View >
    ) : <></>;
};

export default NotificationBox;

const styles = StyleSheet.create({});