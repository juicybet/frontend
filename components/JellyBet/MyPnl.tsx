import Image from "next/image"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { SmallBlock } from "../Block"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import { Flex, SpanInfoPrimary, SpanInfoSecondary, SpanLabel, FlexRow, FlexColumn } from "../Utils/Utility.style"
import styled, { css } from "styled-components"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 24px;
`

const ProgressBarWrapper = styled(FlexRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
`

const NetProfitWrapper = styled(FlexColumn)`
  ${SharedWrapperStyle}
`

const ProgressBarChildren = styled(FlexColumn)`
  align-items: center;
`

const BlockWrapper = styled(FlexRow)`
  gap: 16px;
  align-items: center;
`
const ProfitWrapper = styled(FlexColumn)`
  gap: 16px;
  padding: 16px 24px;
  align-items: center;
`

const BetDetailWrapper = styled(FlexColumn)`
  padding: 16px 24px;
`
const BetBreakDown = styled(FlexRow)`
  align-items: center;
  gap: 16px;
`
const BreakDownDetail = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  padding: 29px 0;
  border-bottom: 1px solid var(--border-gray);
  width: 100%;
`

export const MyPnl = () => {
  return (
    <PrimaryCard>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"208px"} top={"10%"}>
        <Flex flexDirection="row">
          <ProgressBarWrapper>
            <CircularProgressbarWithChildren
              value={75}
              strokeWidth={10}
              styles={buildStyles({
                rotation: 0.25 + (1 - 75 / 100) / 2,
                trailColor: "var(--primary-white)",
                pathColor: "var(--primary-green)",
              })}
            >
              <ProgressBarChildren>
                <SpanLabel size={"14px"}>Won</SpanLabel>
                <SpanInfoPrimary>75/100</SpanInfoPrimary>
                <SpanLabel size={"12px"}>(75%)</SpanLabel>
              </ProgressBarChildren>
            </CircularProgressbarWithChildren>
          </ProgressBarWrapper>
          <NetProfitWrapper>
            <BlockWrapper>
              <SmallBlock color={"var(--primary-green)"} />
              <SpanLabel size={"18px"}>Net Profit:</SpanLabel>
            </BlockWrapper>
            <ProfitWrapper>
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </ProfitWrapper>
          </NetProfitWrapper>
        </Flex>
      </TopCardSection>
      <BottomCardSection height={"min-content"} bottom={"-1%"}>
        <BetDetailWrapper>
          <BetBreakDown>
            <SmallBlock color={"var(--primary-green)"} />
            <BreakDownDetail>
              <SpanLabel size={"18px"}>Won :</SpanLabel>
              <Flex flexDirection="column">
                <SpanInfoPrimary>75 bets</SpanInfoPrimary>
                <SpanInfoSecondary>(75%)</SpanInfoSecondary>
              </Flex>
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </BreakDownDetail>
          </BetBreakDown>
          <BetBreakDown>
            <SmallBlock color={"var(--primary-red)"} />
            <BreakDownDetail>
              <SpanLabel size={"18px"}>Lost :</SpanLabel>
              <Flex flexDirection="column">
                <SpanInfoPrimary>25 bets</SpanInfoPrimary>
                <SpanInfoSecondary>(25%)</SpanInfoSecondary>
              </Flex>
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </BreakDownDetail>
          </BetBreakDown>
          <BetBreakDown>
            <SmallBlock color={"var(--dark-gray)"} />
            <BreakDownDetail>
              <SpanLabel size={"18px"}>Entered :</SpanLabel>
              <Flex flexDirection="column">
                <SpanInfoPrimary>100 bets</SpanInfoPrimary>
                <SpanInfoSecondary>total</SpanInfoSecondary>
              </Flex>
              <Flex flexDirection="column">
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/icons/coins/bnb.svg" width="20" height="20" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </Flex>
            </BreakDownDetail>
          </BetBreakDown>
        </BetDetailWrapper>
      </BottomCardSection>
    </PrimaryCard>
  )
}
