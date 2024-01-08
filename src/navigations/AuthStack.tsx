import { Stack } from "../data/items";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
