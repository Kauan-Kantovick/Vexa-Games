import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

const usuarioPix = {
  chavesPix: [
    "awndoiawnda", "dwadwawadaw", "idoidaomwoo"
  ],
  bloqueio: false
};

export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(usuarioPix);

  return (
    <UserContext.Provider value={{ usuario }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
