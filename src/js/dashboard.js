import { notasFiscais } from "./database.js";
import { filtrarNotas, filtrarNotasPorStatus } from "./filtros.js";
import { atualizarGraficos } from "./graficos.js";

export const mostrarDashboard = () => {
    $("#notas-fiscais").hide();
    $("#dashboard").show();

    $(".dashboard-link-aside").toggleClass("ativou");
    $(".notas-link-aside").removeClass("ativou");
};

$("#select-ano, #select-trimestre, #select-mes").change(() => {
    atualizarIndicadoresDashboard();
});

$("#select-ano").change(() => {
    atualizarGraficos();
});

export const atualizarIndicadoresDashboard = () => {
    const anoSelecionado = $("#select-ano").val();
    const trimestreSelecionado = $("#select-trimestre").val();
    const mesSelecionado = $("#select-mes").val();

    let notasFiltradas;
    if (
        anoSelecionado === "2023" &&
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
