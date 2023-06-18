import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Vocabulary, { getFunctionParametr } from "../../translation/vocabulary";
import { stat } from "fs";

interface AppState {
    video: {
        playing: boolean
    }
    faq: {
        data: {
            question: string
            answer: string
            isOpen: boolean
        }[]
    }
}

const initialState: AppState = {
    video: {
        playing: false,
    },
    faq: {
        data: [
            {
                question: getFunctionParametr(p => p.question1),
                answer: getFunctionParametr(p => p.answer1),
                isOpen: false,
            },
            {
                question: getFunctionParametr(p => p.question2),
                answer: getFunctionParametr(p => p.answer2),
                isOpen: false,
            },
            {
                question: getFunctionParametr(p => p.question3),
                answer: getFunctionParametr(p => p.answer3),
                isOpen: false,
            },
            {
                question: getFunctionParametr(p => p.question4),
                answer: getFunctionParametr(p => p.answer4),
                isOpen: false,
            },
            {
                question: getFunctionParametr(p => p.question5),
                answer: getFunctionParametr(p => p.answer5),
                isOpen: false,
            },
        ]
    }
}


const mainPageSlice = createSlice({
    name: "main-page",
    initialState,
    reducers: {
        toggleVideo: (state) => {
            state.video.playing = !state.video.playing
        },
        playVideo: (state) => {
            state.video.playing = true
        },
        stopVideo: (state) => {
            state.video.playing = false
        },
        toggleFaqIsOpen: (state, action: PayloadAction<number>) => {
            state.faq.data[action.payload].isOpen = !state.faq.data[action.payload].isOpen
        }
    }
})


export const mainPageActions = mainPageSlice.actions

export default mainPageSlice.reducer