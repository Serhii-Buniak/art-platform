export const lightTheme = {
    colors: {
        back: '#e8e8e8',
        back2: '#f7f7f7',
        backOpacity25: '#ffffff25',
        backOpacity90: '#ffffff90',
        text: "#050505",
        hover: "#00000050",
        highText: "#1833ad",
        link: "#006ef5",
        linkHover: "#5ebbe4",
    }
}

export type Theme = typeof lightTheme

export const darkTheme: Theme = {
    colors: {
        back: '#210E09',
        back2: '#1a1514',
        backOpacity25: '#210E0925',
        backOpacity90: '#210E0990',
        text: "white",
        hover: "#ffffff50",
        highText: "#FCD54C",
        link: "#f7f040",
        linkHover: "#f18d0a",
    }
}


