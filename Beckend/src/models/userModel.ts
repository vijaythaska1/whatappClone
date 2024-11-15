export interface IUser {
    name: string;
    email: string;
  }
  
  export class User {
    name: string;
    email: string;
  
    constructor(data: Partial<IUser>) {
      if (!data.name || !data.email) {
        throw new Error('Name and email are required');
      }
      this.name = data.name;
      this.email = data.email;
    }
  }