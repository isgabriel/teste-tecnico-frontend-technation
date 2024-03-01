import { DashContent, mostrarDashboard } from "./dashboard.js";
import { mostrarNotasFiscais } from "./notasFiscais.js";

$("#dashboard-link").on("click", mostrarDashboard);
$("#notas-link").on("click", mostrarNotasFiscais);

DashContent();
