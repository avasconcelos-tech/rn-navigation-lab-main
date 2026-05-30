import { createNativeStackNavigator } from "@react-navigation/stack";

import DetalheScreen from "../screens/DetalheScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhe" component={DetalheScreen} />
    </Stack.Navigator>
  );
}
