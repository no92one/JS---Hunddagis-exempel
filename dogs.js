import fs from "fs";
import Hund from "./dog.js";

export default class Hundar {
  #hundLista = [];

  constructor() {
    this.#fetchHundData()
  }
  get hundLista() {
    return this.#hundLista
  }

  #fetchHundData() {
    const jsonString = fs.readFileSync("hundar.json")
    const data = JSON.parse(jsonString)
    for (let i = 0; i < data.length; i++) {
      this.#hundLista.push(new Hund(data[i].name, data[i].checkedIn))
    }
  }

  skrivUtHundar() {
    for (let i = 0; i < this.#hundLista.length; i++) {
      console.log(`${i + 1}. ${this.#hundLista[i].name}`);
    }
  }

  skrivUtHundarMedCheckIn() {
    for (let i = 0; i < this.#hundLista.length; i++) {
      console.log(`${i + 1}. ${this.#hundLista[i].name} -> ${this.#hundLista[i].checkedIn}`);
    }
  }

  addDogToList(name) {
    this.#hundLista.push(new Hund(name));
    this.#updateJsonFile();
  }

  removeDogFromList(index) {
    this.#hundLista.splice(index, 1)
    this.#updateJsonFile()
  }

  #updateJsonFile() {
    let tempList = []

    for (let i = 0; i < this.#hundLista.length; i++) {
      tempList.push(this.#hundLista[i].dataInfo())
    }

    fs.writeFileSync('./hundar.json', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  checkInDog(index) {
    this.#hundLista[index].checkInAndOut()
    this.#updateJsonFile()
  }

  getLength() {
    return this.#hundLista.length
  }
} 