import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustonHeader from './views/utils/CustonHeader';

import AdicionarVinho from './views/AdicionarVinho';
import DetalhesVinho from './views/DetalhesVinho';
import ListarVinho from './views/ListarVinho';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AdicionarVinho' screenOptions={{ header: (props) => <CustonHeader {...props} />, }}>
        <Stack.Screen name='App Vinho' component={AdicionarVinho} />
        <Stack.Screen name='ListarVinho' component={ListarVinho} />
        <Stack.Screen name='DetalhesVinho' component={DetalhesVinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
