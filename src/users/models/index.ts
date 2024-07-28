export interface User {
  id?: string;
  name: string;
  email?: string;
  password?: string;
}

export type UserNoId = Omit<User, 'id'>;
