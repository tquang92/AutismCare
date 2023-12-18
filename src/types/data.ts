import { TouchableOpacityProps } from "react-native";

export interface CardItemProps extends TouchableOpacityProps {
    image: any;
    name: string;
    specialist: string;
    booking: string;
    edu: string;
    degree: string;
    exp: string;
  }