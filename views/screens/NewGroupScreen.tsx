import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";

import { Button } from "react-native-paper";

import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { GroupPicker, TextField } from "../components";
import { RootNavigatorScreenProps } from "./NavigationTypes";
import Vault from "../../model/Vault";
import VaultContext from "../../model/VaultContext";
import LoadingIndicator from "../components/LoadingIndicator";

type Props = RootNavigatorScreenProps<"NewGroupScreen">;

type FormFieldsTypes = {
  groupName: string;
  parentGroupName: string;
};

export default function NewGroupScreen(props: Props) {
  const vault = useContext<Vault | undefined>(VaultContext);
  const formikRef = useRef<FormikProps<FormFieldsTypes> | null>(null);

  const [isSaving, setSaving] = useState<boolean>(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "New group",
      headerRight: () => (
        <Button loading={isSaving} onPress={formikRef.current?.submitForm}>
          Save
        </Button>
      ),
    });
  });

  return (
    <>
      {vault === undefined ? (
        <LoadingIndicator />
      ) : (
        <Formik<FormFieldsTypes>
          innerRef={formikRef}
          initialValues={{
            groupName: "",
            parentGroupName: "",
          }}
          validationSchema={Yup.object().shape({
            groupName: Yup.string()
              .required("Required")
              .min(1, "Required")
              .test(
                "isUnique",
                `Group with that name already exists`,
                async (value, _) => {
                  return await vault.groups.doesntHaveName(value!);
                }
              ),
            parentGroupName: Yup.string().required("Required"),
          })}
          onSubmit={async (values) => {
            setSaving(true);
            await vault.groups.create({
              name: values.groupName,
              parentName: values.parentGroupName,
            });
            setSaving(false);
            props.navigation.goBack();
          }}
        >
          {(formik) => (
            <SafeAreaView style={{ padding: 24 }}>
              <TextField
                label="Group name"
                onChangeText={formik.handleChange("groupName")}
                onBlur={formik.handleBlur("groupName")}
                value={formik.values.groupName}
                errorMessage={formik.errors.groupName}
              />
              <GroupPicker
                label="Parent group"
                onPicked={formik.handleChange("parentGroupName")}
                onBlur={formik.handleBlur("parentGroupName")}
                value={formik.values.parentGroupName}
              />
            </SafeAreaView>
          )}
        </Formik>
      )}
    </>
  );
}
