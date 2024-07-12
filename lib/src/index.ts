export const autoLinkMd = (str: string) =>
  str.replace(
    /((ftp|https?):\/\/)?[\w_-]+(\.[\w_-]+)+[\w@?^=%&\/~+#-.:,]*[\w@?^=%&\/~+#-]/g,
    match => `<${match}>`,
  );
