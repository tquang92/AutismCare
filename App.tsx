import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Chat from "./src/screens/Book/Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./src/screens/Book/Detail";
import HomeTab from "./src/navigations/HomeTab";
import { Context, ContextProvider } from "./src/config/context";
import BookOverView from "./src/screens/Book/BookOverView";
import { Stack } from "./src/data/items";
import BookHistory from "./src/screens/Book/BookHistory";
import { useContext } from "react";

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

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

const RootStack = () => {
  const { user } = useContext(Context);
  return user ? <HomeStack /> : <AuthStack />;
};

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ContextProvider>
  );
}
