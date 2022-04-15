import React, { useLayoutEffect } from "react";
import { Button, SafeAreaView, View, Text } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "../components";
import { RootNavigatorScreenProps } from "./NavigationTypes";

type Props = RootNavigatorScreenProps<"NewGroupScreen">;

export default function NewGroupScreen(props: Props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "New group",
      headerRight: () => <Button title="Save" />,
    });
  });

  return (
    <SafeAreaView style={{ padding: 24 }}>
      <Formik
        initialValues={{
          groupName: "",
        }}
        validationSchema={Yup.object().shape({
          groupName: Yup.string().required("Required").min(1, "Required"),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <TextField
              label="Group name"
              onChangeText={handleChange("groupName")}
              onBlur={handleBlur("groupName")}
              value={values.groupName}
              errorMessage={errors.groupName}
            />
            <TextField
              label="Group name"
              onChangeText={handleChange("groupName")}
              onBlur={handleBlur("groupName")}
              value={values.groupName}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
