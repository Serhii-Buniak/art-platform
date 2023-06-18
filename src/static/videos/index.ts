import { DetailedHTMLProps, VideoHTMLAttributes } from "react";

type VideoWithoutSrc = Omit<DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, 'src' | 'poster'>

export default VideoWithoutSrc