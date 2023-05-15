export type Status = 'idle' | 'fulfilled' | 'pending' | 'rejected';

export interface User {
  id: number;
  full_name: string;
  username: string;
  photo: string;
  position: string;
  description: string;
  email: string;
  start_date: string;
  state: string;
  password: string;
}

export interface Booking {
  id: number;
  guest: string;
  guest_id: string;
  photo: string;
  order_date: string;
  check_in: string;
  check_out: string;
  room_type: string;
  special_request: string;
  status: string;
}

export interface Room {
  id: number;
  name: string;
  bed_type: string;
  photo: string;
  amenities: string[];
  rate: number;
  status: string;
}

export interface Contact {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string;
  archived: boolean;
}