import { Picker } from "@react-native-picker/picker";

export const DropdownSelect = ({
  defaultValue,
  onValueChange = () => {},
  items,
}) => {
  return (
    <Picker selectedValue={defaultValue}>
      {items.map((item) => (
        <Picker.Item label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};
