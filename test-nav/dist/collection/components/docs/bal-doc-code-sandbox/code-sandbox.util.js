export const parseMarkdown = (content) => {
  if (content.startsWith('```')) {
    const lines = content.split('\n');
    lines.splice(0, 1);
    return lines.join('\n').replace('```', '');
  }
  return content;
};
export const loadSourceFiles = async (files) => {
  const sourceFiles = await Promise.all(files.map(f => fetch(`/assets/code/${f}`)));
  return await Promise.all(sourceFiles.map(res => res.text()));
};
export const getFramework = () => {
  var _a;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  let paramFramework = (_a = params.globals) === null || _a === void 0 ? void 0 : _a.replace('framework:', '');
  const frameworks = ['angular', 'html', 'react', 'vue'];
  paramFramework = frameworks.includes(paramFramework) ? paramFramework : undefined;
  if (paramFramework !== undefined) {
    localStorage.setItem('bal-docs-framework', JSON.stringify(paramFramework));
    return paramFramework;
  }
  const storageValue = localStorage.getItem('bal-docs-framework');
  if (storageValue === null) {
    localStorage.setItem('bal-docs-framework', JSON.stringify('angular'));
    return 'angular';
  }
  return JSON.parse(storageValue);
};
