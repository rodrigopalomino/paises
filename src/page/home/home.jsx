import "../../style/home.css";
import { Pagination } from "./components/pagination";

import { Paises } from "./components/paises";

export const Home = () => {
  return (
    <>
      <div className="container-fluid pt-4">
        {/* Buscador y Paises */}
        <Paises></Paises>

        {/* Pagination */}
        <Pagination></Pagination>
      </div>
    </>
  );
};
