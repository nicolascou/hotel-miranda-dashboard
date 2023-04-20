import bookings_json from '../data/bookings.json';
import moment from 'moment';

const sortBookingsBy = (orderBy) => {
  if (orderBy === 'guest') {
    return bookings_json.sort((a, b) => {
      if (a.guest < b.guest) return -1;
      if (a.guest > b.guest) return 1;
      return 0;
    })

  } else if (orderBy === 'order_date') {
    return bookings_json.sort((a, b) => {
      const dateA = moment(a.order_date, "MMM Do YYYY hh:mm A").toDate();
      const dateB = moment(b.order_date, "MMM Do YYYY hh:mm A").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })

  } else if (orderBy === 'check_in') {
    return bookings_json.sort((a, b) => {
      const dateA = moment(a.check_in, "MMM Do, YYYY").toDate();
      const dateB = moment(b.check_in, "MMM Do, YYYY").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })
  } else if (orderBy === 'check_out') {
    return bookings_json.sort((a, b) => {
      const dateA = moment(a.check_out, "MMM Do, YYYY").toDate();
      const dateB = moment(b.check_out, "MMM Do, YYYY").toDate();
      
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    })
  } else if (orderBy === 'progress') {
    return bookings_json.filter(({ status }) => status === 'In Progress')
  } else {
    return []
  }
}

export default sortBookingsBy;