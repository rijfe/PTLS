import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage, { screenOptions as LoginPageScreenOptions } from "../page/LoginPage";
import MainPage from "../page/MainPage";

function AppNavigator() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen component={LoginPage} name="Login" options={LoginPageScreenOptions} />
        <stack.Screen component={MainPage} name="Main" />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
