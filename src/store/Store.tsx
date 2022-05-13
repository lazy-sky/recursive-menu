import React, {
  createContext,
  FC,
  useState,
  useContext,
  useEffect
} from "react";
import api from "../api";
import { FileContext } from "../types";

const Context = createContext({} as FileContext);

const Provider: FC = ({ children }) => {
  const [directoryTree, setDirectoryTree] = useState();

  useEffect(() => {
    api
      .getDirectoryTree()
      .then(tree => {
        setDirectoryTree(tree);
        return tree;
      })
      .catch(e => console.error(e.message));
  }, []);

  const deleteFile = (fileId: string): void => {
    api
      .deleteById(fileId)
      .then(value => {
        setDirectoryTree(value);
      })
      .catch(e => console.error(e.message));
  };

  const context = {
    directoryTree,
    deleteFile
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

const useStore = (): FileContext => {
  const storeCtx = useContext(Context);
  return storeCtx;
};

export { Context, Provider, useStore };
