import { createContext } from "react";
import Vault from "./Vault";

const defaultVault = new Vault("Default Vault");
const VaultContext = createContext<Vault>(defaultVault);
export default VaultContext;
