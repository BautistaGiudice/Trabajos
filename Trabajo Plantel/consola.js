"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jugador_1 = require("./jugador");
var directortecnico_1 = require("./directortecnico");
var medicodeportivo_1 = require("./medicodeportivo");
var readline = require("readline-sync");
var plantel_1 = require("./plantel");
var _loop_1 = function () {
    console.log('===================================');
    console.log('Menu de Opciones:');
    console.log();
    console.log('1) Mostrar Jugadores');
    console.log('2) Quitar Jugador');
    console.log('3) Agregar Jugador');
    console.log('4) Modificar Jugador');
    console.log('5) Mostrar Plantel');
    console.log('6) Agregar/Modificar Director Tecnico');
    console.log('7) Mostrar Director Tecnico');
    console.log('8) Mostrar Equipo Medico');
    console.log('9) Agregar Miembro al Equipo Medico');
    console.log('10) Eliminar Miembro del Equipo Medico');
    var menuOpciones = parseInt(readline.question('Elija una opcion: '));
    if (menuOpciones == 1) {
        if (plantel_1.plantel.getCantJugadores() === 0) {
            console.log("No hay jugadores para mostrar...");
        }
        else {
            consoleClean(50);
            plantel_1.plantel.listarJugadores();
        }
        readline.question("Apreta enter para continuar");
        consoleClean(50);
    }
    if (menuOpciones == 2) {
        var preguntarJugador = void 0;
        while (true) {
            var input = readline.question('Escribe el número del jugador que deseas sacar: ');
            preguntarJugador = parseInt(input);
            if (isNaN(preguntarJugador) || preguntarJugador < 1 || preguntarJugador == undefined) {
                console.log('Solo se admiten números mayores que 0...');
            }
            else {
                break;
            }
        }
        plantel_1.plantel.quitarJugador(preguntarJugador);
    }
    if (menuOpciones == 3) {
        var nombre = void 0;
        var edad = void 0;
        var goles = void 0;
        var posicion = void 0;
        var numero = void 0;
        while (true) {
            nombre = readline.question('Ingrese el nombre del jugador: ');
            edad = parseInt(readline.question('Ingrese la edad del jugador: '));
            while (isNaN(edad) || edad <= 0) {
                console.log("Por favor, ingresa una edad vlida (mayor que 0).");
                edad = parseInt(readline.question('Ingrese la edad del jugador: '));
            }
            // Validar goles
            goles = parseInt(readline.question('Ingrese la cantidad de goles: '));
            while (isNaN(goles) || goles < 0) {
                console.log("Por favor, ingresa una cantidad de goles vlida (0 o mas).");
                goles = parseInt(readline.question('Ingrese la cantidad de goles: '));
            }
            // Validar posicion
            posicion = readline.question('Ingrese la posicion del jugador: ');
            while (!posicion) {
                console.log("Por favor, ingresa una posicion valida.");
                posicion = readline.question('Ingrese la posicion del jugador: ');
            }
            // Validar el numero
            numero = parseInt(readline.question('Ingrese el numero de camiseta: '));
            while (isNaN(numero) || numero < 1) {
                console.log("Por favor, ingresa un numero de camiseta válido (mayor que 0).");
                numero = parseInt(readline.question('Ingrese el numero de camiseta: '));
            }
            // Crear una instancia para el jugador
            var nuevoJugador = new jugador_1.Jugador(edad, nombre, posicion, numero, goles);
            // Agrega el jugador al plantel
            plantel_1.plantel.agregarJugador(nuevoJugador);
            // Preguntar si se desea agregar otro jugador
            var continuar = readline.question('¿Desea agregar otro jugador? (s/n): ');
            if (continuar.toLowerCase() !== 's') {
                break;
            }
        }
    }
    if (menuOpciones == 4) {
        var numero_1;
        while (true) {
            numero_1 = parseInt(readline.question("Ingrese el numero de la camiseta del jugador para modificarlo: "));
            if (!isNaN(numero_1) && numero_1 > 0) {
                break;
            }
            else {
                console.log('Por favor, ingrese un numero valido');
            }
        }
        var jugador = plantel_1.plantel.getJugadores().find(function (j) { return j.numero === numero_1; });
        if (!jugador) {
            consoleClean(50);
            console.log("No se ha encontrado ningun jugador con este numero.");
            return "continue";
        }
        console.log("Ingrese los nuevos datos para modificar.");
        var nuevosDatos = {};
        var nuevoNombre = readline.question("Nuevo nombre (".concat(jugador.nombre, "): "));
        while (true) {
            if (nuevoNombre && isNaN(Number(nuevoNombre))) {
                nuevosDatos.nombre = nuevoNombre;
                console.log("Nombre ingresado correctamente.");
                break;
            }
            else {
                consoleClean(50);
                console.log("Solo se permiten nombres, porfavor ingresa un nombre valido.");
                nuevoNombre = readline.question("Nuevo nombre (".concat(jugador.nombre, "): "));
            }
        }
        var nuevaEdad = readline.question("Nueva edad (".concat(jugador.edad, "): "));
        while (true) {
            if (nuevaEdad && !isNaN(parseInt(nuevaEdad))) {
                nuevosDatos.edad = parseInt(nuevaEdad);
                console.log("Edad ingresada correctamente.");
                break;
            }
            else {
                consoleClean(50);
                console.log("No ingresaste una edad valida, porfavor ingresa nuevamente.");
                nuevaEdad = readline.question("Nueva edad (".concat(jugador.edad, "): "));
            }
        }
        var nuevosGoles = readline.question("Nuevos goles (".concat(jugador.obtenerGoles(), "):"));
        while (true) {
            if (nuevosGoles && !isNaN(parseInt(nuevosGoles))) {
                jugador.setGoles(parseInt(nuevosGoles));
                console.log("Goles actualizados correctamente.");
                break;
            }
            else {
                consoleClean(50);
                console.log("Porfavor ingresa una cantidad de goles valida.");
                nuevosGoles = readline.question("Nuevos goles (".concat(jugador.obtenerGoles(), "):"));
            }
        }
        var nuevaPosicion = readline.question("Nueva posicion (".concat(jugador.posicion, "): "));
        while (true) {
            if (nuevaPosicion) {
                nuevosDatos.posicion = nuevaPosicion;
                console.log("Se ha agregado correctamente la Posición");
                break;
            }
            else {
                consoleClean(50);
                console.log("No agregaste un valor valido, ingresa uno nuevamente.");
                nuevaPosicion = readline.question("Nueva posicion (".concat(jugador.posicion, "): "));
            }
        }
        var nuevoNumero = readline.question("Nuevo numero (".concat(jugador.numero, "): "));
        while (true) {
            if (nuevoNumero && !isNaN(parseInt(nuevoNumero))) {
                nuevosDatos.numero = parseInt(nuevoNumero);
                console.log("Se ha agregado correctamente el nuevo numero del jugador.");
                break;
            }
            else {
                consoleClean(50);
                console.log("Has ingresado un valor invalido, porfavor intenta nuevamente.");
                nuevoNumero = readline.question("Nuevo numero (".concat(jugador.numero, "): "));
            }
        }
        plantel_1.plantel.editarJugador(numero_1, nuevosDatos);
    }
    if (menuOpciones == 5) {
        consoleClean(50);
        console.log('===================================');
        console.log("          Director Tecnico");
        console.log();
        if (plantel_1.plantel.directorTecnico) {
            console.log("".concat(plantel_1.plantel.directorTecnico.obtenerDetalles()));
        }
        else {
            console.log("No hay director tecnico.");
        }
        console.log('===================================');
        console.log('             Jugadores');
        console.log('');
        if (plantel_1.plantel.jugadores) {
            plantel_1.plantel.listarJugadores();
        }
        else {
            console.log("No hay jugadores.");
        }
        console.log('===================================');
        console.log("    Equipo Medico Deportivo");
        console.log();
        if (plantel_1.plantel.medicosDeportivos) {
            plantel_1.plantel.listarMedicos();
        }
        else {
            console.log("No hay medicos deportivos disponibles");
        }
        console.log('===================================');
        readline.question("Apreta enter para continuar...");
    }
    if (menuOpciones == 6) {
        var opcion = void 0;
        while (true) {
            consoleClean(50);
            console.log("¿Deseas Agregar o Eliminar un Director Tecnico?");
            console.log();
            console.log("1) Agregar");
            console.log("2) Eliminar");
            console.log("3) Volver atras");
            var seleccionarOpcion = readline.question("Elige una de las siguientes opciones: ");
            if (seleccionarOpcion && parseInt(seleccionarOpcion) > 0 && parseInt(seleccionarOpcion) < 4) {
                var opcion_1 = parseInt(seleccionarOpcion);
                if (opcion_1 === 1) {
                    if (plantel_1.plantel.directorTecnico) {
                        consoleClean(50);
                        console.log("Ya hay un director técnico");
                        readline.question("Apreta enter para continuar...");
                    }
                    else {
                        var nivelExperiencia = readline.question("Ingrese el nivel de experiencia: ");
                        while (true) {
                            if (nivelExperiencia && isNaN(Number(nivelExperiencia))) {
                                console.log("Has agregado satisfactoriamente el nivel de experiencia.");
                                break;
                            }
                            else {
                                consoleClean(50);
                                console.log("Has agregado un valor no válido, agrega uno correcto por favor.");
                                nivelExperiencia = readline.question("Ingrese el nivel de experiencia: ");
                            }
                        }
                        var edad = readline.questionInt("Ingrese la edad: ");
                        while (true) {
                            if (edad && !isNaN(edad) && edad > 17) {
                                console.log("Has agregado satisfactoriamente la edad.");
                                break;
                            }
                            else {
                                consoleClean(50);
                                console.log("Has agregado un valor no válido, agrega uno correcto por favor.");
                                edad = readline.questionInt("Ingrese la edad: ");
                            }
                        }
                        var nombre = readline.question("Ingrese el nombre: ");
                        while (true) {
                            if (nombre && isNaN(Number(nombre))) {
                                console.log("Has agregado satisfactoriamente el nombre");
                                break;
                            }
                            else {
                                console.log("Has agregado un valor no válido, agrega uno correcto por favor.");
                                nombre = readline.question("Ingrese el nombre: ");
                            }
                        }
                        var nuevoDirector = new directortecnico_1.DirectorTecnico(edad, nombre, nivelExperiencia);
                        plantel_1.plantel.agregarDt(nuevoDirector);
                        break;
                    }
                }
                if (opcion_1 === 2) {
                    consoleClean(50);
                    plantel_1.plantel.removerDt();
                    break;
                }
                if (opcion_1 === 3) {
                    break;
                }
            }
        }
    }
    if (menuOpciones == 7) {
        if (plantel_1.plantel.directorTecnico) {
            consoleClean(50);
            console.log(plantel_1.plantel.directorTecnico.obtenerDetalles());
            readline.question("Apreta enter para continuar...");
            consoleClean(50);
        }
        else {
            consoleClean(50);
            console.log("No hay ningun Director Tecnico para mostrar");
            readline.question("Apreta enter para continuar...");
            consoleClean(50);
        }
    }
    if (menuOpciones === 8) {
        consoleClean(50);
        plantel_1.plantel.listarMedicos();
        readline.question("Apreta enter para continuar...");
    }
    if (menuOpciones === 9) {
        var nombre = void 0;
        while (true) {
            nombre = readline.question("Ingrese el nombre: ");
            if (nombre && isNaN(Number(nombre))) {
                consoleClean(50);
                console.log("Has agregado satisfactoriamente el nombre.");
                break;
            }
            else {
                consoleClean(50);
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }
        var edad = void 0;
        while (true) {
            edad = readline.questionInt("Ingrese la edad: ");
            if (!isNaN(edad) && edad > 17) {
                consoleClean(50);
                console.log("Has agregado satisfactoriamente la edad.");
                break;
            }
            else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }
        var especialidad = void 0;
        while (true) {
            especialidad = readline.question("Ingrese la especialidad: ");
            if (especialidad && isNaN(Number(especialidad))) {
                consoleClean(50);
                console.log("Has agregado satisfactoriamente la especialidad.");
                break;
            }
            else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }
        var id_1;
        while (true) {
            id_1 = readline.questionInt("Ingrese el ID: ");
            if (!isNaN(id_1) && id_1 > 0) {
                var medicosConId = plantel_1.plantel.medicosDeportivos.filter(function (medico) { return medico.id === id_1; });
                if (medicosConId.length === 0) {
                    consoleClean(50);
                    console.log("Has agregado satisfactoriamente el ID.");
                    break;
                }
                else {
                    console.log("El ID ingresado ya está en uso. Por favor, ingresa otro ID.");
                }
            }
            else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }
        var nuevoMedico = new medicodeportivo_1.MedicoDeportivo(edad, nombre, especialidad, id_1);
        plantel_1.plantel.agregarMedicoDeportivo(nuevoMedico);
    }
    if (menuOpciones == 10) {
        consoleClean(50);
        var id_2 = readline.questionInt("Escriba el ID del médico: ");
        var idDisponible = false;
        while (true) {
            if (id_2 && !isNaN(id_2) && id_2 > 0) {
                var medicosConId = plantel_1.plantel.medicosDeportivos.filter(function (medico) { return medico.id === id_2; });
                if (medicosConId.length > 0) {
                    idDisponible = true;
                    consoleClean(50);
                    console.log("Médico encontrado:");
                    medicosConId.forEach(function (medico) {
                        console.log(medico.obtenerDetalles());
                    });
                    var confirmar = readline.question("¿Está seguro de que desea eliminar este médico? (s/n): ");
                    if (confirmar.toLowerCase() === 's') {
                        plantel_1.plantel.removerMedicoDeportivo(id_2);
                        console.log("Se ha removido de forma correcta al Médico Deportivo.");
                    }
                    else {
                        console.log("Eliminación cancelada.");
                    }
                }
                else {
                    idDisponible = false;
                    consoleClean(50);
                    console.log("No se ha encontrado ninguna ID.");
                }
                readline.question("Apreta enter para continuar...");
                break;
            }
            else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
                id_2 = readline.questionInt("Escriba el ID del médico: ");
            }
        }
    }
};
while (true) {
    _loop_1();
}
function consoleClean(index) {
    for (var j = 0; j < index; j++) {
        console.log();
    }
}
