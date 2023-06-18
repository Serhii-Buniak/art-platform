import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type ImageWithoutSrc = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'| 'ref'>

export default ImageWithoutSrc