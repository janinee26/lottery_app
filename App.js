import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0);
  const [guessNumber, setGuessNumber] = useState('');
  const [bet, setBet] = useState('');
  const [won, setWon] = useState('');
  const [calculatedVal, setCalculatedVal] = useState(0);

  const generateNumber = () => {
    // Fix: Generates a whole number between 100 and 999
    const generatedNumber = Math.floor(Math.random() * 900) + 100;
    setResult(generatedNumber);

    const guess = parseInt(guessNumber);
    const betAmount = parseFloat(bet);

    if (guess === generatedNumber) {
      const winnings = betAmount * 100;
      setCalculatedVal(winnings);
      setWon(`Congratulations, you won ₱${winnings.toFixed(2)}!`);
    } else {
      setWon('You guessed wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lottery App!</Text>
      <Text>{won}</Text>
      <Text style={styles.displayResultText}>Generated Number: {result}</Text>

      <TextInput 
        style={styles.textInput} 
        onChangeText={setGuessNumber} 
        value={guessNumber}
        keyboardType="numeric"
        placeholder="Enter your 3-digit number..."
      />

      <TextInput 
        style={styles.textInput} 
        onChangeText={setBet} 
        value={bet}
        keyboardType="numeric"
        placeholder="Enter your bet..."
      />

      <TouchableOpacity style={styles.submitButton} onPress={generateNumber}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc0cb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  displayResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
