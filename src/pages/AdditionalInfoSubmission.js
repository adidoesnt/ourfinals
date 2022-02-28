import { KeyboardAvoidingView, View, SafeAreaView, Image} from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styles } from "../components/Stylesheet";
import { facultySchema, nameSchema, nusnetIdSchema, yearSchema } from "../schemas/reused";
import { useAuth } from "../components/AuthContext";
import { FormField } from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

const additionalInfoSchema = yup.object().shape({
    name: nameSchema.required(),
    year: yearSchema.required(),
    faculty: facultySchema.required(),
    nusnetid: nusnetIdSchema.required()
});

export default function AdditionalInfoSubmission() {
    const { submitAdditionalInfo } = useAuth();

    const { handleSubmit, control } = useForm({
        defaultValues: {
          name: "",
          year: "",
          faculty: "",
          nusnetid: "",
        },
        resolver: yupResolver(additionalInfoSchema),
    });

    const additionalInfoHandler = handleSubmit(async (data) => {
        const {name, year, faculty, nusnetid} = data;

        try {
            submitAdditionalInfo(name, year, faculty, nusnetid);
        } catch {
            return alert("Submission of additional information failed");
        }
    });

    return (
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView>
                <Image
                style={styles.logo}
                source={require("../../assets/highres_transparent_logo.png")}
                />
            </SafeAreaView>

            <SafeAreaView style={styles.formContainer}>
                <FormField
                    control={control}
                    name="name"
                    label="Name"
                    autoCorrect={false}
                    autoCapitalize="words"
                />
                <FormField
                    control={control}
                    name="year"
                    label="Year"
                />
                <FormField
                    control={control}
                    name="faculty"
                    label="Faculty"
                />
                <FormField
                    control={control}
                    name="nusnetid"
                    label="NUSNET ID"
                />
                <View>
                    <Button onPress={additionalInfoHandler}>Submit</Button>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}