import Character from '../Characters/Character';
import Swordsman from '../Characters/Swordsman';

test('new Character', () => {
  expect(() => new Character(1, 'swordsman')).toThrowError(new Error('Do not use new Character()'));
});

test('new Swordsman', () => {
  expect(() => new Swordsman(1, 'swordsman')).not.toThrowError();
});
