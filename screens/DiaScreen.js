import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import data from "../assets/data.json";
import CustomTextImput from "../components/CustomTextImput";
import CustomPicker from "../components/CustomPicker";
import CustomButton from "../components/CustomButton";

function DiaScreen() {
    const diasDaSemana = data.diasDaSemana;
    const exercicios = [];
    const sequencias = Array.from({ length: 20 }, (_, i) => i + 1);

    const [dia, setDia] = useState(diasDaSemana[0].name);
    const [exercicio, setExercicio] = useState("");
    const [sequencia, setSequencia] = useState(sequencias[0]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Insira um exercício no seu treino</Text>
            <View>
                <CustomPicker
                    onValueChange={(dia) => setDia(dia)}
                    items={diasDaSemana}
                />
                <CustomPicker
                    onValueChange={(exercicio) => setExercicio(exercicio)}
                    items={exercicios}
                />
                <CustomPicker
                    onValueChange={(sequencia) => setSequencia(sequencia)}
                    items={sequencias}
                />
                <View style={styles.buttons}>
                    <CustomButton text="Limpar" />
                    <CustomButton text="Salvar" color="#90EE90" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default DiaScreen;
