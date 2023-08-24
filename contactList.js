// Lista de contactos predefinidos
// let contactList = ["John florez", "Diana gomez", "Sara Camargo"];
let contactList = [
  {
    id: 1,
    nombre: "John",
    apellido: "Florez",
    location: {
      city: "Ocaña",
      address: "mzn 2 - piso 4",
    },
  },
  {
    id: 2,
    nombre: "Karoll",
    apellido: "jalabe",
    location: {
      city: "Ocaña",
      address: "altos de santana - calle 4 # 3-45",
    },
  },
];

// Función para añadir un nuevo contacto a la lista
function aggContact(contactNew) {
  contactList.push(contactNew);
}

// Función para borrar un contacto existente de la lista
function eliminarContacto(contactoAEliminar) {
  let nuevaLista = contactList.filter(
    (contacto) => contacto.id !== contactoAEliminar
  );
  contactList = nuevaLista;
}

// Función para imprimir los contactos presentes en la lista
function imprimirlistadecontactos() {
  console.log(contactList);
}

let contactNew = {
  id: 3,
  nombre: "Nico",
  apellido: "Robin",
  location: {
    city: "Ohara",
    address: "mzn 1 - piso 1",
  },
};

console.log(contactNew.nombre);

eliminarContacto(2);
aggContact(contactNew);

imprimirlistadecontactos();

