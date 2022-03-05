import { Text, View, ScrollView } from "react-native";

export default function FormDebug({ data }) {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 5,
        backgroundColor: "black",
      }}
    >
      {/* <ScrollView horizontal> */}
        <Text
          style={{
            color: "lightgray",
            fontFamily: "monospace",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </Text>
      {/* </ScrollView> */}
    </View>
  );
}
