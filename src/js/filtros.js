import { criaCard } from "./criaCards.js";
import { notasFiscais } from "./database.js";

export const filtrarPorMes = (mes) => {
    if (mes === "Selecionar mês") {
        criaCard(notasFiscais);
    } else {
        const notasFiltradas = notasFiscais.filter((nota) => {
            const dataEmissao = new Date(nota.emissao);
            return dataEmissao.getMonth() === mes - 1;
        });
        criaCard(notasFiltradas);
    }
};
