export default class Hund {
  #namn;
  #checkedIn;

  constructor(name, checkedIn = false) {
    this.#namn = name;
    this.#checkedIn = checkedIn;
  }

  get name() {
    return this.#namn;
  }

  get checkedIn() {
    return this.#checkedIn;
  }

  set name(newName) {
    this.#namn = newName;
  }

  checkInAndOut() {
    this.#checkedIn = !this.#checkedIn;
  }

  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "Hundar.json". 
  dataInfo() {
    return {
      "name": this.#namn,
      "checkedIn": this.#checkedIn
    };
  }
}