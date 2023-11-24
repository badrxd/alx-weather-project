const getByUnit = (obj, unit, index) => {
  const name = unit[index].pointer;
  return obj[name];
};

export { getByUnit };
