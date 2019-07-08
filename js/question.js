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
var messagesRef = firebase.database().ref('QuizResults');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form (cuando se llena el formulario y se presiona submit)
function submitForm(e){
    e.preventDefault(); //evita que se el botón submit actualize a la página

    //Get values
    var respuesta1 = getInputVal('respuesta1');
    var respuesta2 = getInputVal('respuesta2');
    var respuesta3 = getInputVal('respuesta3');
    var respuesta4 = getInputVal('respuesta4');
    var respuesta5 = getInputVal('respuesta5');
    var respuesta6 = getInputVal('respuesta6');
    var respuesta7 = getInputVal('respuesta7');
    var respuesta8 = getInputVal('respuesta8');
    var respuesta9 = getInputVal('respuesta9');
    var respuesta10 = getInputVal('respuesta10');
    var respuesta11 = getInputVal('respuesta11');
    var respuesta12 = getInputVal('respuesta12');
    var respuesta13 = getInputVal('respuesta13');
    var TOTAL_SCORE = getInputVal('TOTAL_SCORE');

    //save message
    saveMessage(respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9, respuesta10, respuesta11, respuesta12, respuesta13, TOTAL_SCORE);
}

// Function to get get form values
function getInputVal(id){ //obtener los valores a tráves del ID
    return document.getElementById(id).value; // value = just want to get the input value //sin el value obtendremos toda la etiqueta imput <input>, cosa que no nos interesa. 
}

//save message to firebase
function saveMessage(respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9, respuesta10, respuesta11, respuesta12, respuesta13, TOTAL_SCORE){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({ //inside here we can put in an object with all our data. Se envia todos esos datos en un paquete llamado message ref
        respuesta1:respuesta1,
        respuesta2:respuesta2,
        respuesta3:respuesta3,
        respuesta4:respuesta4,
        respuesta5:respuesta5,
        respuesta6:respuesta6,
        respuesta7:respuesta7,
        respuesta8:respuesta8,
        respuesta9:respuesta9,
        respuesta10:respuesta10,
        respuesta11:respuesta11,
        respuesta12:respuesta12,
        respuesta13:respuesta13,
        TOTAL_SCORE:TOTAL_SCORE
    });
}
////////////////////////////////////////////////////////////////////////
//FUNCIONES DEL CUESTIONARIO, las respuestas que se almacenarán en la base de datos.

function pregunta1_1() {
    document.getElementById("respuesta1").value = "Home Purchase";
}
function pregunta1_2() {
    document.getElementById("respuesta1").value = "Refinance";
}
function pregunta1_3() {
    document.getElementById("respuesta1").value = "Student Loan";
}
function pregunta1_4() {
    document.getElementById("respuesta1").value = "Home Equity Loan";
}
/////////
function pregunta2_1() {
    document.getElementById("respuesta2").value = "Single family";
}
function pregunta2_2() {
    document.getElementById("respuesta2").value = "Multi-family";
}
function pregunta2_3() {
    document.getElementById("respuesta2").value = "Condominium";
}
function pregunta2_4() {
    document.getElementById("respuesta2").value = "Townhouse";
}
/////////
function pregunta3_1() {
    document.getElementById("respuesta3").value = "Poor (579 and below)";
}
function pregunta3_2() {
    document.getElementById("respuesta3").value = "Below Average (580-619)";
}
function pregunta3_3() {
    document.getElementById("respuesta3").value = "Average (620-659)";
}
function pregunta3_4() {
    document.getElementById("respuesta3").value = "Good (660 and Above)";
}
/////////
function pregunta4_1() {
    document.getElementById("respuesta4").value = "Primary Residence";
}
function pregunta4_2() {
    document.getElementById("respuesta4").value = "Rest House";
}
function pregunta4_3() {
    document.getElementById("respuesta4").value = "Secondary Vacation";
}
function pregunta4_4() {
    document.getElementById("respuesta4").value = "Rental/Investment";
}
/////////
function pregunta5_1() {
    document.getElementById("respuesta5").value = "Signed a purchase agreement";
}
function pregunta5_2() {
    document.getElementById("respuesta5").value = "Offer Pending/Found a House";
}
function pregunta5_3() {
    document.getElementById("respuesta5").value = "Buying in 2-3 months";
}
function pregunta5_4() {
    document.getElementById("respuesta5").value = "Researching Options";
}
/////////
window.precio;
function pregunta6_1() {
    document.getElementById("respuesta6").value = "50,000-200,000";
    window.precio='a';
    console.log(window.precio);
}
function pregunta6_2() {
    document.getElementById("respuesta6").value = "200,000-400,000";
    window.precio='b';
}
function pregunta6_3() {
    document.getElementById("respuesta6").value = "400,000-600,000";
    window.precio='c';
}
function pregunta6_4() {
    document.getElementById("respuesta6").value = "600,000+";
    window.precio='d';
}
/////////
function pregunta7_1() {
    document.getElementById("respuesta7").value = "0%";
}
function pregunta7_2() {
    document.getElementById("respuesta7").value = "3-5%";
}
function pregunta7_3() {
    document.getElementById("respuesta7").value = "6-19%";
}
function pregunta7_4() {
    document.getElementById("respuesta7").value = "20% or higher";
}
/////////
function pregunta8_1() {
    document.getElementById("respuesta8").value = "Employed";
}
function pregunta8_2() {
    document.getElementById("respuesta8").value = "Self-Employed";
}
function pregunta8_3() {
    document.getElementById("respuesta8").value = "Retired";
}
function pregunta8_4() {
    document.getElementById("respuesta8").value = "Not-Employed";
}
/////////
function pregunta9_1() {
    document.getElementById("respuesta9").value = "None";
}
function pregunta9_2() {
    document.getElementById("respuesta9").value = "1";
}
function pregunta9_3() {
    document.getElementById("respuesta9").value = "2";
}
function pregunta9_4() {
    document.getElementById("respuesta9").value = "2+";
}
/////////
function pregunta10_1() {
    document.getElementById("respuesta10").value = "Yes";
}
function pregunta10_2() {
    document.getElementById("respuesta10").value = "No";
}
function pregunta10_3() {
    document.getElementById("respuesta10").value = "Just once";
}
function pregunta10_4() {
    document.getElementById("respuesta10").value = "Did not process";
}
/////////
function pregunta11_1() {
    document.getElementById("respuesta11").value = "Yes";
}
function pregunta11_2() {
    document.getElementById("respuesta11").value = "No";
}
function pregunta11_3() {
    document.getElementById("respuesta11").value = "Just once";
}
function pregunta11_4() {
    document.getElementById("respuesta11").value = "Did not process";
}
/////////
function pregunta12_1() {
    document.getElementById("respuesta12").value = "Yes";
}
function pregunta12_2() {
    document.getElementById("respuesta12").value = "No";
}
function pregunta12_3() {
    document.getElementById("respuesta12").value = "Paysheet";
}
function pregunta12_4() {
    document.getElementById("respuesta12").value = "Email";
}
/////////
function pregunta13_1() {
    document.getElementById("respuesta13").value = "Yes";
}
function pregunta13_2() {
    document.getElementById("respuesta13").value = "No";
}
function pregunta13_3() {
    document.getElementById("respuesta13").value = "Just Selected";
}
function pregunta13_4() {
    document.getElementById("respuesta13").value = "Army support";
}

