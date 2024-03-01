import { notasFiscais } from "./database.js";

export const mostrarDashboard = () => {
    $("#notas-fiscais").hide();
    $("#dashboard").show();
};

export function DashContent() {
    const quantitadeNotasEmitidas = notasFiscais.reduce((total, valor) => {
        if (
            valor.status === "Emitida" ||
            valor.status === "Pagamento em atraso" ||
            valor.status === "Cobrança realizada" ||
            valor.status === "Pagamento realizado"
        ) {
            return total + 1;
        }
        return total;
    }, 0);
    const quantitadeNotasEmitidasMasNaoCobradas = notasFiscais.reduce(
        (total, valor) => {
            if (valor.status === "Emitida") {
                return total + 1;
            }
            return total;
        },
        0
    );
    const quantitadeNotasVencidas = notasFiscais.reduce((total, valor) => {
        if (valor.status === "Pagamento em atraso") {
            return total + 1;
        }
        return total;
    }, 0);
    const quantitadeNotasAVencer = notasFiscais.reduce((total, valor) => {
        if (valor.status === "Cobrança realizada") {
            return total + 1;
        }
        return total;
    }, 0);
    const quantitadeNotasPagas = notasFiscais.reduce((total, valor) => {
        if (valor.status === "Pagamento realizado") {
            return total + 1;
        }
        return total;
    }, 0);

    $("#total-emitido").text(
        `Total de notas emitidas: ${quantitadeNotasEmitidas}`
    );
    $("#total-emitido-sem-cobranca").text(
        `Total de notas emitidas, mas sem cobrança feita: ${quantitadeNotasEmitidasMasNaoCobradas}`
    );
    $("#total-vencido").text(
        `Total de notas vencidas: ${quantitadeNotasVencidas}`
    );
    $("#total-a-vencer").text(
        `Total de notas a vencer: ${quantitadeNotasAVencer}`
    );
    $("#total-pagas").text(`Total de notas pagas: ${quantitadeNotasPagas}`);
}
