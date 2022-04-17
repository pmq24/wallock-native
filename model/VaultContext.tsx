import { createContext } from "react";
import Vault from "./Vault";

const VaultContext = createContext<Vault | undefined>(undefined);
export default VaultContext;
