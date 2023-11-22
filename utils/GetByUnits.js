const getByUnit = async (obj, unit, index) => {
  const name = await unit[index].pointer;
  return obj[name];
};

export { getByUnit };
