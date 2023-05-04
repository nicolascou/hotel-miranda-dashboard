import moment from 'moment';

export const sortOrFilterContactsBy = (sortOrFilterBy, data) => {
  if (sortOrFilterBy === 'archived') {
    return data.filter(({ archived }) => archived);
  } else {
    data = data.filter(({ archived }) => !archived);
    if (sortOrFilterBy === 'newest') {
      return data.sort((a, b) => {
        const dateA = moment(a.date, "YYYY-MM-DD").toDate();
        const dateB = moment(b.date, "YYYY-MM-DD").toDate();
        
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
      });
    } else if (sortOrFilterBy === 'oldest') {
      return data.sort((a, b) => {
        const dateA = moment(a.date, "YYYY-MM-DD").toDate();
        const dateB = moment(b.date, "YYYY-MM-DD").toDate();
        
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      });
    }
    return data;
  }
}