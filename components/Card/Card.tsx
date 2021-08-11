import styled, { css } from "styled-components"
import { ThemeProvider } from "styled-components"
import { Flex } from "../Utils/Utility.style"

export const PrimaryCardWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: var(--primary-white);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  position: relative;
`
export const PrimaryCardExtendedWrapper = styled(PrimaryCardWrapper)`
  width: 800px;
`
export const Wrapper = styled(PrimaryCardWrapper)`
  height: 664px;
`
export const WrapperSmall = styled(PrimaryCardWrapper)`
  height: 480px;
`
// export const CardHeader = styled.span`
//   font-style: normal;
//   font-weight: 600;
//   color: var(--dark-gray);
//   position: absolute;
//   left: 5%;
//   top: 3%;
//   right: 5%;
// `

const CardSection = css`
  position: absolute;
  width: 100%;
  border-top: 1px solid var(--border-gray);
`

export const TopCardSection = styled.div<{ height: string; top: string }>`
  ${CardSection}
  height: ${(props) => props.height};
  top: ${(props) => props.top};
`

export const BottomCardSection = styled.div<{ height: string; bottom: string }>`
  ${CardSection}
  height: ${(props) => props.height};
  bottom: ${(props) => props.bottom};
`

export const FullCardSection = styled.div<{ top: string }>`
  ${CardSection}
  top: ${(props) => props.top};
`

export const PrimaryCard = ({ children, width, height }: any) => {
  return (
    <PrimaryCardWrapper width={width} height={height}>
      {children}
    </PrimaryCardWrapper>
  )
}

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
