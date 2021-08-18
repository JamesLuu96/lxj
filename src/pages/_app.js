import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import Nav from '../components/Nav'
import Head from 'next/head'
import '../../styles/globals.css'


function App({ Component }) {
  return (
    <>
    <Head>
        <title>{"Linh & James"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href={"https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"} rel="stylesheet"/>
        <link href={"https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"} rel="stylesheet"/>
        <link href={"https://fonts.googleapis.com/css2?family=Arizonia&display=swap"} rel="stylesheet"/>
        <link href={"https://fonts.googleapis.com/css2?family=Lobster&display=swap"} rel="stylesheet"/>
      </Head>
    <ChakraProvider theme={theme}>
      <Nav/>
      <Component />
    </ChakraProvider>
    </>
  )
}

export default App