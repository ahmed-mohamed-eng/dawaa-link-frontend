import IUserData from "@/types/auth/UserData.interface";

export default function decodeUserData(userData: string) {
  return JSON.parse(window.atob(userData)) as IUserData;
}
