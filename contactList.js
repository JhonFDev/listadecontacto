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

// Función para actualizar un contacto existente en la lista
function actualizarContacto(contactoAActualizar) {
  // Find the item of the contact to update
  let item = contactList.findIndex(
    (contact) => contact.id === contactoAActualizar.id
  );

  // Actualizar el contacto con los nuevos valores
  if (item !== -1) {
    contactList[item].nombre = contactoAActualizar.nombre;
    contactList[item].apellido = contactoAActualizar.apellido;
    contactList[item].location = contactoAActualizar.location;
  }
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
// actualizar contacto con id 1
let updatedContact = {
  id: 1,
  nombre: "porgas",
  apellido: "d dragon",
  location: {
    city: "fortaleza",
    address: "desconocida",
  },
};


console.log(contactNew.nombre);
// Borrar un contacto existente

// Añadir un nuevo contacto
eliminarContacto(2);
aggContact(contactNew);
// Imprimir contactos después de añadir uno nuevo
// imprimirlistadecontactos();
imprimirlistadecontactos();
// Imprimir contactos después de borrar uno
// printContacts();

actualizarContacto(updatedContact);

console.log(contactList);