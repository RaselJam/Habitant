import { GetSvgGenerator } from "./svgs";
export const GetSVG = ({ name, width, height, color }) => {
  let res;
  try {
    res = GetSvgGenerator[name]({
      width,
      height,
      color: color,
    });
  } catch (error) {
    throw new Error(
      `Error on generating SVG, check the speling or the Existance of svg called : ${name}`
    );
  }
  return res;
};
