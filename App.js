import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9695a4e6';
	const [state, setState] = useState({
		s: 'Enter a movie...',
		results: [],
		selected: {},
  });
  
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Christmas Movie Review App</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'flex-start',
  },
  title: {
    color: 'green'
  }
});
