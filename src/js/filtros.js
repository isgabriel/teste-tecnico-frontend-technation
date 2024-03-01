import { criaCard } from "./criaCards.js";
import { notasFiscais } from "./database.js";

export const trocaFiltro = () => {
    $(".filtros-container").toggleClass("ativo");
    $(".botao-filtro").toggleClass("ativo");
    $(".svg-filtro").toggleClass("ativo");

    $(".svg-filtro").hasClass("ativo")
        ? $(".svg-filtro").attr("src", "./src/assets/icones/btn-fecha.svg")
        : $(".svg-filtro").attr("src", "./src/assets/icones/filtro-icone.svg");
};
export const filtrarNotas = (ano, trimestre, mes) => {
    return notasFiscais.filter((nota) => {
        let anoEmissao = nota.emissao.substring(0, 4);
        let mesEmissao = nota.emissao.substring(5, 7);
        let trimestreEmissao = Math.ceil(parseInt(mesEmissao) / 3);

        return (
            anoEmissao === ano &&
            (trimestre === "0" || trimestreEmissao.toString() === trimestre) &&
            (mes === "00" || mesEmissao === mes)
        );
    });
};

export const filtrarNotasPorStatus = (notas, status) => {
    const notasFiltradas = notas.filter((nota) => {
        return status.includes(nota.status);
    }).length;

    return notasFiltradas;
};

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
