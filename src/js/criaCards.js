export const criaCard = (notas) => {
    $("#notas-list").empty();

    notas.forEach((nota) => {
        const notaFiscal = document.createElement("li");

        const pagador = document.createElement("h3");
        pagador.innerText = `Pagador: ${nota.pagador}`;

        const emissao = document.createElement("p");
        emissao.innerText = `Data de Emissão: ${nota.emissao}`;

        const cobranca = document.createElement("p");
        cobranca.innerText = `Data de Cobrança: ${nota.cobranca}`;

        const pagamento = document.createElement("p");
        pagamento.innerText = `Data de Pagamento: ${nota.pagamento}`;

        const valor = document.createElement("p");
        valor.innerText = `Valor: ${nota.valor}`;

        const documentoNota = document.createElement("p");
        documentoNota.innerText = `Documento(Nota): ${nota.documentoNota}`;

        const documentoBoleto = document.createElement("p");
        documentoBoleto.innerText = `Documento(Boleto): ${nota.documentoBoleto}`;

        const status = document.createElement("h4");
        status.innerText = `Status: ${nota.status}`;

        notaFiscal.append(
            pagador,
            emissao,
            cobranca,
            pagamento,
            valor,
            documentoNota,
            documentoBoleto,
            status
        );

        $("#notas-list").append(notaFiscal);
    });
};
