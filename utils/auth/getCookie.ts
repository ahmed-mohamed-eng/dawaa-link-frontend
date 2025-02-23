export default function getCookie(name: string) {
  const cookies = document.cookie.split(";");

  const cookie = cookies
    .find((c) => c.includes(name))
    ?.trim()
    .replace(name, "")
    .replace("=", "");

  return cookie;
}
