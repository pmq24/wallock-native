import { ListItem } from "@rneui/themed";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { GroupEntity } from "../../model/groups/GroupEntity";
import Vault from "../../model/Vault";
import VaultContext from "../../model/VaultContext";
import { RootNavigatorScreenProps } from "./NavigationTypes";

type Props = RootNavigatorScreenProps<"PickGroupScreen">;

export default function PickGroupScreen(props: Props) {
  const vault = useContext<Vault | undefined>(VaultContext);
  const [groups, setGroups] = useState<GroupEntity[]>();

  useEffect(() => {
    if (vault) {
      vault.groups.getAll().then(setGroups);
    }
  }, [vault]);

  return (
    <SafeAreaView>
      {groups ? (
        groups.map((group, index) => (
          <ListItem
            key={index}
            onPress={() => {
              props.route.params?.onPicked(group._id);
              props.navigation.goBack();
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{group._id}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}
