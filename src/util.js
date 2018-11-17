export function bodyCol() {
  const body = document.querySelector('body');
  const cols = ['bg-pink', 'bg-org', 'bg-lilac'];
  body.classList.remove(...cols);
  body.classList.add(cols[~~(cols.length * Math.random())]);
}
