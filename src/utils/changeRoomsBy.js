export const changeRoomsBy = (changeBy, data) => {
  if (changeBy === 'number') {
    return data.sort((a, b) => a.id - b.id);
  } else if (changeBy === 'status') {
    return data.sort((a, b) => {
      if (a.status === 'Available' && b.status === 'Booked') return -1;
      else if (a.status === 'Booked' && b.status === 'Available') return 1; 
      else return 0;
    })
  } else if (changeBy === 'price') {
    return data.sort((a, b) => a.rate - b.rate);
  } else if (changeBy === 'available') {
    return data.filter(({ status }) => status === 'Available');
  } else if (changeBy === 'booked') {
    return data.filter(({status}) => status === 'Booked');
  } else {
    return data;
  }
}