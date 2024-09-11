import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContinentes, getPaises } from "../../../service/pais";
import { Modal } from "./modal";

export const Paises = () => {
  const [paises, setPaises] = useState([]);
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);
  const [continentes, setContinentes] = useState([]);
  const [codContinente, setCodContinente] = useState("SIN");
  const [asu, setAsu] = useState("");
  const [codePais, setCodigoPais] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { page } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCodContinente(event.target.value);
    setSearchTerm("");
    navigate(`/1`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCodContinente("SIN");
  };

  const clickCard = (pais) => {
    console.log("click");
    console.log(pais.code);
    setCodigoPais(pais.code);
  };

  useEffect(() => {
    getContinentes(setContinentes);
    getPaises(setPaises, codContinente, setAsu);
  }, [codContinente]);

  useEffect(() => {
    if (searchTerm) {
      setPaisesFiltrados(
        paises.filter((pais) =>
          pais.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setPaisesFiltrados(paises.slice((page - 1) * 12, page * 12));
    }
  }, [searchTerm, paises, page]);

  return (
    <>
      {/* buscador */}
      <div
        className="acaa"
        style={{ background: "#E1F3FF", border: "0px solid red" }}
      >
        <div className="buscador">
          <input
            type="text"
            className=""
            placeholder="Buscar país"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="row mt-3 ps-3">
            {continentes.length > 0 && (
              <select
                name="continentes"
                id="continentes"
                className="form-select me-2"
                value={codContinente}
                onChange={handleChange}
              >
                <option value="SIN">Todos</option>
                {continentes.map((continente) => (
                  <option value={continente.code} key={continente.code}>
                    {continente.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      {/* paises */}
      <div className="row paises my-3 g-3">
        {paisesFiltrados.length > 0 ? (
          paisesFiltrados.map((pais) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={pais.code}>
              <button
                className="card p-0 rounded-5 overflow-hidden"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => clickCard(pais)}
              >
                <img
                  src={`https://flagcdn.com/w320/${pais.code.toLowerCase()}.png`}
                  className="card-img-top"
                  style={{ height: "150px" }}
                  alt={pais.name}
                />
                <div className="card-body">
                  <p>{pais.name}</p>
                  <p>{pais.continent ? pais.continent.name : asu}</p>
                </div>
              </button>
            </div>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>

      {/* Modal */}
      <Modal code={codePais}></Modal>
    </>
  );
};
