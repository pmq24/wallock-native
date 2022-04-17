import React, { useEffect, useState } from "react";
import Vault from "./Vault";
import VaultContext from "./VaultContext";

type Props = {
  vaultName: string;
  children?: any;
};

export default function VaultContextProvider(props: Props) {
  const [vault, setVault] = useState<Vault | undefined>();

  useEffect(() => {
    Vault.init(props.vaultName).then((vault) => {
      setVault(vault);
    });
  }, []);

  return (
    <VaultContext.Provider value={vault}>
      {props.children}
    </VaultContext.Provider>
  );
}
