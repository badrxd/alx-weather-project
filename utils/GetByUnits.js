

const getByUnit = (obj, unit, index, index_2 = 0) => {
  const name = unit[index].pointer[index_2];
  return obj[name];
};

export { getByUnit };
