import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#11998e',
                    background: 'linear-gradient(to right, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

                },
            },
        },
    },
});

export default theme;