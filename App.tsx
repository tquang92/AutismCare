import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/config/context";
import RootStack from "./src/navigations/RootStack";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
