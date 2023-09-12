const validateUrl = (value) => {
  const regex = /^(https?|ftp)://(www.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(:\\d{2,5})?(?:/?|[/?][a-zA-Z0-9+&@#%?=~_|!:,.;]*)$/;
  return regex.test(value);
};

export default validateUrl