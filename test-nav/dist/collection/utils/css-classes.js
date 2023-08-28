export const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => (map[c] = true));
  return map;
};
export const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