function puntajeTotalValor() {
    window.variable = window.puntaje1 + window.puntaje2 + window.puntaje3 + window.puntaje4 + window.puntaje5 + window.puntaje6 + window.puntaje7 + window.puntaje8 + window.puntaje9 + window.puntaje10 + window.puntaje11 + window.puntaje12 + window.puntaje13;
    document.getElementById("TOTAL_SCORE").value = window.variable;
}

//Cambio de color de botones al click
    document.querySelectorAll('.P1R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P1R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P1R2");
        var blanco2 = document.querySelectorAll(".P1R3");
        var blanco3 = document.querySelectorAll(".P1R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";
      })
    });

    document.querySelectorAll('.P1R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P1R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P1R1");
        var blanco2 = document.querySelectorAll(".P1R3");
        var blanco3 = document.querySelectorAll(".P1R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P1R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P1R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P1R1");
        var blanco2 = document.querySelectorAll(".P1R2");
        var blanco3 = document.querySelectorAll(".P1R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P1R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P1R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P1R1");
        var blanco2 = document.querySelectorAll(".P1R2");
        var blanco3 = document.querySelectorAll(".P1R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P2R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P2R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P2R2");
        var blanco2 = document.querySelectorAll(".P2R3");
        var blanco3 = document.querySelectorAll(".P2R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P2R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P2R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P2R1");
        var blanco2 = document.querySelectorAll(".P2R3");
        var blanco3 = document.querySelectorAll(".P2R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P2R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P2R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P2R1");
        var blanco2 = document.querySelectorAll(".P2R2");
        var blanco3 = document.querySelectorAll(".P2R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P2R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P2R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P2R1");
        var blanco2 = document.querySelectorAll(".P2R2");
        var blanco3 = document.querySelectorAll(".P2R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P3R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P3R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P3R2");
        var blanco2 = document.querySelectorAll(".P3R3");
        var blanco3 = document.querySelectorAll(".P3R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P3R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P3R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P3R1");
        var blanco2 = document.querySelectorAll(".P3R3");
        var blanco3 = document.querySelectorAll(".P3R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P3R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P3R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P3R1");
        var blanco2 = document.querySelectorAll(".P3R2");
        var blanco3 = document.querySelectorAll(".P3R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P3R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P3R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P3R1");
        var blanco2 = document.querySelectorAll(".P3R2");
        var blanco3 = document.querySelectorAll(".P3R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P4R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P4R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P4R2");
        var blanco2 = document.querySelectorAll(".P4R3");
        var blanco3 = document.querySelectorAll(".P4R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P4R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P4R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P4R1");
        var blanco2 = document.querySelectorAll(".P4R3");
        var blanco3 = document.querySelectorAll(".P4R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P4R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P4R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P4R1");
        var blanco2 = document.querySelectorAll(".P4R2");
        var blanco3 = document.querySelectorAll(".P4R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P4R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P4R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P4R1");
        var blanco2 = document.querySelectorAll(".P4R2");
        var blanco3 = document.querySelectorAll(".P4R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P5R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P5R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P5R2");
        var blanco2 = document.querySelectorAll(".P5R3");
        var blanco3 = document.querySelectorAll(".P5R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P5R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P5R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P5R1");
        var blanco2 = document.querySelectorAll(".P5R3");
        var blanco3 = document.querySelectorAll(".P5R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P5R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P5R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P5R1");
        var blanco2 = document.querySelectorAll(".P5R2");
        var blanco3 = document.querySelectorAll(".P5R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P5R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P5R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P5R1");
        var blanco2 = document.querySelectorAll(".P5R2");
        var blanco3 = document.querySelectorAll(".P5R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P6R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P6R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P6R2");
        var blanco2 = document.querySelectorAll(".P6R3");
        var blanco3 = document.querySelectorAll(".P6R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P6R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P6R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P6R1");
        var blanco2 = document.querySelectorAll(".P6R3");
        var blanco3 = document.querySelectorAll(".P6R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P6R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P6R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P6R1");
        var blanco2 = document.querySelectorAll(".P6R2");
        var blanco3 = document.querySelectorAll(".P6R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P6R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P6R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P6R1");
        var blanco2 = document.querySelectorAll(".P6R2");
        var blanco3 = document.querySelectorAll(".P6R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P7R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P7R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P7R2");
        var blanco2 = document.querySelectorAll(".P7R3");
        var blanco3 = document.querySelectorAll(".P7R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P7R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P7R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P7R1");
        var blanco2 = document.querySelectorAll(".P7R3");
        var blanco3 = document.querySelectorAll(".P7R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P7R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P7R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P7R1");
        var blanco2 = document.querySelectorAll(".P7R2");
        var blanco3 = document.querySelectorAll(".P7R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P7R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P7R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P7R1");
        var blanco2 = document.querySelectorAll(".P7R2");
        var blanco3 = document.querySelectorAll(".P7R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P8R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P8R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P8R2");
        var blanco2 = document.querySelectorAll(".P8R3");
        var blanco3 = document.querySelectorAll(".P8R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P8R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P8R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P8R1");
        var blanco2 = document.querySelectorAll(".P8R3");
        var blanco3 = document.querySelectorAll(".P8R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P8R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P8R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P8R1");
        var blanco2 = document.querySelectorAll(".P8R2");
        var blanco3 = document.querySelectorAll(".P8R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P8R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P8R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P8R1");
        var blanco2 = document.querySelectorAll(".P8R2");
        var blanco3 = document.querySelectorAll(".P8R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P9R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P9R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P9R2");
        var blanco2 = document.querySelectorAll(".P9R3");
        var blanco3 = document.querySelectorAll(".P9R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P9R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P9R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P9R1");
        var blanco2 = document.querySelectorAll(".P9R3");
        var blanco3 = document.querySelectorAll(".P9R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P9R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P9R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P9R1");
        var blanco2 = document.querySelectorAll(".P9R2");
        var blanco3 = document.querySelectorAll(".P9R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P9R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P9R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P9R1");
        var blanco2 = document.querySelectorAll(".P9R2");
        var blanco3 = document.querySelectorAll(".P9R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P10R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P10R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P10R2");
        var blanco2 = document.querySelectorAll(".P10R3");
        var blanco3 = document.querySelectorAll(".P10R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P10R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P10R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P10R1");
        var blanco2 = document.querySelectorAll(".P10R3");
        var blanco3 = document.querySelectorAll(".P10R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P10R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P10R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P10R1");
        var blanco2 = document.querySelectorAll(".P10R2");
        var blanco3 = document.querySelectorAll(".P10R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P10R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P10R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P10R1");
        var blanco2 = document.querySelectorAll(".P10R2");
        var blanco3 = document.querySelectorAll(".P10R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P11R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P11R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P11R2");
        var blanco2 = document.querySelectorAll(".P11R3");
        var blanco3 = document.querySelectorAll(".P11R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P11R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P11R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P11R1");
        var blanco2 = document.querySelectorAll(".P11R3");
        var blanco3 = document.querySelectorAll(".P11R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P11R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P11R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P11R1");
        var blanco2 = document.querySelectorAll(".P11R2");
        var blanco3 = document.querySelectorAll(".P11R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P11R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P11R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P11R1");
        var blanco2 = document.querySelectorAll(".P11R2");
        var blanco3 = document.querySelectorAll(".P11R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P12R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P12R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P12R2");
        var blanco2 = document.querySelectorAll(".P12R3");
        var blanco3 = document.querySelectorAll(".P12R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P12R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P12R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P12R1");
        var blanco2 = document.querySelectorAll(".P12R3");
        var blanco3 = document.querySelectorAll(".P12R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P12R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P12R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P12R1");
        var blanco2 = document.querySelectorAll(".P12R2");
        var blanco3 = document.querySelectorAll(".P12R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P12R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P12R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P12R1");
        var blanco2 = document.querySelectorAll(".P12R2");
        var blanco3 = document.querySelectorAll(".P12R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    ////////////
    document.querySelectorAll('.P13R1').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P13R1");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P13R2");
        var blanco2 = document.querySelectorAll(".P13R3");
        var blanco3 = document.querySelectorAll(".P13R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P13R2').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P13R2");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P13R1");
        var blanco2 = document.querySelectorAll(".P13R3");
        var blanco3 = document.querySelectorAll(".P13R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P13R3').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P13R3");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P13R1");
        var blanco2 = document.querySelectorAll(".P13R2");
        var blanco3 = document.querySelectorAll(".P13R4");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

    document.querySelectorAll('.P13R4').forEach(function(e) {
      e.addEventListener('click', function() {
        var azul = document.querySelectorAll(".P13R4");
        azul[0].style.backgroundColor = "#3379A1";
        
        var blanco1 = document.querySelectorAll(".P13R1");
        var blanco2 = document.querySelectorAll(".P13R2");
        var blanco3 = document.querySelectorAll(".P13R3");
        
        blanco1[0].style.backgroundColor = "#D7D7D7";
        blanco2[0].style.backgroundColor = "#D7D7D7";
        blanco3[0].style.backgroundColor = "#D7D7D7";      
      })
    });

//SCORE
window.puntaje1;
window.puntaje2;
window.puntaje3;
window.puntaje4;
window.puntaje5;
window.puntaje6;
window.puntaje7;
window.puntaje8;
window.puntaje9;
window.puntaje10;
window.puntaje11;
window.puntaje12;
window.puntaje13;

//BANDERA (TODAS LAS PREGUNTAS HAYAN SIDO CONTESTADAS)
window.bandera1 = false;
window.bandera2 = false;
window.bandera3 = false;
window.bandera4 = false;
window.bandera5 = false;
window.bandera6 = false;
window.bandera7 = false;
window.bandera8 = false;
window.bandera9 = false;
window.bandera10 = false;
window.bandera11 = false;
window.bandera12 = false;
window.bandera13 = false;

//var PrimeraRespuesta1 = document.querySelectorAll('.P1R1');
var PrimeraRespuesta1 = document.getElementById("P1R1");
var SegundaRespuesta1 = document.getElementById("P1R2");
var TercerRespuesta1 = document.getElementById("P1R3");
var CuartaRespuesta1 = document.getElementById("P1R4");

PrimeraRespuesta1.onclick = function P1R1(){
    window.puntaje1 = 4;
    console.log("Q1: " + window.puntaje1);
    window.bandera1 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta1.onclick = function P1R2(){
    window.puntaje1 = 3;
    console.log("Q1: " + window.puntaje1);
    window.bandera1 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
TercerRespuesta1.onclick = function P1R3(){
    window.puntaje1 = 2;
    console.log("Q1: " + window.puntaje1);
    window.bandera1 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
CuartaRespuesta1.onclick = function P1R4(){
    window.puntaje1 = 1;
    console.log("Q1: " + window.puntaje1);
    window.bandera1 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta2 = document.getElementById('P2R1');
var SegundaRespuesta2 = document.getElementById('P2R2');
var TercerRespuesta2 = document.getElementById('P2R3');
var CuartaRespuesta2 = document.getElementById('P2R4');

PrimeraRespuesta2.onclick = function P2R1(){
    window.puntaje2 = 4;
    console.log("Q2: " + window.puntaje2);
    window.bandera2 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta2.onclick = function P2R2(){
    window.puntaje2 = 3;
    console.log("Q2: " + window.puntaje2);
    window.bandera2 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta2.onclick = function P2R3(){
    window.puntaje2 = 2;
    console.log("Q2: " + window.puntaje2);
    window.bandera2 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta2.onclick = function P2R4(){
    window.puntaje2 = 1;
    console.log("Q2: " + window.puntaje2);
    window.bandera2 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta3 = document.getElementById('P3R1');
var SegundaRespuesta3 = document.getElementById('P3R2');
var TercerRespuesta3 = document.getElementById('P3R3');
var CuartaRespuesta3 = document.getElementById('P3R4');

PrimeraRespuesta3.onclick = function P3R1(){
    window.puntaje3 = 1;
    console.log("Q3: " + window.puntaje3);
    window.bandera3 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta3.onclick = function P3R2(){
    window.puntaje3 = 2;
    console.log("Q3: " + window.puntaje3);
    window.bandera3 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta3.onclick = function P3R3(){
    window.puntaje3 = 3;
    console.log("Q3: " + window.puntaje3);
    window.bandera3 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta3.onclick = function P3R4(){
    window.puntaje3 = 4;
    console.log("Q3: " + window.puntaje3);
    window.bandera3 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta4 = document.getElementById('P4R1');
var SegundaRespuesta4 = document.getElementById('P4R2');
var TercerRespuesta4 = document.getElementById('P4R3');
var CuartaRespuesta4 = document.getElementById('P4R4');

PrimeraRespuesta4.onclick = function P4R1(){
    window.puntaje4 = 4;
    console.log("Q4: " + window.puntaje4);
    window.bandera4 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta4.onclick = function P4R2(){
    window.puntaje4 = 3;
    console.log("Q4: " + window.puntaje4);
    window.bandera4 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta4.onclick = function P4R3(){
    window.puntaje4 = 2;
    console.log("Q4: " + window.puntaje4);
    window.bandera4 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta4.onclick = function P4R4(){
    window.puntaje4 = 1;
    console.log("Q4: " + window.puntaje4);
    window.bandera4 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta5 = document.getElementById('P5R1');
var SegundaRespuesta5 = document.getElementById('P5R2');
var TercerRespuesta5 = document.getElementById('P5R3');
var CuartaRespuesta5 = document.getElementById('P5R4');

PrimeraRespuesta5.onclick = function P5R1(){
    window.puntaje5 = 1;
    console.log("Q5: " + window.puntaje5);
    window.bandera5 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta5.onclick = function P5R2(){
    window.puntaje5 = 3;
    console.log("Q5: " + window.puntaje5);
    window.bandera5 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta5.onclick = function P5R3(){
    window.puntaje5 = 2;
    console.log("Q5: " + window.puntaje5);
    window.bandera5 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta5.onclick = function P5R4(){
    window.puntaje5 = 4;
    console.log("Q5: " + window.puntaje5);
    window.bandera5 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta6 = document.getElementById('P6R1');
var SegundaRespuesta6 = document.getElementById('P6R2');
var TercerRespuesta6 = document.getElementById('P6R3');
var CuartaRespuesta6 = document.getElementById('P6R4');

PrimeraRespuesta6.onclick = function P6R1(){
    window.puntaje6 = 1;
    console.log("Q6: " + window.puntaje6);
    window.bandera6 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta6.onclick = function P6R2(){
    window.puntaje6 = 2;
    console.log("Q6: " + window.puntaje6);
    window.bandera6 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta6.onclick = function P6R3(){
    window.puntaje6 = 3;
    console.log("Q6: " + window.puntaje6);
    window.bandera6 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
CuartaRespuesta6.onclick = function P6R4(){
    window.puntaje6 = 4;
    console.log("Q6: " + window.puntaje6);
    window.bandera6 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta7 = document.getElementById('P7R1');
var SegundaRespuesta7 = document.getElementById('P7R2');
var TercerRespuesta7 = document.getElementById('P7R3');
var CuartaRespuesta7 = document.getElementById('P7R4');

PrimeraRespuesta7.onclick = function P7R1(){
    window.puntaje7 = 1;
    console.log("Q7: " + window.puntaje7);
    window.bandera7 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta7.onclick = function P7R2(){
    window.puntaje7 = 2;
    console.log("Q7: " + window.puntaje7);
    window.bandera7 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta7.onclick = function P7R3(){
    window.puntaje7 = 3;
    console.log("Q7: " + window.puntaje7);
    window.bandera7 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta7.onclick = function P7R4(){
    window.puntaje7 = 4;
    console.log("Q7: " + window.puntaje7);
    window.bandera7 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta8 = document.getElementById('P8R1');
var SegundaRespuesta8 = document.getElementById('P8R2');
var TercerRespuesta8 = document.getElementById('P8R3');
var CuartaRespuesta8 = document.getElementById('P8R4');

PrimeraRespuesta8.onclick = function P8R1(){
    window.puntaje8 = 4;
    console.log("Q8: " + window.puntaje8);
    window.bandera8 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta8.onclick = function P8R2(){
    window.puntaje8 = 3;
    console.log("Q8: " + window.puntaje8);
    window.bandera8 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta8.onclick = function P8R3(){
    window.puntaje8 = 2;
    console.log("Q8: " + window.puntaje8);
    window.bandera8 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta8.onclick = function P8R4(){
    window.puntaje8 = 1;
    console.log("Q8: " + window.puntaje8);
    window.bandera8 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta9 = document.getElementById('P9R1');
var SegundaRespuesta9 = document.getElementById('P9R2');
var TercerRespuesta9 = document.getElementById('P9R3');
var CuartaRespuesta9 = document.getElementById('P9R4');

PrimeraRespuesta9.onclick = function P9R1(){
    window.puntaje9 = 4;
    console.log("Q9: " + window.puntaje9);
    window.bandera9 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta9.onclick = function P9R2(){
    window.puntaje9 = 3;
    console.log("Q9: " + window.puntaje9);
    window.bandera9 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta9.onclick = function P9R3(){
    window.puntaje9 = 2;
    console.log("Q9: " + window.puntaje9);
    window.bandera9 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta9.onclick = function P9R4(){
    window.puntaje9 = 1;
    console.log("Q9: " + window.puntaje9);
    window.bandera9 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta10 = document.getElementById('P10R1');
var SegundaRespuesta10 = document.getElementById('P10R2');
var TercerRespuesta10 = document.getElementById('P10R3');
var CuartaRespuesta10 = document.getElementById('P10R4');

PrimeraRespuesta10.onclick = function P10R1(){
    window.puntaje10 = 1;
    console.log("Q10: " + window.puntaje10);
    window.bandera10 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta10.onclick = function P10R2(){
    window.puntaje10 = 4;
    console.log("Q10: " + window.puntaje10);
    window.bandera10 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta10.onclick = function P10R3(){
    window.puntaje10 = 2;
    console.log("Q10: " + window.puntaje10);
    window.bandera10 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta10.onclick = function P10R4(){
    window.puntaje10 = 3;
    console.log("Q10: " + window.puntaje10);
    window.bandera10 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta11 = document.getElementById('P11R1');
var SegundaRespuesta11 = document.getElementById('P11R2');
var TercerRespuesta11 = document.getElementById('P11R3');
var CuartaRespuesta11 = document.getElementById('P11R4');

PrimeraRespuesta11.onclick = function P11R1(){
    window.puntaje11 = 1;
    console.log("Q11: " + window.puntaje11);
    window.bandera11 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta11.onclick = function P11R2(){
    window.puntaje11 = 4;
    console.log("Q11: " + window.puntaje11);
    window.bandera11 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta11.onclick = function P11R3(){
    window.puntaje11 = 2;
    console.log("Q11: " + window.puntaje11);
    window.bandera11 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta11.onclick = function P11R4(){
    window.puntaje11 = 3;
    console.log("Q11: " + window.puntaje11);
    window.bandera11 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta12 = document.getElementById('P12R1');
var SegundaRespuesta12 = document.getElementById('P12R2');
var TercerRespuesta12 = document.getElementById('P12R3');
var CuartaRespuesta12 = document.getElementById('P12R4');

PrimeraRespuesta12.onclick = function P12R1(){
    window.puntaje12 = 4;
    console.log("Q12: " + window.puntaje12);
    window.bandera12 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta12.onclick = function P12R2(){
    window.puntaje12 = 1;
    console.log("Q12: " + window.puntaje12);
    window.bandera12 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }  
}
TercerRespuesta12.onclick = function P12R3(){
    window.puntaje12 = 3;
    console.log("Q12: " + window.puntaje12);
    window.bandera12 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    } 
}
CuartaRespuesta12.onclick = function P12R4(){
    window.puntaje12 = 2;
    console.log("Q12: " + window.puntaje12);
    window.bandera12 = true;
    //Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

///////////////////////
var PrimeraRespuesta13 = document.getElementById('P13R1');
var SegundaRespuesta13 = document.getElementById('P13R2');
var TercerRespuesta13 = document.getElementById('P13R3');
var CuartaRespuesta13 = document.getElementById('P13R4');

PrimeraRespuesta13.onclick = function P13R1(){
    window.puntaje13 = 1;
    console.log("Q13: " + window.puntaje13);
    window.bandera13 = true;//Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
SegundaRespuesta13.onclick = function P13R2(){
    window.puntaje13 = 4;
    console.log("Q13: " + window.puntaje13);
    window.bandera13 = true;//Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
TercerRespuesta13.onclick = function P13R3(){
    window.puntaje13 = 3;
    console.log("Q13: " + window.puntaje13);
    window.bandera13 = true;//Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}
CuartaRespuesta13.onclick = function P13R4(){
    window.puntaje13 = 2;
    console.log("Q13: " + window.puntaje13);
    window.bandera13 = true;//Verificar que todas esten contestadas
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true && window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
    document.getElementById("TOTAL_SCORE").disabled = false;
    console.log("allAnswered");
    }
}

var Formula = document.getElementById('puntaje'); //id puntaje es del span

//Puntaje total
window.variable;
Formula.onclick = function puntajeTotal(){
    window.variable = window.puntaje1 + window.puntaje2 + window.puntaje3 + window.puntaje4 + window.puntaje5 + window.puntaje6 + window.puntaje7 + window.puntaje8 + window.puntaje9 + window.puntaje10 + window.puntaje11 + window.puntaje12 + window.puntaje13;
    console.log("Total score: " + variable);
}

//Todas las respuestas contestadas
var todasRespuestas = document.getElementById('puntaje2');

//Obtener la ciudad del usuario en index.html
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var sn = getParameterByName('selects');
console.log(sn);

//Enviar mensaje del loan officer
//Dirigir a las páginas de publicidad
todasRespuestas.onclick = function banderas(){
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true
      && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true
      && window.bandera9 == true && window.bandera10 == true&& window.bandera11 == true && window.bandera12 == true
      && window.bandera13 == true){
        console.log("success");
            setTimeout(function(){
                alert('A Loan Officer will contact you soon');
                if(window.precio == "a" && sn=="Anaheim"){
                window.open("https://www.century21.com/for-sale-homes/Anaheim-CA-640c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                if(window.precio == "b" && sn=="Anaheim"){
                  window.open("https://www.century21.com/for-sale-homes/Anaheim-CA-640c/minprice_200001/maxprice_400000/view_map", '_parent');
                }
                if(window.precio == "c" && sn=="Anaheim"){
                  window.open("https://www.century21.com/for-sale-homes/Anaheim-CA-640c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                if(window.precio == "d" && sn=="Anaheim"){
                  window.open("https://www.century21.com/for-sale-homes/Anaheim-CA-640c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Bakersfield"){
                  window.open("https://www.century21.com/for-sale-homes/Bakersfield-CA-868c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Bakersfield"){
                    window.open("https://www.century21.com/for-sale-homes/Bakersfield-CA-868c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Bakersfield"){
                    window.open("https://www.century21.com/for-sale-homes/Bakersfield-CA-868c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Bakersfield"){
                    window.open("https://www.century21.com/for-sale-homes/Bakersfield-CA-868c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Chula Vista"){
                  window.open("https://www.century21.com/for-sale-homes/Chula-Vista-CA-1978c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Chula Vista"){
                  window.open("https://www.century21.com/for-sale-homes/Chula-Vista-CA-1978c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Chula Vista"){
                  window.open("https://www.century21.com/for-sale-homes/Chula-Vista-CA-1978c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Chula Vista"){
                  window.open("https://www.century21.com/for-sale-homes/Chula-Vista-CA-1978c/minprice_600001/maxprice_800000/view_map", '_parent');
                }
                
                /******************************************** */
                if(window.precio == "a" && sn=="Fontana"){
                  window.open("https://www.century21.com/for-sale-homes/Fontana-CA-3244c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Fontana"){
                  window.open("https://www.century21.com/for-sale-homes/Fontana-CA-3244c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Fontana"){
                  window.open("https://www.century21.com/for-sale-homes/Fontana-CA-3244c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Fontana"){
                  window.open("https://www.century21.com/for-sale-homes/Fontana-CA-3244c/minprice_600001/maxprice_800000/view_map", '_parent');
                }
                
                /******************************************** */
                if(window.precio == "a" && sn=="Fremont"){
                  window.open("https://www.century21.com/for-sale-homes/Fremont-CA-3377c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Fremont"){
                  window.open("https://www.century21.com/for-sale-homes/Fremont-CA-3377c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Fremont"){
                  window.open("https://www.century21.com/for-sale-homes/Fremont-CA-3377c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Fremont"){
                  window.open("https://www.century21.com/for-sale-homes/Fremont-CA-3377c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Fresno"){
                  window.open("https://www.century21.com/for-sale-homes/Fresno-CA-3387c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Fresno"){
                  window.open("https://www.century21.com/for-sale-homes/Fresno-CA-3387c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Fresno"){
                  window.open("https://www.century21.com/for-sale-homes/Fresno-CA-3387c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Fresno"){
                  window.open("https://www.century21.com/for-sale-homes/Fresno-CA-3387c/minprice_600001/maxprice_800000/view_map", '_parent');
                }
                
                /******************************************** */
                if(window.precio == "a" && sn=="Irvine"){
                  window.open("https://www.century21.com/for-sale-homes/Irvine-CA-4358c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Irvine"){
                  window.open("https://www.century21.com/for-sale-homes/Irvine-CA-4358c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Irvine"){
                  window.open("https://www.century21.com/for-sale-homes/Irvine-CA-4358c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Irvine"){
                  window.open("https://www.century21.com/for-sale-homes/Irvine-CA-4358c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Long Beach"){
                  window.open("https://www.century21.com/for-sale-homes/Long-Beach-CA-5173c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Long Beach"){
                  window.open("https://www.century21.com/for-sale-homes/Long-Beach-CA-5173c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Long Beach"){
                  window.open("https://www.century21.com/for-sale-homes/Long-Beach-CA-5173c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Long Beach"){
                  window.open("https://www.century21.com/for-sale-homes/Long-Beach-CA-5173c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Los Angeles"){
                  window.open("https://www.century21.com/for-sale-homes/Los-Angeles-CA-5204c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Los Angeles"){
                  window.open("https://www.century21.com/for-sale-homes/Los-Angeles-CA-5204c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Los Angeles"){
                  window.open("https://www.century21.com/for-sale-homes/Los-Angeles-CA-5204c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Los Angeles"){
                  window.open("https://www.century21.com/for-sale-homes/Los-Angeles-CA-5204c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Modesto"){
                  window.open("https://www.century21.com/for-sale-homes/Modesto-CA-5789c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Modesto"){
                  window.open("https://www.century21.com/for-sale-homes/Modesto-CA-5789c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Modesto"){
                  window.open("https://www.century21.com/for-sale-homes/Modesto-CA-5789c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Modesto"){
                  window.open("https://www.century21.com/for-sale-homes/Modesto-CA-5789c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Oakland"){
                  window.open("https://www.century21.com/for-sale-homes/Oakland-CA-6449c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Oakland"){
                  window.open("https://www.century21.com/for-sale-homes/Oakland-CA-6449c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Oakland"){
                  window.open("https://www.century21.com/for-sale-homes/Oakland-CA-6449c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Oakland"){
                  window.open("https://www.century21.com/for-sale-homes/Oakland-CA-6449c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Oxnard"){
                  window.open("https://www.century21.com/for-sale-homes/Oxnard-CA-6649c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Oxnard"){
                  window.open("https://www.century21.com/for-sale-homes/Oxnard-CA-6649c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Oxnard"){
                  window.open("https://www.century21.com/for-sale-homes/Oxnard-CA-6649c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Oxnard"){
                  window.open("https://www.century21.com/for-sale-homes/Oxnard-CA-6649c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Riverside"){
                  window.open("https://www.century21.com/for-sale-homes/Riverside-CA-7519c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Riverside"){
                  window.open("https://www.century21.com/for-sale-homes/Riverside-CA-7519c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Riverside"){
                  window.open("https://www.century21.com/for-sale-homes/Riverside-CA-7519c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Riverside"){
                  window.open("https://www.century21.com/for-sale-homes/Riverside-CA-7519c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Sacramento"){
                  window.open("https://www.century21.com/for-sale-homes/Sacramento-CA-301c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Sacramento"){
                  window.open("https://www.century21.com/for-sale-homes/Sacramento-CA-301c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Sacramento"){
                  window.open("https://www.century21.com/for-sale-homes/Sacramento-CA-301c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Sacramento"){
                  window.open("https://www.century21.com/for-sale-homes/Sacramento-CA-301c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="San Bernardino"){
                  window.open("https://www.century21.com/for-sale-homes/San-Bernardino-CA-7922c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="San Bernardino"){
                  window.open("https://www.century21.com/for-sale-homes/San-Bernardino-CA-7922c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="San Bernardino"){
                  window.open("https://www.century21.com/for-sale-homes/San-Bernardino-CA-7922c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="San Bernardino"){
                  window.open("https://www.century21.com/for-sale-homes/San-Bernardino-CA-7922c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="San Diego"){
                  window.open("https://www.century21.com/for-sale-homes/San-Diego-CA-246c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="San Diego"){
                  window.open("https://www.century21.com/for-sale-homes/San-Diego-CA-246c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="San Diego"){
                  window.open("https://www.century21.com/for-sale-homes/San-Diego-CA-246c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="San Diego"){
                  window.open("https://www.century21.com/for-sale-homes/San-Diego-CA-246c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="San Francisco"){
                  window.open("https://www.century21.com/for-sale-homes/San-Francisco-CA-415c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="San Francisco"){
                  window.open("https://www.century21.com/for-sale-homes/San-Francisco-CA-415c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="San Francisco"){
                  window.open("https://www.century21.com/for-sale-homes/San-Francisco-CA-415c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="San Francisco"){
                  window.open("https://www.century21.com/for-sale-homes/San-Francisco-CA-415c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="San Jose"){
                  window.open("https://www.century21.com/for-sale-homes/San-Jose-CA-185c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="San Jose"){
                  window.open("https://www.century21.com/for-sale-homes/San-Jose-CA-185c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="San Jose"){
                  window.open("https://www.century21.com/for-sale-homes/San-Jose-CA-185c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="San Jose"){
                  window.open("https://www.century21.com/for-sale-homes/San-Jose-CA-185c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Santa Ana"){
                  window.open("https://www.century21.com/for-sale-homes/Santa-Ana-CA-7997c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Santa Ana"){
                  window.open("https://www.century21.com/for-sale-homes/Santa-Ana-CA-7997c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Santa Ana"){
                  window.open("https://www.century21.com/for-sale-homes/Santa-Ana-CA-7997c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Santa Ana"){
                  window.open("https://www.century21.com/for-sale-homes/Santa-Ana-CA-7997c/minprice_600001/maxprice_800000/view_map", '_parent');
                }

                /******************************************** */
                if(window.precio == "a" && sn=="Stockton"){
                  window.open("https://www.century21.com/for-sale-homes/Stockton-CA-8643c/minprice_50000/maxprice_200000/view_map", '_parent');
                }
                  if(window.precio == "b" && sn=="Stockton"){
                  window.open("https://www.century21.com/for-sale-homes/Stockton-CA-8643c/minprice_200001/maxprice_400000/view_map", '_parent');
                 }
                  if(window.precio == "c" && sn=="Stockton"){
                  window.open("https://www.century21.com/for-sale-homes/Stockton-CA-8643c/minprice_400001/maxprice_600000/view_map", '_parent');
                }
                  if(window.precio == "d" && sn=="Stockton"){
                  window.open("https://www.century21.com/for-sale-homes/Stockton-CA-8643c/minprice_600001/maxprice_800000/view_map", '_parent');
                }
            },1000);
    } 
}

//Simplemente silenciar el botón submit
document.getElementById("TOTAL_SCORE").disabled = true;

/* todasRespuestas.onclick = function banderas(){
    if(window.bandera1 == true && window.bandera2 == true && window.bandera3 == true && window.bandera4 == true && window.bandera5 == true && window.bandera6 == true && window.bandera7 == true && window.bandera8 == true && window.bandera9 == true && window.bandera10 == true&& window.bandera11 == true && window.bandera12 == true && window.bandera13 == true){
        console.log("success");
            setTimeout(function(){
                alert('A Loan Officer will contact you soon');
                if(window.variable >= 40){
                window.open("https://test-4bc6d.firebaseapp.com/claseAlta.html", '_parent');
                }
                else if(window.variable >= 30){
                window.open("https://test-4bc6d.firebaseapp.com/claseMedia.html", '_parent');
                }
                else{
                window.open("https://test-4bc6d.firebaseapp.com/claseBaja.html", '_parent');
                }
            },1000);
    } 
} */