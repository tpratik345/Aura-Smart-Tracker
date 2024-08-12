import { Text, View } from "react-native";
import LoginScreen from './screen/LoginScreen';
import WelcomeScreen from './screen/WelcomeScreen';

export default function Index() {
  return (
    <View>
      <LoginScreen />
      {/* <WelcomeScreen /> */}
    </View>
  );
}
