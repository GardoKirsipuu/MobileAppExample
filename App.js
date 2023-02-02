import React from "react";
import { SafeAreaView } from "react-native";
import Signup from "./src/screens/auth/Signup";
import Splash from "./src/screens/auth/Splash";

const App = () => {
  return (
    <SafeAreaView>
      <Signup/>
    </SafeAreaView>
  )
}

export default App