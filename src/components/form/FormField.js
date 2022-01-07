import { useController } from "react-hook-form";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const FormField = ({
  control,
  name,
  label,
  defaultValue = "",
  placeholder = "",
}) => {
  const { field, fieldState } = useController({
    control,
    name,

    defaultValue,
  });
  const { error } = fieldState;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input}
        placeholder={placeholder}
      ></TextInput>
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  error: {
    // color: "red",
    fontWeight: "600",
  },
});
