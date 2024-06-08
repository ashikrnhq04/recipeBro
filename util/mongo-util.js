export function MongoIdToString(data) {
  if (data instanceof Array) {
    const items = data
      .map((item) => ({ ...item, id: item._id.toString() }))
      .map(({ _id, ...item }) => ({ ...item }));
    return items;
  }
  const { _id, ...rest } = { ...data, id: data._id.toString() };

  return rest;
}
