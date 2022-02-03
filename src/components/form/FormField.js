import { useController } from "react-hook-form";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const FormField = ({
  control,
  name,
  label,
  defaultValue = "",
  placeholder = "",
  ...props
}) => {
  const { field, fieldState } = useController({
    control,
    name,

    defaultValue,
  });
  const { error } = fieldState;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input}
        placeholder={placeholder}
        {...props}
      ></TextInput>
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 15 },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 3,
    borderColor: "lightgray",
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
