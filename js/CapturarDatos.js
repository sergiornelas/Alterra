//import { setLogFunction } from "@google-cloud/firestore";

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyBTgN8ndKjnTv2CTNKM21fdbu6OxXh47i8",
    authDomain: "test-4bc6d.firebaseapp.com",
    databaseURL: "https://test-4bc6d.firebaseio.com",
    projectId: "test-4bc6d",
    storageBucket: "test-4bc6d.appspot.com",
    messagingSenderId: "373636233286"
  };
  firebase.initializeApp(config);

// Reference messages colleciton

//Así es como inicializas cualquier base de datos en firebase
//si quieres una colección específica o una referencia específica: .ref
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form (cuando se llena el formulario y se presiona submit)
function submitForm(){
    //Get values
    var nombre = getInputVal('nombre');
    var telefono = getInputVal('telefono');
    var correo = getInputVal('correo');
    var ciudad = getInputVal('ciudad');

    //save message
    saveMessage(nombre, telefono, correo, ciudad);
}

// Function to get get form values
function getInputVal(id){ //obtener los valores a tráves del ID
    return document.getElementById(id).value; // value = just want to get the input value //sin el value obtendremos toda la etiqueta imput <input>, cosa que no nos interesa. 
}

//save message to firebase
function saveMessage(nombre, telefono, correo, ciudad){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({ //inside here we can put in an object with all our data. Se envia todos esos datos en un paquete llamado message ref
        nombre: nombre,
        telefono:telefono,
        correo:correo,
        ciudad:ciudad
    });
}