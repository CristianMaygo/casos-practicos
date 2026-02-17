const timestamp = 1000;
const fecha = new Date(timestamp * 1000);

const opciones = {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

console.log(fecha.toLocaleString('es-ES', opciones));