export const { filterByStatus } = (filterBy, data) => {
  if (!filterBy) return data;
  return data.filter(({ status }) => status !== filterBy);
}