import moment from 'moment';
import { User } from '../types/features';

export const orderUsersBy = (changeBy: string, data: User[]) => {
  if (changeBy === 'name') {
    return data.sort((a, b) => {
      if (a.full_name && b.full_name) {
        if (a.full_name < b.full_name) return -1;
        if (a.full_name > b.full_name) return 1;
      }
      return 0;
    })
  } else if (changeBy === 'date') {
    return data.sort((a, b) => {
      const dateA = moment(a.start_date, "YYYY-MM-DD").toDate();
      const dateB = moment(b.start_date, "YYYY-MM-DD").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })
  } else if (changeBy === 'active') {
    return data.filter(({ state }) => state === 'active');
  } else if (changeBy === 'inactive') {
    return data.filter(({ state }) => state === 'inactive');
  } else {
    return data;
  }
}