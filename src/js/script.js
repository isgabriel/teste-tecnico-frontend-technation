import {
    atualizarIndicadoresDashboard,
    mostrarDashboard,
} from "./dashboard.js";
import { atualizarGraficos } from "./graficos.js";
import { mostrarNotasFiscais } from "./notasFiscais.js";

$("#dashboard-link").on("click", mostrarDashboard);
$("#notas-link").on("click", mostrarNotasFiscais);

atualizarIndicadoresDashboard();
