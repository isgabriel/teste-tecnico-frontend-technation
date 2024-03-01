import { notasFiscais } from "./database.js";
import { filtrarNotas, filtrarNotasPorStatus } from "./filtros.js";

export const mostrarDashboard = () => {
    $("#notas-fiscais").hide();
    $("#dashboard").show();
};
$("#select-ano, #select-trimestre, #select-mes").change(() => {
    atualizarIndicadoresDashboard();
});

export const atualizarIndicadoresDashboard = () => {
    let anoSelecionado = $("#select-ano").val();
    let trimestreSelecionado = $("#select-trimestre").val();
    let mesSelecionado = $("#select-mes").val();

    let notasFiltradas;
    if (
        anoSelecionado === "2024" &&
        trimestreSelecionado === "0" &&
        mesSelecionado === "00"
    ) {
        notasFiltradas = notasFiscais;
    } else {
        notasFiltradas = filtrarNotas(
            anoSelecionado,
            trimestreSelecionado,
            mesSelecionado
        );
    }

    let quantidadeNotasEmitidasTotal = filtrarNotasPorStatus(notasFiltradas, [
        "Emitida",
        "Pagamento em atraso",
        "Cobrança realizada",
        "Pagamento realizado",
    ]);
    let quantidadeVencidas = filtrarNotasPorStatus(notasFiltradas, [
        "Pagamento em atraso",
    ]);
    let quantidadeAVencer = filtrarNotasPorStatus(notasFiltradas, [
        "Cobrança realizada",
    ]);
    let quantidadePagas = filtrarNotasPorStatus(notasFiltradas, [
        "Pagamento realizado",
    ]);

    $("#quantidade-emitidas").text(
        "Quantidade de notas emitidas: " + quantidadeNotasEmitidasTotal
    );
    $("#quantidade-vencidas").text(
        "Quantidade de notas vencidas: " + quantidadeVencidas
    );
    $("#quantidade-a-vencer").text(
        "Quantidade de notas a vencer: " + quantidadeAVencer
    );
    $("#quantidade-pagas").text(
        "Quantidade de notas pagas: " + quantidadePagas
    );
};
