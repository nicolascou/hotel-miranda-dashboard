import moment from 'moment';
import { Booking } from '../types/features';

const sortBookingsBy = (orderBy: string, data: Booking[]) => {
  if (orderBy === 'guest') {
    return data.sort((a, b) => {
      if (a.guest && b.guest) {
        if (a.guest < b.guest) return -1;
        if (a.guest > b.guest) return 1;
      }
      return 0;
    })

  } else if (orderBy === 'order_date') {
    return data.sort((a, b) => {
      const dateA = moment(a.order_date, "MMM Do YYYY hh:mm A").toDate();
      const dateB = moment(b.order_date, "MMM Do YYYY hh:mm A").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })

  } else if (orderBy === 'check_in') {
    return data.sort((a, b) => {
      const dateA = moment(a.check_in, "MMM Do, YYYY").toDate();
      const dateB = moment(b.check_in, "MMM Do, YYYY").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })
  } else if (orderBy === 'check_out') {
    return data.sort((a, b) => {
      const dateA = moment(a.check_out, "MMM Do, YYYY").toDate();
      const dateB = moment(b.check_out, "MMM Do, YYYY").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })
  } else if (orderBy === 'progress') {
    return data.filter(({ status }) => status === 'In Progress');
  } else {
    return data;
  }
}

export default sortBookingsBy;