// Import CSS
import "./App.css";

// Import React
import { useState, useEffect } from "react";

// Import Images

// Import Hook
import { useFetchLang } from "./components/hooks/useFetchLang";

// Import Components
import FormStage1 from "./components/FormStage1";
import FormStage2 from "./components/FormStage2";
import FormStage3 from "./components/FormStage3";
import FormStage4 from "./components/FormStage4";
import FormStage5 from "./components/FormStage5";

// Import CORS/Data
const url = "http://localhost:1000/api/listarlang";

const steps = [
  { id: 1, stage: "Informações Técnicas" },
  { id: 2, stage: "Empresa Parceira" },
  { id: 3, stage: "Dados dos autores" },
  { id: 4, stage: "Finalizar" },
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const { data: lang, loading } = useFetchLang(url);

  // Dados do estágio 1 do formulário
  const [titleProgram, setTitleProgram] = useState("");
  const [typeProgram, setTypeProgram] = useState("");
  const [dateProgram, setDateProgram] = useState("");
  const [aplicationProgram, setAplicationProgram] = useState("");
  const [criptoProgram, setCriptoProgram] = useState("");
  const [obraProtegida, setObraProtegida] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const moveToNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const moveToPrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const finalizeForm = () => {
    setCurrentStep(1);
    setComplete(true);
  };

  // Guarda as linguagens selecionadas em "selectedLanguages"
  const handleSelectedLanguagesChange = (languages) => {
    const selected = languages.map((language) => ({
      idLinguagem: language.idLang,
      nomeLinguagem: language.nome,
    }));
    setSelectedLanguages(selected);
  };

  const handleStage1Data = (
    title,
    type,
    date,
    aplication,
    cripto,
    obraProtegida
  ) => {
    setTitleProgram(title);
    setTypeProgram(type);
    setDateProgram(date);
    setAplicationProgram(aplication);
    setCriptoProgram(cripto);
    setObraProtegida(obraProtegida);

    moveToNext();
  };

  if (selectedLanguages) {
    console.log(
      "DADOS PROGRAMA",
      titleProgram,
      typeProgram,
      dateProgram,
      aplicationProgram,
      criptoProgram,
      selectedLanguages,
      obraProtegida
    );
  } else {
    console.log("vazio paizao");
  }

  // Apenas verificando se a linguagem está entrando
  useEffect(() => {
    console.log(selectedLanguages);
  }, [selectedLanguages]);

  return (
    <div className="App">
      {/* <nav className="menuSection">
        <header className="header">
          <button className="btn btn-outline-success" id="btn-back">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
            Voltar{" "}
          </button>
        </header>

        <ul>
          {steps?.map((step) => (
            <li
              key={step.id}
              className={`step-item ${currentStep === step.id && "active"} ${
                (step.id < currentStep || complete) && "complete"
              }`}
              style={step.id === 1 ? { marginTop: "10px" } : {}}
            >
                {" "}
                {step.id < currentStep || complete ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="#f0eff4"
                      stroke="rgba(0, 0, 0, 0.31)"
                      strokeWidth="1"
                    />
                    <circle cx="12" cy="12" r="7.5" fill="#008a17" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="#f0eff4"
                      stroke="rgba(0, 0, 0, 0.31)"
                      strokeWidth="1"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      fill="#f0eff4"
                      stroke="#f0eff4"
                    />
                  </svg>
                )}
              <span>{step.stage}</span>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        {currentStep === 1 && (
          <FormStage1
            linguagens={lang ?? []}
            loading={loading}
            onSelectedLanguagesChange={handleSelectedLanguagesChange}
            nextStage={moveToNext}
            handleStage1Data={handleStage1Data}
          />
        )}

        {currentStep === 2 && (
          <FormStage2 nextStage={moveToNext} previousStage={moveToPrevious} />
        )}
        {currentStep === 3 && (
          <FormStage3 nextStage={moveToNext} previousStage={moveToPrevious} />
        )}

        {currentStep === 4 && (
          <FormStage4 nextStage={moveToNext} previousStage={moveToPrevious} />
        )}

        {currentStep === 5 && (
          <FormStage5
            previousStage={moveToPrevious}
            finalizeForm={finalizeForm}
          />
        )}
      </main> */}

      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row" id="App">
          <nav className="col-md-3 col-lg-2 bg-light sidebar p-0">
            <header
              style={{
                borderBottom: "2px solid #dee2e6",
                padding: "15px",
              }}
            >
              <button
                className="btn btn-outline-success d-flex align-items-center gap-2"
                id="btn-back"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
                Voltar{" "}
              </button>
            </header>
            <div className="pt-2" id="stages">
              <ul className="nav gap-3 flex-md-column align-items-start justify-content-between flex-md-row ms-md0 ps-3 pe-3 pt-3">
                {steps?.map((step) => (
                  <li
                    key={step.id}
                    className={`nav-item align-items-center justify-content-center text-center d-md-flex d-md-row gap-1 step-item ${
                      currentStep === step.id && "active"
                    } ${(step.id < currentStep || complete) && "complete"}`}
                    style={step.id === 1 ? { marginTop: "10px" } : {}}
                  >
                    {" "}
                    {step.id < currentStep || complete ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="#f0eff4"
                          stroke="rgba(0, 0, 0, 0.31)"
                          strokeWidth="1"
                        />
                        <circle cx="12" cy="12" r="7.5" fill="#008a17" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="#f0eff4"
                          stroke="rgba(0, 0, 0, 0.31)"
                          strokeWidth="1"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="7"
                          fill="#f0eff4"
                          stroke="#f0eff4"
                        />
                      </svg>
                    )}
                    <span>{step.stage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-3">
              <h2>Conteúdo Principal</h2>
              <div className="mb-3">
                <label for="input1" className="form-label">
                  Input 1
                </label>
                <input type="text" className="form-control" id="input1" />
              </div>
              <div className="mb-3">
                <label for="input2" className="form-label">
                  Input 2
                </label>
                <input type="text" className="form-control" id="input2" />
              </div>
              <div className="mb-3">
                <label for="input3" className="form-label">
                  Input 3
                </label>
                <input type="text" className="form-control" id="input3" />
              </div>
              <div className="mb-3">
                <label for="input4" className="form-label">
                  Input 4
                </label>
                <input type="text" className="form-control" id="input4" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
