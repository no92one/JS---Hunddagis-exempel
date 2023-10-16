export default class Hund {
  #namn;
  #checkedIn;

  constructor(name, checkedIn = false) {
    this.#namn = name;
    this.#checkedIn = checkedIn
  }

  get name() {
    return this.#namn;
  }

  get checkedIn() {
    return this.#checkedIn
  }

  set name(newName) {
    this.#namn = newName
  }

  checkInAndOut() {
    this.#checkedIn = !this.#checkedIn;
  }

  dataInfo() {
    return {
      "name": this.#namn,
      "checkedIn": this.#checkedIn
    }
  }
}