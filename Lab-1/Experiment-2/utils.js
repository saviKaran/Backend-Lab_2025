export const data = {
  person: {
    name: "Savi",
    age: 19
  },
  greet: function () {
    return `Hello, ${this.person.name}!`;
  }
};