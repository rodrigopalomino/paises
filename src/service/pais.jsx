export const getContinentes = async (setContienetes) => {
  const query = `
        query {
          continents {
            name
            code
          }
        }
      `;

  try {
    const response = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    setContienetes(result.data.continents);
  } catch (error) {
    console.log(error);
  }
};

export const getPaises = async (setPaises, codContinente, setContinente) => {
  const query =
    codContinente === "SIN"
      ? `
      query {
        countries {
          name
          code
          continent {
            name
          }
        }
      }
    `
      : `
      query {
        continent(code: "${codContinente}") {
          name
          countries {
            name
            code
          }
        }
      }
    `;

  try {
    const response = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    if (codContinente === "SIN") {
      setPaises(result.data.countries);
    } else {
      setPaises(result.data.continent.countries);
      setContinente(result.data.continent.name);
    }
  } catch (error) {
    console.log("error => ", error);
  }
};

export const getPais = async (setPais, codigo) => {
  const query = `

    query {
      country(code:"${codigo}"){
          code
          awsRegion
          name
          currency
          currencies
          capital
          native
          phone
          states{
              name
          }
          continent {
              name
          }
          languages {
              name
          }
      }
  }
  `;

  try {
    const response = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    console.log(result.data.country);

    setPais(result.data.country);
  } catch (error) {
    console.log(error);
  }
};
