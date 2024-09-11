import "./style/app.css";
import { Routing } from "./routing";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div
          className="offcanvas-lg offcanvas-start border-end bg-white aca"
          id="sidebar-wrapper"
        >
          <div className="sidebar-heading border-bottom bg-light">Logo</div>
          <div className="list-group list-group-flush">
            <Link
              className="list-group-item list-group-item-action list-group-item-light p-3"
              to={"/1"}
            >
              Home
            </Link>
            <Link
              className="list-group-item list-group-item-action list-group-item-light p-3"
              to={"/vista1"}
            >
              Vista 1
            </Link>
            <Link
              className="list-group-item list-group-item-action list-group-item-light p-3"
              to={"/vista2"}
            >
              Vista 2
            </Link>
          </div>
        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom d-lg-none">
            <div className="container-fluid">
              <button
                className="btn btn-primary ms-auto"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar-wrapper"
                aria-controls="sidebar-wrapper"
              >
                abrir
              </button>
            </div>
          </nav>
          <div
            className="container-fluid"
            style={{ background: "#E1F3FF", minHeight: "100vh" }}
          >
            <Routing></Routing>
          </div>
        </div>
      </div>
    </>
  );
};
