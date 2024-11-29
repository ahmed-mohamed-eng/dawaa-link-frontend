export default function convertBufferToBase64(filedata: ArrayBuffer) {
  const rawData = new Uint8Array(filedata);

  let stringCode = "";

  for (const rawDatum of rawData) {
    stringCode += String.fromCharCode(rawDatum);
  }

  const base64String = btoa(stringCode);

  return base64String;
}
