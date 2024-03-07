import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './title/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>izabel hillary</Text>
      <Text>aula dia 07-03-24</Text>
      <Title/>
      <StatusBar style="auto" />
    </View>
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
