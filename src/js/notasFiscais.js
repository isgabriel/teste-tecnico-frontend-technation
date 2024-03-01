import { criaCard } from "./criaCards.js";
import { notasFiscais } from "./database.js";
import {
    filtrarPorMesDeCobranca,
    filtrarPorMesDeEmissao,
    filtrarPorMesDePagamento,
    filtrarPorStatus,
} from "./filtros.js";

export const mostrarNotasFiscais = () => {
    $("#dashboard").hide();
    $("#notas-fiscais").show();

    criaCard(notasFiscais);

    $("#filtro-por-mes-de-emissao").on("change", (e) => {
        const mesSelecionado = e.target.value;
        filtrarPorMesDeEmissao(mesSelecionado);
    });
    $("#filtro-por-mes-de-cobranca").on("change", (e) => {
        const mesSelecionado = e.target.value;
        filtrarPorMesDeCobranca(mesSelecionado);
    });
    $("#filtro-por-mes-de-pagamento").on("change", (e) => {
        const mesSelecionado = e.target.value;
        filtrarPorMesDePagamento(mesSelecionado);
    });
    $("#filtro-por-status").on("change", (e) => {
        const statusSelecionado = e.target.value;
        filtrarPorStatus(statusSelecionado);
    });
};
