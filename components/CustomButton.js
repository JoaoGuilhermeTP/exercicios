import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomButton({ text, color }) {
  return (
    <TouchableOpacity styles={{width: '100%'}}>
      <Text style={[styles.button, {backgroundColor: color}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
