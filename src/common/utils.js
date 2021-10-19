export function uniqAndSort(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b, 'zh'));
}
