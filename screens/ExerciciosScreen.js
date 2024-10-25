import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

function ExerciciosScreen() {

    const [regiao, setRegiao] = useState('Peito');
    const [exercicio, setExercicio] = useState('');

    return (
        <View>
            <Text>Cadastre um novo exercício</Text>
            <View>
                <Picker
                    style={styles.picker}
                    onValueChange={(regiao, itemIndex) =>
                        setRegiao(regiao)}
                >
                    <Picker.Item label="Peito" value="Peito" />
                    <Picker.Item label="Costas" value="Costas" />
                    <Picker.Item label="Bíceps" value="Bíceps" />
                    <Picker.Item label="Tríceps" value="Tríceps" />
                    <Picker.Item label="Pernas" value="Pernas" />
                    <Picker.Item label="Glúteos" value="Glúteos" />
                </Picker>

                <TextInput
                style={styles.input}
                    value={exercicio}
                    keyboardType="text"
                    onChangeText={(exercicio) => setExercicio(exercicio)}
                    placeholder={'Digite o nome do exercício'}
                />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '80%',
    },
});

export default ExerciciosScreen;