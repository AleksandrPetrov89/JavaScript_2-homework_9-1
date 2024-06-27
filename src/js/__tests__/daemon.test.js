import Daemon from '../classes/daemon';

const hero = new Daemon('Ivan');

test('Проверка создания экземпляра класса Daemon', () => {
  const correct = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 10,
    defence: 40,
    _stoned: false,
    distance: 1,
  };
  expect(hero).toEqual(correct);
});

test('Проверка метода get свойства stoned', () => {
  expect(hero.stoned).toBe(false);
});

test.each([
  [1, false],
  [true, true],
])(
  ('Проверка метода set свойства stoned'),
  (bool, ans) => {
    hero.stoned = bool;
    expect(hero.stoned).toBe(ans);
  },
);

test('Проверка метода set свойства attack', () => {
  hero.attack = 5;
  // eslint-disable-next-line no-underscore-dangle
  expect(hero._attack).toBe(10);
  expect(hero.distance).toBe(5);
});

test.each([
  [false, 1, 10],
  [false, 5, 6],
  [false, 15, 0],
  [true, 1, 10],
  [true, 2, 4],
  [true, 14, 0],
])(
  ('Проверка метода get свойства attack'),
  (bool, dist, ans) => {
    hero.stoned = bool;
    hero.attack = dist;
    expect(hero.attack).toBe(ans);
  },
);
