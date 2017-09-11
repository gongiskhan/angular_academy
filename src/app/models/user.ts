import { Roles } from './roles';

export interface User {
  id?: number;
  username: string;
  password: string;
  billingAddress?: string;
  shippingAddress?: string;
  role?: Roles;
}
