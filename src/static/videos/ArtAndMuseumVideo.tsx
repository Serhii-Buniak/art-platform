import { useEffect, useRef, useState } from "react"
import VideoWithoutSrc from "."
import { useAppSelector } from "../../redux/hooks"
import { isVideoPlaying } from "../../redux/mainPage/mainPageSelector"



interface ArtAndMuseumVideoProps extends VideoWithoutSrc {

}

const ArtAndMuseumVideo: React.FC<ArtAndMuseumVideoProps> = (props) => {

    const videoRef = useRef<HTMLVideoElement>(null)
    const playing = useAppSelector(isVideoPlaying)

    useEffect(() => {
        if (playing) {
            videoRef.current?.play()
        } else {
            videoRef.current?.pause()
        }
    }, [playing])

    return <video
        src="/videos/art-and-museum.webm"
        poster="/videos/art-and-museum-poster.png"
        ref={videoRef}
        {...props}
    >
        Sorry, your browser doesn't support embedded videos,
        but don't worry, you can download it
        and watch it with your favorite video player!
    </video>
}

export default ArtAndMuseumVideo