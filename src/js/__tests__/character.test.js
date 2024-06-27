import Character from '../classes/character';

test.each([
  ['I'],
  ['IvanIvan001'],
  [23],
])(
  ('Проверка появления ошибки при присвоении имени %s'),
  (name) => {
    const mistake = () => new Character(name, 'Bowman');
    expect(mistake).toThrow(new Error('Ошибка при присвоении имени!'));
  },
);

test('Проверка появления ошибки при присвоении некорректного типа', () => {
  const mistake = () => new Character('Ivan', 'B');
  expect(mistake).toThrow(new Error('Ошибка при присвоении типа персонажа!'));
});

test('Проверка работы метода levelUp()', () => {
  const character = new Character('Ivan', 'Bowman');
  const correct = {
    name: 'Ivan', type: 'Bowman', health: 100, level: 2, attack: 12, defence: 12,
  };
  character.health = 1;
  character.levelUp();
  expect(character).toEqual(correct);
});

test('Проверка появления ошибки у метода levelUp()', () => {
  const character = new Character('Ivan', 'Bowman');
  character.health = 0;
  const mistake = () => character.levelUp();
  expect(mistake).toThrow(new Error('Повысить уровень нельзя! Персонаж мертв!'));
});

test('Проверка работы метода damage()', () => {
  const character = new Character('Ivan', 'Bowman');
  character.damage(100);
  expect(character.health).toBe(10);
});

test('Проверка метода damage(), когда урон больше очков жизни', () => {
  const character = new Character('Ivan', 'Bowman');
  character.damage(200);
  expect(character.health).toBe(0);
});
