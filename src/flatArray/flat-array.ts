export default function flatArray(array: any[], previousFlatted?: any[]) {
  const flatResult = previousFlatted || [];

  array.forEach((item) => Array.isArray(item) ? flatArray(item, flatResult) : flatResult.push(item));
  return flatResult;
}