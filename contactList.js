// Lista de contactos predefinidos
const contactList = ["John florez", "Diana gomez", "Sara Camargo"];

// Función para añadir un nuevo contacto a la lista
function addContact(contactName) {
  contactList.push(contactName);
}

// Función para borrar un contacto existente de la lista
function deleteContact(contactName) {
  const index = contactList.indexOf(contactName);
  if (index !== -1) {
    contactList.splice(index, 1);
  } else {
    console.log(`${contactName} not found in contacts.`);
  }
}

// Función para imprimir los contactos presentes en la lista
function printContacts() {
  if (contactList.length > 0) {
    console.log("Contact List:");
    contactList.forEach(contact => {
      console.log(contact);
    });
  } else {
    console.log("Contact list is empty.");
  }
}

// Añadir un nuevo contacto
addContact("Alice Johnson");

// Imprimir contactos después de añadir uno nuevo
printContacts();

// Borrar un contacto existente
deleteContact("John florez");

// Imprimir contactos después de borrar uno
printContacts();

