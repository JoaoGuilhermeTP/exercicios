import { StyleSheet, TextInput } from "react-native";

export default function CustomTextImput({value, changeText, placeholder}) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      keyboardType="text"
      onChangeText={changeText}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: 200
    }
});