"use client"
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./Componenets/Footer"
import Header from "./Componenets/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
        <Header />
          {children}
          <Footer /> 
        </ChakraProvider>
        </body>
    </html>
  )
}
