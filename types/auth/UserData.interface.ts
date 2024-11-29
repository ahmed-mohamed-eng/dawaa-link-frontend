export default interface IUserData {
  id: number;
  name: string;
  email: string;
  lang: string;
  guard: string;
  lat: null | number | string;
  lng: null | number | string;
  address: null | string;

  photo?: string;
  token?: string;
  phone?: string;
}
