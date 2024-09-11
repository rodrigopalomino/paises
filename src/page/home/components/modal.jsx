import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPais } from "../../../service/pais";

export const Modal = ({ code }) => {
  const [pais, setPais] = useState(null);

  useEffect(() => {
    if (code) {
      getPais(setPais, code);
    }
  }, [code]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {pais ? pais.name : "Loading..."}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {pais && (
              <div>
                <img
                  src={`https://flagcdn.com/w320/${pais.code.toLowerCase()}.png`}
                  alt={`Bandera de ${pais.name}`}
                />

                <p>code : {pais.code}</p>
                <p>{pais.name}</p>
                <p>{pais.continent.name}</p>
                <p>Capital: {pais.capital}</p>
                <p>Language: {pais?.languages[0]?.name}</p>
                <p>Currency: {pais.currency}</p>
                <p>States</p>
                <div
                  className=""
                  style={{ maxHeight: "15rem", overflowY: "auto" }}
                >
                  {pais.states &&
                    pais.states.map((state) => (
                      <div key={state.name}>{state.name}</div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  code: PropTypes.string.isRequired,
};
