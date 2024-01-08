import { useContext } from "react";
import { Context } from "../config/context";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const RootStack = () => {
  const { user } = useContext(Context);
  return user ? <HomeStack /> : <AuthStack />;
};

export default RootStack;
