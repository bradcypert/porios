export class User {
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;

  constructor(email?: string, password?: string) {
    this.email = email;
    this.password = password;
  }
}
