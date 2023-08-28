export const toFileArray = (list) => {
  return Array.from(list ? list : []);
};
export const toFileList = (files) => {
  const dataTransfer = new DataTransfer();
  if (files && files.length > 0) {
    files.forEach(file => dataTransfer.items.add(file));
  }
  return dataTransfer.files;
};
