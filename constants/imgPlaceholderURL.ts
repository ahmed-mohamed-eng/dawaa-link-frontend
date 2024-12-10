type DefaultFontFamily =
  | "lato"
  | "lora"
  | "montserrat"
  | "open-sans"
  | "oswald"
  | "playfair-display"
  | "pt-sans"
  | "raleway"
  | "roboto"
  | "source-sans-pro";

type Options = {
  size: {
    width: string;
    height?: string;
  };
  color: string;
  bgColor: string;
  text: string;
  fontFamily: DefaultFontFamily;
  extension: "png" | "svg" | "webp" | "jpeg";
  retina: "@2x" | "@3x" | "";
};

const imgPlaceholderURL = (options?: Partial<Options>) => {
  const size = convImgSize(options?.size);
  const color = options?.color || "EEE";
  const bgColor = options?.color || "31343C";
  const text = options?.text || "Placeholder";
  const font = options?.fontFamily || "roboto";
  const extension = options?.extension || "png";
  const retina = options?.retina || "";

  return `https://placehold.co/${size}/${color}/${bgColor}${retina}.${extension}?font=${font}&text=${text}`;
};

export default imgPlaceholderURL;

function convImgSize(size?: { width: string; height?: string }) {
  if (!size) {
    return "600x400";
  }

  if (size.width && size.height) {
    return `${size.width}x${size.height}`;
  }

  if (size.width) {
    return `${size.width}x${size.width}`;
  }

  return "600x400";
}
