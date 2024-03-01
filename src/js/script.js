import {
    atualizarIndicadoresDashboard,
    mostrarDashboard,
} from "./dashboard.js";
import { trocaFiltro } from "./filtros.js";
import { trocaNav } from "./nav.js";
import { mostrarNotasFiscais } from "./notasFiscais.js";

$("#dashboard-link").on("click", mostrarDashboard);
$("#notas-link").on("click", mostrarNotasFiscais);

$("#btn-menu-mobile").on("click", trocaNav);
$(".botao-filtro").on("click", trocaFiltro);

$("select").on("click", () => {
    $("select").toggleClass("fecha-select");
});

atualizarIndicadoresDashboard();
