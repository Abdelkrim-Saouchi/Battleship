export default function shipFactory(length, name) {
  let hits = 0;
  const hit = () => {
    if (length == null || typeof length !== 'number')
      throw new Error('invalid inputs');
    hits += 1;
    return hits;
  };
  const isSunk = () => {
    if (length == null || typeof length !== 'number')
      throw new Error('invalid inputs');
    if (length <= hits) return true;
    return false;
  };
  return {
    name,
    hit,
    isSunk,
  };
}
