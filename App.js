import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Pantallas adicionales
function ResistenciaScreen() {
  const [voltaje, setVoltaje] = useState('');
  const [intensidad, setIntensidad] = useState('');
  const [resistencia, setResistencia] = useState('');

  const calcularResistencia = () => {
    if (voltaje !== '' && intensidad !== '') {
      const resistenciaCalculada = parseInt(parseFloat(voltaje) / parseFloat(intensidad));
      setResistencia(resistenciaCalculada.toString());
    } else {
      // Manejar el caso donde falta información
      setResistencia('Error: Ingresa valores válidos');
    }
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Calculadora de resistencia</Text>

      <Image
        source={require('./assets/Resistor.png')}
        style={{ width: 190, height: 90, marginBottom: 40, alignSelf: 'center' }}
        resizeMode="contain"
      />

      <Text style={styles.infoText}>
        La resistencia eléctrica (R) en un circuito se calcula utilizando la Ley de Ohm,
        que establece la relación entre el voltaje (V) y la corriente (I): R = V/I.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Voltaje (V)"
        keyboardType="numeric"
        value={voltaje}
        onChangeText={(text) => setVoltaje(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Intensidad (A)"
        keyboardType="numeric"
        value={intensidad}
        onChangeText={(text) => setIntensidad(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calcularResistencia}>
        <Text style={styles.buttonText}>Calcular Resistencia</Text>
      </TouchableOpacity>

      <Text style={styles.result}>La Resistencia es: {resistencia} Ohms</Text>
    </View>
  );
}

function VoltajeScreen() {
  const [intensidad, setIntensidad] = useState('');
  const [resistencia, setResistencia] = useState('');
  const [voltaje, setVoltaje] = useState('');

  const calcularVoltaje = () => {
    if (intensidad !== '' && resistencia !== '') {
      const voltajeCalculado = parseFloat(intensidad) * parseFloat(resistencia);
      setVoltaje(voltajeCalculado.toString());
    } else {
      // Manejar el caso donde falta información
      setVoltaje('Error: Ingresa valores válidos');
    }
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Calculadora de voltaje</Text>

      <Image
        source={require('./assets/voltaje.png')}
        style={{ width: 190, height: 90, marginBottom: 40, alignSelf: 'center' }}
        resizeMode="contain"
      />

      <Text style={styles.infoText}>
        El voltaje (V) en un circuito es la fuerza electromotriz que impulsa la corriente eléctrica.
        Se mide en voltios (V) y se calcula mediante la Ley de Ohm: V = I * R,
        donde I es la corriente y R es la resistencia.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Intensidad (A)"
        keyboardType="numeric"
        value={intensidad}
        onChangeText={(text) => setIntensidad(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Resistencia (Ohms)"
        keyboardType="numeric"
        value={resistencia}
        onChangeText={(text) => setResistencia(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calcularVoltaje}>
        <Text style={styles.buttonText}>Calcular Voltaje</Text>
      </TouchableOpacity>

      <Text style={styles.result}>El Voltaje es: {voltaje} V</Text>
    </View>
  );
}

function IntensidadScreen() {
  const [voltaje, setVoltaje] = useState('');
  const [resistencia, setResistencia] = useState('');
  const [intensidad, setIntensidad] = useState('');

  const calcularIntensidad = () => {
    if (voltaje !== '' && resistencia !== '') {
      const intensidadCalculada = parseFloat(voltaje) / parseFloat(resistencia);
      setIntensidad(intensidadCalculada.toString());
    } else {
      // Manejar el caso donde falta información
      setIntensidad('Error: Ingresa valores válidos');
    }
  };


  return (
    <View style={styles.center}>
      <Text style={styles.title}>Calculadora de Intensidad</Text>

      <Text style={styles.infoText}>
        La intensidad (I) en un circuito es la cantidad de corriente eléctrica que fluye por unidad de tiempo.
        Se mide en amperios (A) y se calcula mediante la Ley de Ohm: I = V / R,
        donde V es el voltaje y R es la resistencia.
      </Text>

      <Image
        source={require('./assets/intensidad.png')}
        style={{ width: 190, height: 90, marginBottom: 40, alignSelf: 'center' }}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Voltaje (V)"
        keyboardType="numeric"
        value={voltaje}
        onChangeText={(text) => setVoltaje(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Resistencia (Ohms)"
        keyboardType="numeric"
        value={resistencia}
        onChangeText={(text) => setResistencia(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calcularIntensidad}>
        <Text style={styles.buttonText}>Calcular Intensidad</Text>
      </TouchableOpacity>

      <Text style={styles.result}>La Intensidad es: {intensidad} A</Text>
    </View>
  );
}

// Pantalla principal con botones
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Ley de Ohm</Text>
      <Text style={{ fontSize: 15, color: '#555', marginBottom: 70, textAlign: 'justify', alignItems: 'center' }}>
        La Ley de Ohm es un principio fundamental en la teoría de circuitos eléctricos, y
        establece la relación entre la corriente eléctrica (I), la tensión o voltaje (V) y la resistencia (R)
        en un circuito.
      </Text>

      <Image
        source={require('./assets/tria-ley-ohm.png')}
        style={{ width: 190, height: 90, marginBottom: 40, alignSelf: 'center' }}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Calculadora de Resistencia')}>
        <Text style={styles.buttonText}>Calcular la resistencia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Calculadora de Voltaje')}>
        <Text style={styles.buttonText}>Calcular el voltaje</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Calculadora de Intensidad')}>
        <Text style={styles.buttonText}>Calcular la Intensidad</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Str-Ohm',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'right'
            }}
          />
          <Stack.Screen name="Calculadora de Resistencia"
            component={ResistenciaScreen}
            options={{
              title: 'Calculadora de Resistencias',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTintColor: 'white'
            }} />
          <Stack.Screen name="Calculadora de Voltaje"
            component={VoltajeScreen}
            options={{
              title: 'Calculadora de Voltaje',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTintColor: 'white'
            }} />
          <Stack.Screen name="Calculadora de Intensidad"
            component={IntensidadScreen}
            options={{
              title: "Calculadora de Intensidad",
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTintColor: 'white'
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});
