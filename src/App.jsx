import "./App.css";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function App() {
  return (
    <>
      <div className="container">
        <Bar
          data={{
            labels: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
            ],
            datasets: [
              {
                label: "Ingresos",
                data: [
                  700, 200, 0, 400, 800, 600, 0, 2000, 900, 1000, 1100, 1200,
                ],
                backgroundColor: "rgba(83, 245, 166, 0.8)",
              },
              {
                label: "Perdidas",
                data: [0, 0, 200, 0, 0, 0, 700, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(194, 44, 44, 0.8)",
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default App;
