import Boweman from '../boweman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Create Boweman', () => {
  const character = new Boweman('Legolas');
  const expected = {
    name: 'Legolas',
    level: 1,
    health: 100,
    type: 'Boweman',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('Create Swordsman', () => {
  const character = new Swordsman('Петр');
  const expected = {
    name: 'Петр',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('Create Magician', () => {
  const character = new Magician('Pendalf');
  const expected = {
    name: 'Pendalf',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});

test('Create Undead', () => {
  const character = new Undead('Кощей');
  const expected = {
    name: 'Кощей',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('Create Zombie', () => {
  const character = new Zombie('Шон');
  const expected = {
    name: 'Шон',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('Create Daemon', () => {
  const character = new Daemon('Димон');
  const expected = {
    name: 'Димон',
    level: 1,
    health: 100,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };

  expect(character).toEqual(expected);
});
