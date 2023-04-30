import shipFactory from './shipFactory';

const ship = shipFactory(3, 'ship');
const invalidShip = shipFactory();
const invalidShip2 = shipFactory('abc');

test('name set correctly', () => {
  expect(ship.name).toBe('ship');
});

test('number of hits is correct', () => {
  ship.hit();
  expect(ship.getHits()).toBe(1);
  ship.hit();
  expect(ship.getHits()).toBe(2);
  expect(() => invalidShip.hit().toThrow('invalid inputs'));
  expect(() => invalidShip2.hit().toThrow('invalid inputs'));
});

test('isSunk works correctly', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  const ship2 = shipFactory(2);
  ship2.hit();
  expect(ship2.isSunk()).toBe(false);
  ship2.hit();
  expect(ship2.isSunk()).toBe(true);
  expect(() => invalidShip.isSunk().toThrow('invalid inputs'));
  expect(() => invalidShip2.isSunk().toThrow('invalid inputs'));
});
