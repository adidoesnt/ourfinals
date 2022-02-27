import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { facultySchema, nameSchema, nusnetIdSchema, yearSchema } from "../schemas/reused";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/Button";

/*const additionalInfoSchema = yup.object.shape({
    name: nameSchema.required(),
    year: yearSchema.required(),
    faculty: facultySchema.required(),
    nusnetid: nusnetIdSchema.required()
});

export default function AdditionalInfoSubmission() {
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
            // submit additional information
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
                <View>
                    <Button onPress={additionalInfoHandler}>Submit</Button>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}*/

export default function AdditionalInfoSubmission() {
    const { submitAdditionalInfo } = useAuth();
    return (
        <Button onPress={submitAdditionalInfo}>Submit</Button>
    );
}