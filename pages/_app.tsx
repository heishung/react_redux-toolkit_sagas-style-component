import 'antd/dist/antd.css'
import withRedux from "next-redux-wrapper"
import App from "next/app"
import Head from "next/head"
import React from "react"
import { Provider } from "react-redux"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "styles/globals.css"
import { makeStore } from "../store/configureStore"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

type Props = {
  Component: React.Component
  store: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */
class MyApp extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  render() {
    const { store, Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <Provider store={store}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>

    )
  }
}

export default withRedux(makeStore, {
  debug: false,
})(MyApp)
