export const criaCard = (notas) => {
    $("#notas-list").empty();

    notas.forEach((nota) => {
        const notaFiscal = document.createElement("li");

        const titulo = document.createElement("h3");
        titulo.innerText = "Pagador: ";

        const pagador = document.createElement("span");
        pagador.innerText = `${nota.pagador}`;

        const tituloEmissao = document.createElement("h3");
        tituloEmissao.innerText = "Data de Emissão: ";
        const emissao = document.createElement("span");
        emissao.innerText = `${nota.emissao}`;

        const tituloCobranca = document.createElement("h3");
        tituloCobranca.innerText = "Data de Cobrança: ";
        const cobranca = document.createElement("span");
        cobranca.innerText = `${nota.cobranca}`;

        const tituloPagamento = document.createElement("h3");
        tituloPagamento.innerText = "Data de Pagamento: ";
        const pagamento = document.createElement("span");
        pagamento.innerText = `${nota.pagamento}`;

        const tituloValor = document.createElement("h3");
        tituloValor.innerText = "Valor: ";
        const valor = document.createElement("span");
        valor.innerText = `${nota.valor}`;

        const tituloDocumentoNota = document.createElement("h3");
        tituloDocumentoNota.innerText = "Documento (Nota Fiscal): ";
        const documentoNota = document.createElement("span");
        documentoNota.innerText = `${nota.documentoNota}`;
        documentoNota.classList.add("documento-span");

        const tituloDocumentoBoleto = document.createElement("h3");
        tituloDocumentoBoleto.innerText = "Documento (Boleto Bancário): ";
        const documentoBoleto = document.createElement("span");
        documentoBoleto.innerText = `${nota.documentoBoleto}`;
        documentoBoleto.classList.add("documento-span");

        const tituloStatus = document.createElement("h3");
        tituloStatus.innerText = "Status: ";
        const status = document.createElement("h4");
        status.innerText = `${nota.status}`;

        titulo.appendChild(pagador);
        tituloEmissao.appendChild(emissao);
        tituloCobranca.appendChild(cobranca);
        tituloPagamento.appendChild(pagamento);
        tituloValor.appendChild(valor);
        tituloDocumentoNota.appendChild(documentoNota);
        tituloDocumentoBoleto.appendChild(documentoBoleto);
        tituloStatus.appendChild(status);
        notaFiscal.append(
            titulo,
            tituloEmissao,
            tituloCobranca,
            tituloPagamento,
            tituloValor,
            tituloDocumentoNota,
            tituloDocumentoBoleto,
            tituloStatus
        );

        $("#notas-list").append(notaFiscal);
    });
};
