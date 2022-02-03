import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button = ({ children, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {typeof children == "string" ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        { children }
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  text: { textAlign: "center" },
});
