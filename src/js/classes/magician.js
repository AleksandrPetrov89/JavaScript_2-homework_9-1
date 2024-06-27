import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    // eslint-disable-next-line no-underscore-dangle
    this._attack = 10;
    this.defence = 40;
    // eslint-disable-next-line no-underscore-dangle
    this._stoned = false;
    this.distance = 1;
  }

  get stoned() {
    // eslint-disable-next-line no-underscore-dangle
    return this._stoned;
  }

  set stoned(bool) {
    if (typeof bool === 'boolean') {
      // eslint-disable-next-line no-underscore-dangle
      this._stoned = bool;
    }
  }

  set attack(distance) {
    this.distance = distance;
  }

  get attack() {
    // eslint-disable-next-line no-underscore-dangle
    let damage = this._attack * (1 - (this.distance - 1) / 10);
    if (this.stoned) {
      damage -= Math.log2(this.distance) * 5;
    }
    if (damage < 0) {
      damage = 0;
    }
    return damage;
  }
}
