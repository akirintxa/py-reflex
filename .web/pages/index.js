import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
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
  <VStack>
  <HStack sx={{"position": "sticky", "bg": "yellow", "padding": "16px", "zIndex": "999"}}>
  <Text sx={{"height": "40px"}}>
  {`akirintxa`}
</Text>
</HStack>
  <VStack>
  <Avatar name={`Akirintxa`} size={`xl`}/>
  <Text>
  {`@akirintxa`}
</Text>
  <Text>
  {`Consolidated Project Manager - Dev in progress`}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://github.com/akirintxa`} isExternal={true} sx={{"color": "rgb(107,99,246)", "button": true}}>
  <Button>
  {`Github`}
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com`} isExternal={true} sx={{"color": "rgb(107,99,246)", "button": true}}>
  <Button>
  {`Youtube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://x.com/lapoiax`} isExternal={true} sx={{"color": "rgb(107,99,246)", "button": true}}>
  <Button>
  {`Twitter`}
</Button>
</Link>
</VStack>
  <VStack>
  <Image src={`Monsters-red-04.png`} sx={{"width": "100px", "height": "auto"}}/>
  <Text>
  {`@2023 Desarrollado por Akirintxa`}
</Text>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
