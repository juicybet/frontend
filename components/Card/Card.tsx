import styled, { css } from "styled-components"

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
export const CardHeader = styled.span`
  font-style: normal;
  font-weight: 600;
  color: var(--dark-gray);
  position: absolute;
  left: 5%;
  top: 3%;
  right: 5%;
`

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
