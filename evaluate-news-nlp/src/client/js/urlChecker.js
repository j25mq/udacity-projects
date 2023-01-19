const checkUrl = (text) => {
    const regexp = /^(http|https):\/\/[^ "]+$/;
    return regexp.test(text);
};
  
export { checkUrl };
  