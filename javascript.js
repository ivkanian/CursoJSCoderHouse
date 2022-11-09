// import {*} from './functions.js'

const Seleccion = () => {
  while (
    seleccion != 1 &&
    seleccion != 2 &&
    seleccion != 3 &&
    seleccion != 4 &&
    seleccion != 5
  ) {
    seleccion = parseInt(
      prompt(`Elige la seccion que quieres visualizar:
        1)Microprocesador
        2)Placa de video
        3)Disco Rigido
        4)Memoria Ram
        5)Finalizar compra
        Recuerda que una vez elegido el componente,
        No podras escoger otro`)
    );
    Comp(seleccion);
    if (seleccion == 1) {
      Microprocesador();
      seleccion = 0;
    } else if (seleccion == 2) {
      Video();
      seleccion = 0;
    } else if (seleccion == 3) {
      Hdd();
      seleccion = 0;
    } else if (seleccion == 4) {
      Memram();
      seleccion = 0;
    } else if ((seleccion = 5)) {
      Armado(micro, gpu, disco, ram);
    }
  }
  return seleccion;
};

const Microprocesador = () => {
  while (micro != 1 && micro != 2 && micro != 3 && micro != 4) {
    micro = parseInt(
      prompt(`Elige el modelo de micro que quieres comprar:
        1)Ryzen 7600
        2)Intel i7
        3)Ryzen 5600
        4)Volver`)
    );
    Comp(micro);
    if (micro == 4) {
      Seleccion();
    }
  }
  if (micro == 1) micro = " Ryzen 7600";
  else if (micro == 2) micro = " Intel I7";
  else if (micro == 3) micro = " Ryzen 5600";
  return micro;
};

const Video = () => {
  while (gpu != 1 && gpu != 2 && gpu != 3 && gpu != 4) {
    gpu = parseInt(
      prompt(`Elige el modelo de gpu que quieres comprar:
        1)RTX 3080
        2)Radeon 5700xt
        3)RTX 3060
        4)Volver`)
    );
    Comp(gpu);
    if (gpu == 4) {
      Seleccion();
    }
  }
  if (gpu == 1) gpu = " RTX 3080";
  else if (gpu == 2) gpu = " Radeon 5700xt";
  else if (gpu == 3) gpu = " RTX 3060";
  return gpu;
};

const Hdd = () => {
  while (disco != 1 && disco != 2 && disco != 3 && disco != 4) {
    disco = parseInt(
      prompt(`Elige el modelo de Disco Rigido que quieres comprar:
        1)HDD 80 GB
        2)HDD 120 GB
        3)HDD 160 GB
        4)Volver`)
    );
    Comp(disco);
    if (disco == 4) {
      Seleccion();
    }
  }
  if (disco == 1) disco = " HDD 80 GB";
  else if (disco == 2) disco = " HDD 120 GB";
  else if (disco == 3) disco = " HDD 160 GB";
  return disco;
};

const Memram = () => {
  while (ram != 1 && ram != 2 && ram != 3 && ram != 4) {
    ram = parseInt(
      prompt(`Elige el modelo de Memoria Ram que quieres comprar:
        1)8gb
        2)16gb
        3)32gb
        4)Volver`)
    );
    Comp(ram);
    if (ram == 4) {
      Seleccion();
    }
  }
  if (ram == 1) ram = " 8gb";
  else if (ram == 2) ram = " 16gb";
  else if (ram == 3) ram = " 32gb";
  return ram;
};

const Comp = (opcion) => {
  if (
    opcion != 1 &&
    opcion != 2 &&
    opcion != 3 &&
    (opcion != 4) & (opcion != 5)
  ) {
    alert("No eligio una opcion correcta");
  }
};

const Armado = (micro, gpu, disco, ram) => {
  if (micro == undefined) micro = "No se selecciono una opcion";
  if (gpu == undefined) gpu = "No se selecciono una opcion";
  if (disco == undefined) disco = "No se selecciono una opcion";
  if (ram == undefined) ram = "No se selecciono una opcion";
  alert(`La pc que elegiste tiene los siguientes componentes:
            Microprocesador: ${micro}
            Gpu: ${gpu}
            Disco Rigido: ${disco}
            Memoria Ram: ${ram}`);
  console.log(ram);
};
const Inicio = () => {
  do {
    if (respuesta == "si") {
      Seleccion();
      respuesta = "asd";
    } else {
      alert("Gracias por visitar la web");
    }
  } while (respuesta == "si");
};

let seleccion,micro,gpu,disco,ram,total
let respuesta=(prompt("Quieres armar tu nueva PC? Elige Si o No"))
respuesta=respuesta.toLowerCase()
Inicio()


