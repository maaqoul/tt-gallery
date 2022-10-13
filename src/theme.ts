import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                boxSizing: 'border-box'
            },
            "#root": {
                height: '100vh'
            }
        }
    }
})

export default theme;