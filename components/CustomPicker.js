import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

export default function CustomPicker({ onValueChange, items }) {
  return (
    <Picker style={styles.picker} onValueChange={onValueChange}>
      {items.map((item, index) => (
        <Picker.Item key={index} label={item.name ? item.name : item} value={item.name ? item.name : item} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 30,
    width: 200,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

