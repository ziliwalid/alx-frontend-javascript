export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  /*static so you can access the method without 
   * init an obj*/
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
