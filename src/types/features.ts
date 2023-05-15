export type Status = 'idle' | 'fulfilled' | 'pending' | 'rejected';

export interface User {
  id: number;
  full_name: string | undefined;
  username: string | undefined;
  photo: string | undefined;
  phone?: string | undefined;
  position: string | undefined;
  description: string | undefined;
  email: string | undefined;
  start_date: string;
  state: string | undefined;
  password: string | undefined;
}

export interface Booking {
  id: number;
  guest: string | undefined;
  guest_id: string;
  photo: string | undefined;
  order_date: string;
  check_in: string;
  check_out: string;
  room_type: string | undefined;
  special_request: string | undefined;
  status: 'Check In' | 'In Progress' | 'Check Out';
}

export interface Room {
  id: number;
  name: string | undefined;
  bed_type: string | undefined;
  photo: string | undefined;
  description?: string | undefined;
  amenities: string[];
  rate: number;
  offer: number;
  status: string;
}

export interface Contact {
  id: string;
  date: string;
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  subject: string | undefined;
  comment: string | undefined;
  archived: boolean;
}