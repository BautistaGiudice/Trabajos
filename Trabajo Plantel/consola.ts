import { Persona } from './persona'
import { Jugador } from './jugador'
import { DirectorTecnico } from './directortecnico'
import { MedicoDeportivo } from './medicodeportivo'
import { IJugador } from './ijugador'
import * as readline from "readline-sync";
import { plantel } from './plantel'


while (true) {

    console.log('===================================')
    console.log('Menu de Opciones:')
    console.log()
    console.log('1) Mostrar Jugadores')
    console.log('2) Quitar Jugador')
    console.log('3) Agregar Jugador')
    console.log('4) Modificar Jugador')
    console.log('5) Mostrar Plantel')
    console.log('6) Agregar/Modificar Director Tecnico')
    console.log('7) Mostrar Director Tecnico')
    console.log('8) Mostrar Equipo Medico')
    console.log('9) Agregar Miembro al Equipo Medico')
    console.log('10) Eliminar Miembro del Equipo Medico')

    let menuOpciones = parseInt(readline.question('Elija una opcion: '))

    if (menuOpciones == 1) {
        if (plantel.getCantJugadores() === 0) {
            console.log("No hay jugadores para mostrar...")
        } else {
            consoleClean(50)
            plantel.listarJugadores()
        }
        readline.question("Apreta enter para continuar")
        consoleClean(50)
    }

    if (menuOpciones == 2) {
        let preguntarJugador: number;
        while (true) {
            const input = readline.question('Escribe el número del jugador que deseas sacar: ');
            preguntarJugador = parseInt(input);

            if (isNaN(preguntarJugador) || preguntarJugador < 1 || preguntarJugador == undefined) {
                console.log('Solo se admiten números mayores que 0...');
            } else {
                break;
            }
        }
        plantel.quitarJugador(preguntarJugador);
    }

    if (menuOpciones == 3) {
        let nombre: string;
        let edad: number;
        let goles: number;
        let posicion;
        let numero: number;

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
            let nuevoJugador: Jugador = new Jugador(edad, nombre, posicion, numero, goles);

            // Agrega el jugador al plantel
            plantel.agregarJugador(nuevoJugador);

            // Preguntar si se desea agregar otro jugador
            const continuar = readline.question('¿Desea agregar otro jugador? (s/n): ');
            if (continuar.toLowerCase() !== 's') {
                break;
            }
        }
    }

    if (menuOpciones == 4) {
        let numero: number;

        while (true) {
            numero = parseInt(readline.question("Ingrese el numero de la camiseta del jugador para modificarlo: "))
            if (!isNaN(numero) && numero > 0) {
                break;
            } else {
                console.log('Por favor, ingrese un numero valido')
            }
        }

        const jugador = plantel.getJugadores().find(j => j.numero === numero);

        if (!jugador) {
            consoleClean(50)
            console.log("No se ha encontrado ningun jugador con este numero.")
            continue;
        }
        console.log("Ingrese los nuevos datos para modificar.")

        let nuevosDatos: Partial<Jugador> = {};

        let nuevoNombre = readline.question(`Nuevo nombre (${jugador.nombre}): `)

        while (true) {
            if (nuevoNombre && isNaN(Number(nuevoNombre))) {
                nuevosDatos.nombre = nuevoNombre
                console.log("Nombre ingresado correctamente.")
                break;
            }
            else {
                consoleClean(50)
                console.log("Solo se permiten nombres, porfavor ingresa un nombre valido.")
                nuevoNombre = readline.question(`Nuevo nombre (${jugador.nombre}): `)
            }
        }

        let nuevaEdad = readline.question(`Nueva edad (${jugador.edad}): `)

        while (true) {
            if (nuevaEdad && !isNaN(parseInt(nuevaEdad))) {
                nuevosDatos.edad = parseInt(nuevaEdad)
                console.log("Edad ingresada correctamente.")
                break;
            } else {
                consoleClean(50)
                console.log("No ingresaste una edad valida, porfavor ingresa nuevamente.")
                nuevaEdad = readline.question(`Nueva edad (${jugador.edad}): `)
            }
        }

        let nuevosGoles = readline.question(`Nuevos goles (${jugador.obtenerGoles()}):`)

        while (true) {
            if (nuevosGoles && !isNaN(parseInt(nuevosGoles))) {
                jugador.setGoles(parseInt(nuevosGoles));
                console.log("Goles actualizados correctamente.")
                break;
            } else {
                consoleClean(50)
                console.log("Porfavor ingresa una cantidad de goles valida.")
                nuevosGoles = readline.question(`Nuevos goles (${jugador.obtenerGoles()}):`)
            }
        }

        let nuevaPosicion = readline.question(`Nueva posicion (${jugador.posicion}): `)

        while (true) {
            if (nuevaPosicion) {
                nuevosDatos.posicion = nuevaPosicion
                console.log("Se ha agregado correctamente la Posición")
                break;
            } else {
                consoleClean(50)
                console.log("No agregaste un valor valido, ingresa uno nuevamente.")
                nuevaPosicion = readline.question(`Nueva posicion (${jugador.posicion}): `)
            }
        }

        let nuevoNumero = readline.question(`Nuevo numero (${jugador.numero}): `)

        while (true) {
            if (nuevoNumero && !isNaN(parseInt(nuevoNumero))) {
                nuevosDatos.numero = parseInt(nuevoNumero);
                console.log("Se ha agregado correctamente el nuevo numero del jugador.")
                break;
            } else {
                consoleClean(50)
                console.log("Has ingresado un valor invalido, porfavor intenta nuevamente.")
                nuevoNumero = readline.question(`Nuevo numero (${jugador.numero}): `)
            }
        }
        plantel.editarJugador(numero, nuevosDatos)
    }

    if (menuOpciones == 5) {
        consoleClean(50)
        console.log('===================================')
        console.log("          Director Tecnico")
        console.log()
        if (plantel.directorTecnico) {
            console.log(`${plantel.directorTecnico.obtenerDetalles()}`)
        } else {
            console.log("No hay director tecnico.")
        }
        console.log('===================================')
        console.log('             Jugadores')
        console.log('')
        if (plantel.jugadores) {
            plantel.listarJugadores()
        } else {
            console.log("No hay jugadores.")
        }
        console.log('===================================')
        console.log("    Equipo Medico Deportivo")
        console.log()
        if (plantel.medicosDeportivos) {
            plantel.listarMedicos()
        } else {
            console.log("No hay medicos deportivos disponibles")
        }
        console.log('===================================')
        readline.question("Apreta enter para continuar...")
    }

    if (menuOpciones == 6) {
        let opcion;

        while (true) {
            consoleClean(50)
            console.log("¿Deseas Agregar o Eliminar un Director Tecnico?")
            console.log()
            console.log("1) Agregar")
            console.log("2) Eliminar")
            console.log("3) Volver atras")

            let seleccionarOpcion = readline.question("Elige una de las siguientes opciones: ")

            if (seleccionarOpcion && parseInt(seleccionarOpcion) > 0 && parseInt(seleccionarOpcion) < 4) {
                const opcion = parseInt(seleccionarOpcion);

                if (opcion === 1) {
                    if (plantel.directorTecnico) {
                        consoleClean(50);
                        console.log("Ya hay un director técnico");
                        readline.question("Apreta enter para continuar...");
                    } else {
                        let nivelExperiencia = readline.question("Ingrese el nivel de experiencia: ");
                        while (true) {
                            if (nivelExperiencia && isNaN(Number(nivelExperiencia))) {
                                console.log("Has agregado satisfactoriamente el nivel de experiencia.");
                                break;
                            } else {
                                consoleClean(50);
                                console.log("Has agregado un valor no válido, agrega uno correcto por favor.");
                                nivelExperiencia = readline.question("Ingrese el nivel de experiencia: ");
                            }
                        }

                        let edad: number = readline.questionInt("Ingrese la edad: ");
                        while (true) {
                            if (edad && !isNaN(edad) && edad > 17) {
                                console.log("Has agregado satisfactoriamente la edad.");
                                break;
                            } else {
                                consoleClean(50);
                                console.log("Has agregado un valor no válido, agrega uno correcto por favor.");
                                edad = readline.questionInt("Ingrese la edad: ");
                            }
                        }

                        let nombre: string = readline.question("Ingrese el nombre: ");
                        while (true) {
                            if (nombre && isNaN(Number(nombre))) {
                                console.log("Has agregado satisfactoriamente el nombre");
                                break;
                            } else {
                                console.log("Has agregado un valor no válido, agrega uno correcto por favor.");
                                nombre = readline.question("Ingrese el nombre: ");
                            }
                        }
                        let nuevoDirector = new DirectorTecnico(edad, nombre, nivelExperiencia)
                        plantel.agregarDt(nuevoDirector)
                        break;
                    }
                }

                if (opcion === 2) {
                    consoleClean(50)
                    plantel.removerDt()
                    break;
                }

                if (opcion === 3) {
                    break;
                }
            }
        }
    }

    if (menuOpciones == 7) {
        if (plantel.directorTecnico) {
            consoleClean(50)
            console.log(plantel.directorTecnico.obtenerDetalles())
            readline.question("Apreta enter para continuar...")
            consoleClean(50)
        } else {
            consoleClean(50)
            console.log("No hay ningun Director Tecnico para mostrar")
            readline.question("Apreta enter para continuar...")
            consoleClean(50)
        }
    }

    if (menuOpciones === 8) {
        consoleClean(50)
        plantel.listarMedicos()
        readline.question("Apreta enter para continuar...")
    }

    if (menuOpciones === 9) {
        let nombre: string;
        while (true) {
            nombre = readline.question("Ingrese el nombre: ");
            if (nombre && isNaN(Number(nombre))) {
                consoleClean(50);
                console.log("Has agregado satisfactoriamente el nombre.");
                break;
            } else {
                consoleClean(50);
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }

        let edad: number;
        while (true) {
            edad = readline.questionInt("Ingrese la edad: ");
            if (!isNaN(edad) && edad > 17) {
                consoleClean(50);
                console.log("Has agregado satisfactoriamente la edad.");
                break;
            } else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }

        let especialidad: string;
        while (true) {
            especialidad = readline.question("Ingrese la especialidad: ");
            if (especialidad && isNaN(Number(especialidad))) {
                consoleClean(50);
                console.log("Has agregado satisfactoriamente la especialidad.");
                break;
            } else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }

        let id: number;
        while (true) {
            id = readline.questionInt("Ingrese el ID: ");
            if (!isNaN(id) && id > 0) {
                const medicosConId = plantel.medicosDeportivos.filter(medico => medico.id === id);
                if (medicosConId.length === 0) {
                    consoleClean(50);
                    console.log("Has agregado satisfactoriamente el ID.");
                    break;
                } else {
                    console.log("El ID ingresado ya está en uso. Por favor, ingresa otro ID.");
                }
            } else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
            }
        }

        let nuevoMedico = new MedicoDeportivo(edad, nombre, especialidad, id);
        plantel.agregarMedicoDeportivo(nuevoMedico);
    }


    if (menuOpciones == 10) {
        consoleClean(50);
        let id: number = readline.questionInt("Escriba el ID del médico: ");
        let idDisponible: boolean = false;

        while (true) {
            if (id && !isNaN(id) && id > 0) {
                const medicosConId = plantel.medicosDeportivos.filter(medico => medico.id === id);

                if (medicosConId.length > 0) {
                    idDisponible = true;

                    consoleClean(50);
                    console.log("Médico encontrado:");
                    medicosConId.forEach(medico => {
                        console.log(medico.obtenerDetalles());
                    });

                    const confirmar = readline.question("¿Está seguro de que desea eliminar este médico? (s/n): ");
                    if (confirmar.toLowerCase() === 's') {
                        plantel.removerMedicoDeportivo(id);
                        console.log("Se ha removido de forma correcta al Médico Deportivo.");
                    } else {
                        console.log("Eliminación cancelada.");
                    }
                } else {
                    idDisponible = false;
                    consoleClean(50);
                    console.log("No se ha encontrado ninguna ID.");
                }
                readline.question("Apreta enter para continuar...");
                break;
            } else {
                console.log("El valor ingresado no es válido, ingresa otro por favor.");
                id = readline.questionInt("Escriba el ID del médico: ");
            }
        }
    }
}

function consoleClean(index) {
    for (let j = 0; j < index; j++) {
        console.log()
    }
}