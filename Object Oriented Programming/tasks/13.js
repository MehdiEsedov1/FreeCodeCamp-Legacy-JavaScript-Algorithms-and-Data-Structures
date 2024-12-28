function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat() {
    return "num num num";
  },
  describe() {
    return "This is a dog";
  },
};
