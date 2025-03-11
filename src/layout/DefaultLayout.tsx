import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

export function DefaultLayout(){
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}