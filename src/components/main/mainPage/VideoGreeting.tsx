import { useRef, useState } from "react"
import PlayButtonIcon from "../../../static/images/PlayButtonIcon"
import ArtAndMuseumVideo from "../../../static/videos/ArtAndMuseumVideo"
import styled from "../../../styles/styled"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { mainPageActions } from "../../../redux/mainPage/mainPageReducer"
import { isVideoPlaying } from "../../../redux/mainPage/mainPageSelector"

const VideoGreetingStyled = styled.section`
    margin: auto;
    padding: 50px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
        margin: auto;
        width: inherit;
        box-shadow:  0 0 0.3em ${p => p.theme.colors.text};
    }

    .button {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;

    }
`

interface VideoGreetingProps {

}

const VideoGreeting: React.FC<VideoGreetingProps> = () => {
    const dispatch = useAppDispatch()
    const playing = useAppSelector(isVideoPlaying)

    const handler = {
        playBtnClick: () => {
            dispatch(mainPageActions.playVideo())
        },
        videoClick: () => {
            if (playing) {
                dispatch(mainPageActions.stopVideo())
            }
        }
    }

    return <VideoGreetingStyled>
        <ArtAndMuseumVideo loop className="image" onClick={handler.videoClick} />
        {playing || <PlayButtonIcon className="button" onClick={handler.playBtnClick} />}
    </VideoGreetingStyled>
}

export default VideoGreeting