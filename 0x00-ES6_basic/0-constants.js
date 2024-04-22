export function taskFirst() {
  const task = 'I prefer using constants whenever possible.';
  return task;
}

export function getLast() {
  return 'However, sometimes using let is sinequanon.';
}

export function taskNext() {
  let combination = 'For instance, when ';
  combination += 'the value of a variable needs to be updated.';
  combination += ' ' + getFallbackMessage();

  return combination;
}
