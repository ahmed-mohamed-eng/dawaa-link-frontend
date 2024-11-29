import IUserData from "@/types/auth/UserData.interface";

export default function encodeUserData(userData: IUserData) {
  return window.btoa(JSON.stringify(userData));
}
