export const sortOrFilterContactsBy = (sortOrFilterBy, data) => {
  if (sortOrFilterBy === 'newest') {
    return data;
  } else if (sortOrFilterBy === 'oldest') {
    return data;
  } else if (sortOrFilterBy === 'archived') {
    return data;
  } else {
    return data;
  }
}