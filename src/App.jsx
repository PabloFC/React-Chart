import "./App.css";
import "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

function App() {
  return (
    <>
      <div className="contenedor">
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

      <div className="contenedor">
        <Line
          data={{
            labels: [
              " ",
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
            ],
            datasets: [
              {
                label: "Historial de ventas mensuales",
                data: [0, 300, 400, 250, 400, 450, 500],
                backgroundColor: "rgba(83, 245, 166, 0.8)",
                borderColor: "rgba(83, 245, 166, 0.8)",
                color: "rgba(83, 245, 166, 0.8)",
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default App;
