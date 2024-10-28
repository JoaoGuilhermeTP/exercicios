import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import data from "../assets/data.json";
import CustomTextImput from "../components/CustomTextImput";
import CustomPicker from "../components/CustomPicker";
import CustomButton from "../components/CustomButton";

function ExerciciosScreen() {
    const regioes = data.regioes;
    const [regiao, setRegiao] = useState(regioes[0].name);
    const [exercicio, setExercicio] = useState("");
    const [descricao, setDescricao] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre um novo exercício</Text>
            <View>
                <CustomPicker
                    onValueChange={(regiao) => setRegiao(regiao)}
                    items={regioes}
                />
                <CustomTextImput
                    value={exercicio}
                    onChangeText={(exercicio) => setExercicio(exercicio)}
                    placeholder={"Digite o nome do exercício"}
                />
                <CustomTextImput
                    value={descricao}
                    onChangeText={(descricao) => setDescricao(descricao)}
                    placeholder="Digite a descrição"
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

export default ExerciciosScreen;
