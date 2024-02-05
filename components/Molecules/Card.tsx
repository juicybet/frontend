import { ThemeProvider } from "styled-components"
import { Flex } from "../Utils/Utility.style"

const theme = {
  breakpoints: ["40em", "52em", "64em"],
}

export const Card = ({ children, width, height }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection="column"
        width={width}
        height={height}
        bg="var(--primary-white)"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.05)"
        borderRadius="20px"
        position="relative"
      >
        {children}
      </Flex>
    </ThemeProvider>
  )
}

export const CardHeader = ({ children, px, py }: any) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      px={px ? px : 20}
      py={py ? py : 15}
      borderBottom="1px solid var(--border-gray)"
    >
      {children}
    </Flex>
  )
}

export const CardBox = ({ children, width, height, backgroundImage, backgroundSize }: any) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      height={height}
      width={width}
      border="1px solid var(--border-gray)"
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
    >
      {children}
    </Flex>
  )
}

export const PopUpCardVegies = ({ children, backgroundImage, backgroundSize }: any) => {
  return (
    <Flex
      flexDirection="column"
      size={[92, 192]}
      p={2}
      justifyContent="space-between"
      borderRight="1px solid var(--border-gray);"
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
    >
      {children}
    </Flex>
  )
}
