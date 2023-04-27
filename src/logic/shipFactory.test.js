import shipFactory from './shipFactory';

test('number of hits is correct', () => {
  const ship = shipFactory(3);

  expect(ship.hit()).toBe(1);
  expect(ship.hit()).toBe(2);
});

test('isSunk works correctly', () => {
  const ship = shipFactory(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  const ship2 = shipFactory(2);
  ship2.hit();
  expect(ship2.isSunk()).toBe(false);
  ship2.hit();
  expect(ship2.isSunk()).toBe(true);
});
