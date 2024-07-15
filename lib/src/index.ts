export const autoLinkMd = (str: string) =>
  str.replace(
    /(ftp|https?):\/\/[\w_-]+(\.[\w_-]+)+[\w@?^=%&\/~+#-.:,]*[\w@?^=%&\/~+#-]|[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/g,
    match => `<${match}>`,
  );
