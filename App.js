import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciciosScreen from './screens/ExerciciosScreen';
import DiaScreen from './screens/DiaScreen';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Novo Exercício" component={ExerciciosScreen} />
        <Tab.Screen name="Inserir no Treino" component={DiaScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
