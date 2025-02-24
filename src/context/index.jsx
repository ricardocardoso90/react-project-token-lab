import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  function newDate() {
    const newDateWeek = format(new Date(), "EEEE", { locale: ptBR });
    const newDateMonth = format(new Date(), "dd/MM/yyyy", { locale: ptBR, });
    const newDateHours = format(new Date(), "HH:m", { locale: ptBR, });

    return (`${newDateWeek} - ${newDateMonth} às ${newDateHours}`);
  };

  function isLoadedRoutes() {
    setIsLoaded(!isLoaded);
  };

  return (
    <AuthContext.Provider value={
      {
        isLoaded,
        setIsLoaded,
        isLoadedRoutes,
        newDate
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}