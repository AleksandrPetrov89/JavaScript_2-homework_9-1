export default class Character {
  #types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка при присвоении имени!');
    }
    this.name = name;
    if (!this.#types.includes(type)) {
      throw new Error('Ошибка при присвоении типа персонажа!');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 10;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Повысить уровень нельзя! Персонаж мертв!');
    }
    this.health = 100;
    this.level += 1;
    this.attack *= (100 + 20) / 100;
    this.defence *= (100 + 20) / 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
