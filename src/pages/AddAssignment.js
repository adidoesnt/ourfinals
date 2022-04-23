import { Button } from '../components/Button';
import { useAuth } from '../components/AuthContext';
import { View } from 'react-native';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { titleSchema, descriptionSchema } from '../schemas/reused';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from "react-hook-form";
import { FormField } from "../components/form/FormField";
import { styles } from "../components/Stylesheet";
// import { addNewAssignment } from "../../server/backend/courseService";
import { useState } from 'react';
import FormDebug from "../components/form/FormDebug";
import { firebaseErrorMessages } from "../errorMessages";

const addAssignmentSchema = yup.object().shape({
    title: titleSchema.required(),
    description: descriptionSchema.required()
});

// id, title, description, tutorId, studentId, moduleCode

export default function AddAssignment() {
    const { changeAssignmentSubmissionStateToFalse, currentUser, currentModule } = useAuth();

    const { handleSubmit, control, setError, setValue, watch } = useForm({
        defaultValues: {
          title: "",
          description: "",
        },
        resolver: yupResolver(addAssignmentSchema),
      });
    const values = watch();

    const [formError, setFormError] = useState("");

    function cancelSubmitAssignmentHandler() {
        changeAssignmentSubmissionStateToFalse();
        return;
    }

   const submitAssignmentHandler = handleSubmit(async (data) => {
        const { title, description } = data;

        if (!title) {
            console.log("There is no title!");
            setError("title", {
              type: "manual",
              message: "Title is required",
            });
            return;
        }

        if (!description) {
            console.log("There is no description!");
            setError("description", {
              type: "manual",
              message: "Description is required",
            });
            return;
        }

        try {
            const pushData = {
                id: null,
                title: data.title,
                description: data.description,
                tutorId: null,
                studentId: currentUser.uid,
                moduleCode: currentModule
            }
            console.log(pushData); // placeholder to test
            // await addNewAssignment(pushData);
        } catch (error) {
            console.log(Object.keys(error));
            setFormError(firebaseErrorMessages[error.code]);
            return alert("Assignment submission failed.");
        }
   });

    return (
        <View>
            <SafeAreaView style={styles.formContainer}>
                <FormField
                    control={control}
                    name="title"
                    label="Assignment Title"
                    placeholder="Title of your Assignment"
                ></FormField>
                <FormField
                    control={control}
                    name="description"
                    label="Assignment Description"
                    placeholder="Brief description of your Assignment"
                ></FormField>
            </SafeAreaView>
            <SafeAreaView>
                <Button onPress={submitAssignmentHandler}>Add Assignment</Button>
                <Button onPress={cancelSubmitAssignmentHandler}>Cancel</Button>

                {!!formError && (
                    <View>
                        <Text>{formError}</Text>
                    </View>
                )}

                <FormDebug data={values} />
            </SafeAreaView>
        </View>
    );
}