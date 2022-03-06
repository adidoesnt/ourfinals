import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { View, Text } from "react-native";

export const DropdownSelect = ({
  control,
  name,
  label,
  defaultValue,
  items,
}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Picker
            selectedValue={field.value ?? defaultValue}
            onValueChange={(value) => {
              field.onChange(value);
            }}
          >
            {items.map((item) => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        )}
      ></Controller>
    </View>
  );
};
