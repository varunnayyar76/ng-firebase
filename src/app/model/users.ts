export class Users {
  constructor(
    public id: number = 0,
    public firstname: string = '',
    public lastname: string = '',
    public gender: string = 'Male',
    public email: string = '',
    public password: string = '',
    public address: string = '',
    public city?: string
  ) {

  }
}
