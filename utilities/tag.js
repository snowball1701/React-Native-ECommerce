export const getTag = (name) => {
  switch (name) {
    case `men's clothing`:
      return 'For Man';
    case `women's clothing`:
      return 'For Women';
    default:
      return name;
  }
};
