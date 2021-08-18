import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, Card } from "../Card/Card"
import {
  BetInfoWrapper,
  FlexWrapperCentered,
  Flex,
  FlexRow,
  FlexColumn,
  RewardInfo,
  SpanInfoPrimary,
  SpanInfoSecondary,
  SpanInfoWhite,
  SpanLabel,
  Text,
  Box,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { WinningRibbon } from "../Ribbon"
import { Button } from "../Button"
import { currentTheme } from "../../core/theme"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 32px;
`

const DonutWrapper = styled(FlexRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
  position: relative;
`

const DonutDetailWrapper = styled(FlexColumn)`
  position: relative;
  padding: 48px 48px 0 16px;
  width: 60%;
  gap: 8px;
`

const CoinWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  border: 2px solid var(--secondary-gray);
  border-radius: 32px;
  height: 64px;
  padding: 12px;
  width: 100%;
  background-color: var(--primary-white);
`

const LabelWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: -webkit-min-content auto;
  grid-template-columns: min-content auto;
`
const LabelWrapper = styled(FlexWrapperCentered)`
  padding: 16px 16px 0;
`
export const WinningCard = () => {
  return (
    <Card width={"420px"} height={"740px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          Bet #252 result
        </Text>
        <Image src="images/icons/close.svg" width="15" height="15" alt="close"></Image>
      </CardHeader>
      <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)" alignItems="center" height="192px">
        <Flex borderRight="1px solid var(--border-gray)" py={32} width={"40%"} justifyContent="center" height="100%">
          <Image src="/images/donuts/7.png" width="128" height="128" alt="" />
        </Flex>
        <Flex
          flexDirection="column"
          py={16}
          paddingRight={80}
          paddingLeft={16}
          width={"60%"}
          height="100%"
          justifyContent="space-evenly"
          position="relative"
        >
          <SpanLabel size={"20px"}>Block Details :</SpanLabel>
          <Box>
            <LabelWrapperGrid>
              <SpanLabel size={"16px"}>Number: </SpanLabel>
              <SpanInfoPrimary>123021</SpanInfoPrimary>
            </LabelWrapperGrid>
            <LabelWrapperGrid>
              <SpanLabel size={"16px"}>Hash:</SpanLabel>
              <SpanInfoPrimary>
                35f…af7 <ExternalLink size={18} />
              </SpanInfoPrimary>
            </LabelWrapperGrid>
          </Box>
          <Box position="absolute" bottom={10} right={10}>
            <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
          </Box>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>You Choose:</SpanLabel>
          <SpanInfoPrimary>
            Donut 7
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <WinningRibbon bet={"donut"}>
          <SpanInfoWhite>You Win</SpanInfoWhite>
        </WinningRibbon>
        <LabelWrapper>
          <SpanLabel size={"18px"}>Time left to claim reward: 09:59</SpanLabel>
        </LabelWrapper>
        <Flex flexDirection="column" justifyContent="flex-start" p={16}>
          <Flex p={16} backgroundColor="var(--bg-gray)" borderRadius={16} height={"149px"}>
            <RewardInfo height={"128px"} width={"256px"}>
              <SpanInfoPrimary>your reward :</SpanInfoPrimary>
              <CoinWrapper>
                <Flex flexDirection="column">
                  <SpanInfoPrimary>0.123021</SpanInfoPrimary>
                  <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
                </Flex>
                <Image src="/images/icons/coins/bnb.svg" width="32" height="32" alt="" />
              </CoinWrapper>
            </RewardInfo>
            <Box paddingTop={4}>
              <Image src="/images/icons/trophy.svg" width="100" height="100" alt="skull" />
            </Box>
          </Flex>
          <Button height={"64px"} px={16} py={3}>
            Claim Reward
          </Button>
        </Flex>
        <Text textAlign="center" fontSize={18} color={currentTheme().primary}>
          Close Window
        </Text>
      </Flex>
    </Card>
  )
}
