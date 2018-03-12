export class Users {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public gender: string,
    public email: string,
    public password: string,
    public address: string,
    public city?: string
  ) {

  }
}
