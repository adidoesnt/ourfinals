import {
  KeyboardAvoidingView,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import { FormField } from "../components/form/FormField";
import { Button } from "../components/Button";
import * as yup from "yup";
import { styles } from "../components/Stylesheet";
import { DropdownSelect } from "../components/form/DropdownSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  facultySchema,
  nameSchema,
  nusnetIdSchema,
  yearSchema,
} from "../schemas/reused";
import FormDebug from "../components/form/FormDebug";

const additionalInfoSchema = yup.object().shape({
  name: nameSchema.required(),
  faculty: facultySchema.required(),
  year: yearSchema.required(),
  // having issues with this
  nusnetid: yup.string().required(),
});

export default function AdditionalInfoSubmission() {
  const { handleSubmit, control, clearErrors, watch } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      year: "1",
      faculty: "",
      // nusnetid: "",
    },
    resolver: yupResolver(additionalInfoSchema),
  });

  const values = watch();

  const additionalInfoHandler = handleSubmit(async (data) => {
    const { name, year, faculty, nusnetid } = data;

    try {
      console.log({ name, year, faculty, nusnetid });
      // submit additional information
    } catch {
      return alert("Submission of additional information failed");
    }
  });

  return (
    <>
      {/* <KeyboardAvoidingView style={styles.container}> */}
      <Text>Required additional information</Text>
      <SafeAreaView style={styles.formContainer}>
        <FormField control={control} name="name" label="name" />

        <FormField control={control} name="faculty" label="Faculty" />

        <DropdownSelect
          control={control}
          name="faculty"
          label="Faculty"
          defaultValue="computing"
          items={[
            { label: "Engineering", value: "engineering" },
            { label: "Computing", value: "computing" },
            { label: "Science", value: "science" },
          ]}
        ></DropdownSelect>

        <FormField
          control={control}
          name="year"
          label="Year"
          keyboardType="number-pad"
        />
        <FormField control={control} name="nusnetid" label="NUS NET ID" />

        <View>
          <Button onPress={additionalInfoHandler}>Submit</Button>
        </View>

        <FormDebug data={values}></FormDebug>
      </SafeAreaView>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
