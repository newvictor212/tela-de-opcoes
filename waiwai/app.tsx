import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Logo */}
      <Image
        source={require('./assets/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* aplicativo */}
      <Text style={styles.title}>DuWaiWai</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>Menekâki Cewne aniriri</Text>

      {/* Botões de niveis de dificuldade */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Camkira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Warañe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Camkĩnhe</Text>
      </TouchableOpacity>
    </View>
  );
}
