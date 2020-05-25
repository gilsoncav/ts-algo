export default function removeDuplicates(str: string) {
  const tokens = str.split(' ');
  const set = new Set(tokens);

  return [...set].join(' ');
}

