export function bodyCol(old) {
  const body = document.querySelector('body');
  console.log(old);
  const cols = ['bg-pink', 'bg-org', 'bg-lilac','bg-rose','bg-sapphire','bg-peach', 'bg-org','bg-blush','bg-teal'];
  const classes = cols.filter(col => col !== old);
  body.classList.remove(...cols);
  body.classList.add(classes[~~(classes.length * Math.random())]);
}
