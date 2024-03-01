import { criaCard } from "./criaCards.js";
import { notasFiscais } from "./database.js";
import { filtrarPorMes } from "./filtros.js";

export const mostrarNotasFiscais = () => {
    $("#dashboard").hide();
    $("#notas-fiscais").show();

    criaCard(notasFiscais);

    $("#filtro-por-mes").on("change", (e) => {
        const mesSelecionado = e.target.value;
        filtrarPorMes(mesSelecionado);
    });
};
