import { Home } from "iconsax-react-native";
import { Stack } from "../data/items";
import BookHistory from "../screens/Book/BookHistory";
import BookOverView from "../screens/Book/BookOverView";
import Detail from "../screens/Book/Detail";
import HomeTab from "./HomeTab";

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="BookOverView" component={BookOverView} />
      <Stack.Screen name="BookHistory" component={BookHistory} />
    </Stack.Navigator>
  );
};

export default HomeStack;
