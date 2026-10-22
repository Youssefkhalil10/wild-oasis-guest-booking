"use client";
import { createContext, useContext, useState } from "react";

//1. Create Context
const ReservationContext = createContext();
const initialState = { from: undefined, to: undefined };
//2. Create Provider and value
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

//3. UseContext
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("useContext can not use outside the Provider ");
  return context;
}

//4. Export useContext and Provider
export { useReservation, ReservationProvider };
