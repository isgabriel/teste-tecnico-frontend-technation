import { criaCard } from "./criaCards.js";
import { notasFiscais } from "./database.js";

export const filtrarPorMesDeEmissao = (mes) => {
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
export const filtrarPorMesDeCobranca = (mes) => {
    if (mes === "Selecionar mês") {
        criaCard(notasFiscais);
    } else {
        const notasFiltradas = notasFiscais.filter((nota) => {
            const dataCobranca = new Date(nota.cobranca);
            return dataCobranca.getMonth() === mes - 1;
        });
        criaCard(notasFiltradas);
    }
};
export const filtrarPorMesDePagamento = (mes) => {
    if (mes === "Selecionar mês") {
        criaCard(notasFiscais);
    } else {
        const notasFiltradas = notasFiscais.filter((nota) => {
            const dataPagamento = new Date(nota.pagamento);
            return dataPagamento.getMonth() === mes - 1;
        });
        criaCard(notasFiltradas);
    }
};
export const filtrarPorStatus = (status) => {
    if (status === "Status da Nota") {
        criaCard(notasFiscais);
    } else {
        const notasFiltradas = notasFiscais.filter(
            (nota) => nota.status === status
        );

        criaCard(notasFiltradas);
    }
};
