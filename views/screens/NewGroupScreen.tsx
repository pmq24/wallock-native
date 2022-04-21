import React, { useContext, useLayoutEffect } from "react";
import { Button, SafeAreaView, View, Text } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import { GroupPicker, TextField } from "../components";
import { RootNavigatorScreenProps } from "./NavigationTypes";
import Vault from "../../model/Vault";
import VaultContext from "../../model/VaultContext";

type Props = RootNavigatorScreenProps<"NewGroupScreen">;

export default function NewGroupScreen(props: Props) {
  const vault = useContext<Vault | undefined>(VaultContext);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "New group",
      headerRight: () => <Button title="Save" />,
    });
  });

  return (
    <Formik
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
              if (!vault) return true;
              return await vault.groups.doesntHaveName(value!);
            }
          ),
        parentGroupName: Yup.string().required("Required"),
      })}
      onSubmit={(values) => console.log(values)}
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
  );
}
