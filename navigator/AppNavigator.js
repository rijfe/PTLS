import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage, { screenOptions as LoginPageScreenOptions } from "../page/LoginPage";
import MainPage, { mainHeaderOptions } from "../page/MainPage";
import SignUpPage, { headerOptions as SignUpPageHeaderOptions } from "../page/SignUpPage";

function AppNavigator() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen component={LoginPage} name="Login" options={LoginPageScreenOptions} />
        <stack.Screen component={SignUpPage} name="SignUp" options={SignUpPageHeaderOptions} />
        <stack.Screen component={MainPage} name="Main" options={mainHeaderOptions} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
