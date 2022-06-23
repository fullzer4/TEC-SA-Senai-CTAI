import "./calculadoraEsc.css"

export default function CalculadoraEsc() {

    return(
      <div className="calculadora">
        <div className="show-calculo">
          <div className="calculo1">
            <h4>foi</h4>
            <button>sair</button>
          </div>
        </div>
        <div className="calculadora-boxes">
          <div className="calculadora-box">
            <h2>Nome Calc</h2>
            <h3>explicao do calculo e bla bla bla</h3>
            <button>Abrir</button>
          </div>
        </div>
      </div>
    )
  }