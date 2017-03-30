export class User {
  public admin: boolean;
  public age: number;
  public email: string;
  public firstName: string;
  public id: number;
  public isActive: boolean;
  public lastLogin: string;
  public lastName: string;
  public password: string;

  constructor(user?: any) {
    if (user) {
      this.admin = user.admin;
      this.age = user.age;
      this.email = user.email;
      this.firstName = user.first_name;
      this.id = user.id;
      this.isActive = user.is_active;
      this.lastLogin = user.last_login;
      this.lastName = user.last_name;
    }
  }
}
