import PromptSync from "prompt-sync";
import Hundar from "./dogs.js";

const prompt = PromptSync({ sigint: true })
const hundLista = new Hundar()


let run = true

while (run) {
  console.log(`
Meny

1. Lägg till en ny hund
2. Hantera Incheckning
3. Ta bort en hund
4. Visa alla hundar
A. Avsluta programmet

Val ->`);

  const val = prompt()

  switch (val.trim().toUpperCase()) {
    case "1":
      hundLista.addDogToList(prompt("Vad heter den nya hunden? -> "))
      break;
    case "2":
      checkMeny();
      break;
    case "3":
      removeDog();
      break;
    case "4":
      hundLista.skrivUtHundar();
      break;
    case "A":
      console.log("Programmet avslutas!");
      run = false;
      break;
    default:
      console.log("Du måste välja mellan 1, 2, 3 eller A!");
  }
}



function removeDog() {
  hundLista.skrivUtHundar()
  const val = prompt("Skriv in index för den hunden du vill ta bort ->")

  if (Number(val).toString() === "NaN") {
    console.log("Måste skriva in ett tal!");
  }
  if (val <= hundLista.hundLista.length) {
    hundLista.removeDogFromList(Number(val) - 1)
  } else {
    console.log("För stort tal");
  }
}

function checkMeny() {
  let run = true;

  while (run) {
    hundLista.skrivUtHundarMedCheckIn()
    console.log("B. för att gå tillbaka");
    const val = prompt("Skriv in index för den hunden du checka in/ut ->")

    if (val.trim().toUpperCase() === "B") {
      run = false;
    } else if (Number(val).toString() === "NaN") {
      console.log("Måste skriva in ett tal!");
    }
    if (val <= hundLista.getLength() && val >= 1) {
      hundLista.checkInDog(Number(val) - 1);
    } else {
      console.log(`Talet måste vara mellan 1 och ${hundLista.getLength()}`);
    }
  }
}


