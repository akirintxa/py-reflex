import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#0c0c0d", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Roboto", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`akirin`}
</Text>
  <Text as={`span`} sx={{"color": "#FFED27"}}>
  {`txa`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Akirintxa`} size={`xl`} src={`avatar.png`} sx={{"color": "#C3C7CB", "bg": "#0c0c0d", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#FFED27", "fontFamily": "Roboto"}}>
  {`Akirintxa`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@akirintxa`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/akirintxa`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/github.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://linkedin.com/in/idoiarivas/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/linkedin.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://open.spotify.com/playlist/58UEzft9XhigNB8q8wnTgn?si=65c5fbab31da46b0`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/spotify.svg`} sx={{"width": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`18+`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`0+`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`0+`}
</Text>
  {` seguidores`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
            Ingeniero electrónico - Project Manager - Dev in Progress
            `}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#FFED27", "fontFamily": "Roboto"}}>
  {`Portafolio`}
</Heading>
  <Link as={NextLink} href={`https://github.com/akirintxa`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#FFED27", "backgroundColor": "#0c0c0d", "_hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack>
  <Image src={`icons/twitch.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Roboto", "fontSize": "1em", "color": "#FFED27"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Un poquito de mis experimentos de programación`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#FFED27", "fontFamily": "Roboto"}}>
  {`Recursos y más`}
</Heading>
  <Link as={NextLink} href={`https://amazon.es/shop/mouredev/list/2ZIHJJFJ9AVZ3`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#FFED27", "backgroundColor": "#0c0c0d", "_hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack>
  <Image src={`icons/book.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Roboto", "fontSize": "1em", "color": "#FFED27"}}>
  {`Libros recomendados`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi listado de libros sobre programación, ciencia y tecnología`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com/setup`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#FFED27", "backgroundColor": "#0c0c0d", "_hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack>
  <Image src={`icons/setup.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Roboto", "fontSize": "1em", "color": "#FFED27"}}>
  {`Mi setup`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Listado con todos los elementos que uso en mi trabjao`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://akirintxa.github.io`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#FFED27", "backgroundColor": "#0c0c0d", "_hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack>
  <Image src={`icons/logo.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Roboto", "fontSize": "1em", "color": "#FFED27"}}>
  {`Mi web`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Ya estás en ella!`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#FFED27", "fontFamily": "Roboto"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:akirintxa@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#FFED27", "backgroundColor": "#0c0c0d", "_hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack>
  <Image src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Roboto", "fontSize": "1em", "color": "#FFED27"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`akirintxa@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#A3ADBE"}}>
  <Image src={`logo.png`} sx={{"height": "4em"}}/>
  <Link as={NextLink} href={`https://akirintxa.github.io`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  <Box>
  {`© 2023 `}
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Akirintxa`}
</Text>
  {` v1.`}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`Project management and software development .`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Akirintxa | Dev in progress`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`avatar.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
