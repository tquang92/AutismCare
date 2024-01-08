import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/config/context";
import RootStack from "./src/navigations/RootStack";

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ContextProvider>
  );
}
