import React from "react";
import { View } from "react-native";

import { ListItem } from "@rneui/base";

export default function GroupTree() {
  const groups = mockedGroupGraph;

  return (
    <View>
      {Array.from(groups.entries()).map(
        (group: [String, String | null], index: number) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>
                {printNestingLevel(group[0].toString()) + group[0].toString()}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )
      )}
    </View>
  );
}

function printNestingLevel(group: String | null): String {
  function getParentGroup(group: String): String | null {
    if (mockedGroupGraph.has(group)) {
      return mockedGroupGraph.get(group)!;
    } else {
      return null;
    }
  }

  let indent: string = "";

  while (group !== null) {
    indent += "    ";
    group = getParentGroup(group);
  }

  return indent;
}

type RootNode = null;
type Node = String;

const mockedGroupGraph = new Map<Node, Node | RootNode>();
mockedGroupGraph
  .set("Income", null)
  .set("Salary", "Income")
  .set("Wage", "Income")
  .set("Gifts", "Income")
  .set("Expense", null)
  .set("Needs", "Expense")
  .set("Bills", "Needs")
  .set("Rentals", "Bills")
  .set("Electricity", "Bills")
  .set("Internet", "Bills")
  .set("Wants", "Expense")
  .set("Clothing", "Wants")
  .set("Technologies", "Wants")
  .set("Saves", "Expense")
  .set("Stocks", "Saves")
  .set("Cryptos", "Saves")
  .set("BitCoin", "Cryptos")
  .set("Ethereum", "Cryptos");
