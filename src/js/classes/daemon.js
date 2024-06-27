import Magician from './magician';

export default class Daemon extends Magician {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
