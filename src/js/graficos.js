import { filtrarNotas } from "./filtros.js";

let graficoInadimplencia;
let graficoReceita;

export const atualizarGraficos = () => {
    const anoSelecionado = $("#select-ano").val();

    const notasAnoSelecionado = filtrarNotas(anoSelecionado, "0", "00");
    const notasPorMes = agruparNotasPorMes(notasAnoSelecionado);
    const notasInadimplentes = calcularNotasInadimplentes(notasPorMes);
    const receitaPorMes = calcularReceitaPorMes(notasPorMes);

    const mesesOrdenados = Object.keys(notasPorMes).sort();

    atualizarGraficoInadimplencia(mesesOrdenados, notasInadimplentes);
    atualizarGraficoReceita(mesesOrdenados, receitaPorMes);
};

const agruparNotasPorMes = (notas) => {
    let notasPorMes = {};

    notas.forEach((nota) => {
        const mes = nota.emissao.substring(5, 7);
        if (!notasPorMes[mes]) {
            notasPorMes[mes] = [];
        }
        notasPorMes[mes].push(nota);
    });
    return notasPorMes;
};

const calcularNotasInadimplentes = (notasPorMes) => {
    let notasInadimplentes = {};

    Object.keys(notasPorMes).forEach((mes) => {
        let notas = notasPorMes[mes];
        let contador = 0;

        notas.forEach((nota) => {
            if (nota.status === "Pagamento em atraso") {
                contador++;
            }
        });

        notasInadimplentes[mes] = contador;
    });

    return notasInadimplentes;
};

const calcularReceitaPorMes = (notasPorMes) => {
    let receitaPorMes = {};

    Object.keys(notasPorMes).forEach((mes) => {
        const notas = notasPorMes[mes];
        let receita = 0;

        notas.forEach((nota) => {
            receita += nota.valor;
        });

        receitaPorMes[mes] = receita;
    });

    return receitaPorMes;
};

const atualizarGraficoInadimplencia = (meses, valores) => {
    const ctx = document
        .getElementById("grafico-inadimplencia")
        .getContext("2d");

    if (graficoInadimplencia) {
        graficoInadimplencia.destroy();
    }

    graficoInadimplencia = new Chart(ctx, {
        type: "line",
        data: {
            labels: meses,
            datasets: [
                {
                    label: "Inadimplência por mês",
                    data: meses.map((mes) => {
                        return valores[mes] || 0;
                    }),
                    borderColor: "red",
                    borderWidth: 1,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

const atualizarGraficoReceita = (meses, valores) => {
    const ctx = document.getElementById("grafico-receita").getContext("2d");

    if (graficoReceita) {
        graficoReceita.destroy();
    }

    graficoReceita = new Chart(ctx, {
        type: "line",
        data: {
            labels: meses,
            datasets: [
                {
                    label: "Receita por mês",
                    data: meses.map((mes) => {
                        return valores[mes] || 0;
                    }),
                    borderColor: "blue",
                    borderWidth: 1,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

atualizarGraficos();
