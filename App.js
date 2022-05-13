import { StyleSheet, View } from 'react-native';
import MyComponent from './components/MyComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
