export default function shipFactory(length) {
  let hits = 0;
  const hit = () => {
    hits += 1;
    return hits;
  };
  const isSunk = () => {
    if (length <= hits) return true;
    return false;
  };
  return {
    hit,
    isSunk,
  };
}
