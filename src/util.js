export function bodyCol(old) {
  const body = document.querySelector('body');
  // const oldClass = body.classList[0];
  const cols = ['bg-pink', 'bg-org', 'bg-lilac','bg-rose','bg-sapphire','bg-peach', 'bg-org','bg-blush','bg-teal'];
  const classes = cols.filter(col => col !== old);
  body.classList.remove(...cols);
  console.log(old);
  console.log(...classes);
  body.classList.add(classes[~~(classes.length * Math.random())]);
}
