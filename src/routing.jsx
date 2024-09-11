import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./page/home/home";
import { Vista1 } from "./page/vista 1/vista1";
import { Vista2 } from "./page/vista 2/vista2";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/:page" element={<Home></Home>}></Route>
      <Route path="/vista1" element={<Vista1></Vista1>}></Route>
      <Route path="/vista2" element={<Vista2></Vista2>}></Route>
      <Route path="*" element={<Navigate to="/1" />} />
    </Routes>
  );
};
