import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "..";

export const isVideoPlaying = (state: AppState) => {
    return state.main.video.playing
}

export const getFaqData = (state: AppState) => {
    return state.main.faq.data
}

