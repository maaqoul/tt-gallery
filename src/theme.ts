import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            "*": {
                "box-sizing": "border-box"
            },
            "html, body, div, img": {
                margin: 0,
                padding: 0,
                border: 0,
                "font- size": "100%",
                font: "inherit",
                "vertical-align": "baseline",
            },
            body: {
                "line-height": 1
            },
            "#root": {
                height: '100vh'
            }
        }
    }
})

export default theme;