function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const quizData = [
    {
        question: "En una central hidroeléctrica la energía eléctrica se transforma en energía cinética, que es transportada hasta los puntos de consumo.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "Una central eléctrica hidráulica tiene entre sus componentes principales: embalse, presa, turbinas, generador, transformadores y líneas de transporte de energía eléctrica.",
        a:"Verdadero",
        b:"Falso",
        correct: "a"
    },
    {
        question: "La generación de energía eléctrica a partir de una corriente de agua es una de las formas de  generación más utilizadas en el mundo.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Se puede decir que la central Hidroeléctrica de Lago Escondido es una de las pequeñas explotaciones o mini hidráulica existentes en Argentina que generan energía eléctrica con un menor impacto ambiental posible.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Las centrales termoeléctricas generan energía eléctrica a partir de energía química (combustibles fósiles, biomasa, biogás) o nuclear.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Las centrales térmicas de ciclo combinado permiten un uso más eficiente del combustible.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Un automóvil eléctrico, que se alimenta con energía eléctrica producida por una central térmica que utiliza combustibles fósiles, es tan amigable con el ambiente como una bicicleta.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "En el sol se produce energía por fusión nuclear, parte de esta energía es utilizada por los organismos fotosintéticos en nuestro planeta.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La energía solar es aprovechada por: los seres vivos fotosintéticos (plantas y otros), la generación de energía eléctrica por efecto fotoeléctrico (celdas fotovoltaicas) y aprovechando el espectro infrarrojo para calentar un fluido (aprovecha la energía solar como térmica).",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Una celda fotovoltaica aprovecha la energía solar, accionando una turbina acoplada a un generador eléctrico cuya  tensión de salida es de 1200 VA.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "La ley de Conservación de la Energía, no es aplicable a las energías renovables.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "La fisión nuclear es la ruptura de un núcleo con liberación de energía.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La energía nuclear se asocia con los fenómenos de fisión (ruptura) nuclear y fusión (unión) nuclear.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La central Atucha II, es una central nuclear de fisión de uranio.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La energía desde el sol se transmite a través de ondas electromagnéticas.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "El efecto fotoeléctrico, es el fenómeno que explica la transformación de la energía solar en eléctrica.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La energía hidráulica es empleada para generar electricidad e impulsar máquinas.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Las centrales eléctricas y térmicas utilizan generadores rotativos basados en la Ley de Rutterford.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "La energía química, almacenada en la biomasa y combustibles fósiles, se utiliza para generar energía eléctrica en centrales termoeléctricas.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La energía eólica del viento es menor a baja altura, debido a la resistencia de las irregularidades del terreno.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Los parque eólicos no presentan impacto ambiental, sus estructuras ayudan a las aves a seguir sus rutas migratorias.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "En Santa Cruz, Chubut, Río Negro y Buenos Aires existe generación eólica.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "La energía térmica, calor, se transmite por conducción, radiación y convección.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "El calor es energía en transito.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Una energía, considerada renovable, puede reponerse a una velocidad mayor que la velocidad de consumo.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "El petróleo, es una fuente de energía no renovable; a partir de la cual se obtiene solamente nafta y gas oil utilizados como combustibles.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "Una turbina permite accionar un generador, transformándose la energía mecánica en eléctrica.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Una turbina convierte la energía cinética del agua, vapor de agua o gas en energía mecánica(rotación), que accione el eje de un generador que funciona según la Ley de Faraday.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Las turbinas más utilizadas son las Pelton, Francis y Kaplan.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "En argentina existen centrales eléctricas térmicas, hidráulicas, nucleares, eólicas y solares.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "En la matriz de generación de energía eléctrica en argentina; se destaca la energía nuclear, representa el 70% de la energía generada en el país.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "Las fuentes de energía no renovable, fósiles, se agotan; es decir que no tienen capacidad de renovarse a una velocidad mayor a la de consumo.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    },
    {
        question: "Las fuentes de energía no renovables, disponibles en la actualidad son inagotables.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "La energía obtenida de una celda fotovoltaica no es el mejor ejemplo de una fuente de energía renovable.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "La pila de hidrógeno genera energía eléctrica y agua.",
        a:"Verdadero",
        b:"Falso",
        correct: "b",
    },
    {
        question: "La biotecnología utiliza organismos vivos o derivados de ellos; para generar productos útiles.",
        a:"Verdadero",
        b:"Falso",
        correct: "a",
    }

];

shuffle(quizData);

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer"); //Radiobuttons
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitBtn = document.getElementById("submit");
const correctasEl = document.getElementById("correctas");
const incorrectasEl = document.getElementById("incorrectas");


let currentQuiz = 0;
let score = 0;
let fscore=0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();


    const currentQuizData = quizData[currentQuiz];



    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    correctasEl.innerText  = "Respuestas Correctas " + score;
    incorrectasEl.innerText  = "Respuestas Incorrectas " + fscore;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        if (answer !== quizData[currentQuiz].correct) {
            fscore++;
        }

        currentQuiz++;
        if (currentQuiz < 15) {
            loadQuiz();
        } else {
              quiz.innerHTML = `
                <h1>Respondiste correctamente ${score}/15 preguntas.</h1>
                <h1>Tu calificación es de ${Math.round(score/(15)*100)} sobre 100 </h1>
                <button onclick="location.reload()">Reload</button>
            `;
        }


    }
});
