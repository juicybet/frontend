import Image from "next/image"
import "react-circular-progressbar/dist/styles.css"
import { CardHeader, BottomCardSection, TopCardSection, PrimaryCard } from "../Card/Card"
import {
  BetInfoWrapper,
  FlexWrapperCentered,
  Flex,
  FlexRow,
  FlexColumn,
  RewardInfo,
  RewardSection,
  RewardSectionWrapper,
  SpanInfoflexEnd,
  SpanInfoPrimary,
  SpanInfoSecondary,
  SpanInfoWhite,
  SpanLabel,
} from "../Utils/Utility.style"
import styled, { css } from "styled-components"
import { ExternalLink } from "react-feather"
import { WinningRibbon } from "../Ribbon"
import { Button } from "../Button"

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
    <PrimaryCard width={"400px"} height={"695px"}>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"256px"} top={"10%"}>
        <Flex flexDirection="row">
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
            <Flex alignItems="center" justifyContent="center">
              <Image src="/images/icons/won.svg" width="40" height="40" alt="" />
            </Flex>
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex flexDirection="column" size={[92, 180]} p={2} justifyContent="space-between">
            <Image src="/images/vegies/pepper.png" width={60} height={100} alt="Pepper " />
          </Flex>
          <Flex
            flexDirection="column"
            size={[92, 180]}
            p={2}
            justifyContent="space-between"
            backgroundImage="url('images/Rectangle.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Flex alignItems="center" justifyContent="center">
              <Image src="/images/vegies/broccoli.png" width={60} height={100} alt="Brocolli " />
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Image src="/images/icons/lost.svg" width="40" height="40" alt="" />
            </Flex>
          </Flex>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"445px"} bottom={"0"}>
        <BetInfoWrapper>
          <SpanLabel size={"18px"}>Your Bet:</SpanLabel>
          <SpanInfoPrimary>
            Onion Will be Picked
            <ExternalLink size={18} />
          </SpanInfoPrimary>
        </BetInfoWrapper>
        <WinningRibbon bet={"donut"}>
          <SpanInfoWhite>You Win</SpanInfoWhite>
        </WinningRibbon>
        <RewardSectionWrapper>
          <RewardSection>
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
          </RewardSection>
          <Button>Claim Reward</Button>
        </RewardSectionWrapper>

        <SpanInfoPrimary>Close Window</SpanInfoPrimary>
      </BottomCardSection>
    </PrimaryCard>
  )
}
