"use strict";

const resultados = document.querySelector("#resultados");
const resumen = document.querySelector("#resumen");
const logs = window.__exerciseLogs || [];
const id = document.body.dataset.ejercicio;

const ejercicios = {
  ex1: [
    ["Puerta de embarque", "B15"],
    ["Número de vuelo", "AC123"],
    ["Aerolínea", "Air Canada"],
    ["Datos de salida", { airport: "JFK Airport", date: "2023-11-01", time: "08:30 AM" }],
    ["Aeropuerto de llegada", "LAX Airport"],
    ["Peso facturado", 3],
    ["Peso total", 10],
    ["Servicio Wi-Fi", true]
  ].map(([caso, esperado], indice) => ({ caso, esperado, ejecutar: () => logs[indice]?.at(-1) })),
  ex2: [
    { caso: "Puerta", esperado: "C77", ejecutar: () => flightReservation.gate },
    { caso: "Estado del vuelo", esperado: "Delayed", ejecutar: () => flightReservation.flightStatus },
    { caso: "Estado del vuelo mostrado en consola", esperado: "Delayed", ejecutar: () => logs.find(valores => valores.at(-1) === "Delayed")?.at(-1) },
    { caso: "Clase", esperado: "First Class", ejecutar: () => flightReservation.ticketClass },
    { caso: "Hora de salida", esperado: "9:30 AM", ejecutar: () => flightReservation.departure.time },
    { caso: "Comida vegana", esperado: true, ejecutar: () => flightReservation.specialMeals.includes("Vegan") },
    { caso: "Precio con 15 % de descuento", esperado: "$382.50", ejecutar: () => flightReservation.totalPrice }
  ],
  ex3: [{ caso: "Usuario con más habilidades", esperado: "Asab", ejecutar: () => logs.at(-1)?.at(-1)?.name ?? logs.at(-1)?.at(-1) }]
};

const pruebas = ejercicios[id] || [];
let aciertos = 0;
let completadas = 0;
resumen.textContent = `Comprobando ${pruebas.length} pruebas…`;
pruebas.forEach((prueba, indice) => {
  setTimeout(() => {
    try {
      const recibido = prueba.ejecutar();
      const correcto = JSON.stringify(recibido) === JSON.stringify(prueba.esperado);
      if (correcto) aciertos++;
      mostrar(`Prueba ${indice + 1} · ${prueba.caso}: se espera ${formatear(prueba.esperado)}. Se obtuvo ${formatear(recibido)}. ${correcto ? "Correcta." : "Revisa este caso."}`, correcto);
    } catch (error) {
      mostrar(`Prueba ${indice + 1} · ${prueba.caso}: se espera ${formatear(prueba.esperado)}. Error: ${error.message}. Revisa este caso.`, false);
    }
    completadas++;
    resumen.textContent = `${aciertos} de ${completadas} pruebas correctas${completadas < pruebas.length ? ` (${pruebas.length - completadas} pendientes)` : ""}.`;
  }, prueba.retraso || 0);
});

function mostrar(texto, correcto) {
  const item = document.createElement("li");
  item.className = correcto ? "bien" : "mal";
  item.textContent = texto;
  resultados.append(item);
}

function formatear(valor) {
  return valor === undefined ? "undefined" : JSON.stringify(valor);
}
