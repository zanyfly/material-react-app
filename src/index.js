import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { cyan, yellow } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: cyan,
        secondary:{
            main: yellow[100]
        },
        type: 'dark'
    }
})

render(<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
