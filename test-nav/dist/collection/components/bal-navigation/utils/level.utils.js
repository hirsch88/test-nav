export const observeLevels = (target, level, notify) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    mutationList = mutationList.filter(record => record.target.nodeName === level.toLocaleUpperCase());
    if (mutationList.length > 0) {
      notify();
    }
  });
  mutation.observe(target, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
  return mutation;
};
export const readSubLevels = async (element, target) => {
  const subLevels = Array.from(element.querySelectorAll(target));
  const levels = [];
  for (const level of subLevels) {
    const info = await level.getLevelInfo();
    levels.push(info);
  }
  return levels;
};
