import Image from "next/image"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { SmallBlock } from "../Block"
import { CardHeader, Card } from "../Card/Card"
import { Flex, SpanInfoPrimary, SpanInfoSecondary, SpanLabel, FlexRow, FlexColumn, Text } from "../Utils/Utility.style"
import styled, { css } from "styled-components"

const BlockWrapper = styled(FlexRow)`
  gap: 16px;
  align-items: center;
`
const ProfitWrapper = styled(FlexColumn)`
  gap: 16px;
  padding: 16px 24px;
  align-items: center;
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
    <Card width={"420px"} height={"594px"}>
      <CardHeader>
        <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
          My PNL
        </Text>
      </CardHeader>
      <Flex flexDirection="row" borderBottom="1px solid var(--border-gray)">
        <Flex borderRight="1px solid var(--border-gray)" p={24} width={"50%"}>
          <CircularProgressbarWithChildren
            value={75}
            strokeWidth={10}
            styles={buildStyles({
              rotation: 0.25 + (1 - 75 / 100) / 2,
              trailColor: "var(--primary-white)",
              pathColor: "var(--primary-green)",
            })}
          >
            <Flex flexDirection="column" alignItems="center">
              <SpanLabel size={"14px"}>Won</SpanLabel>
              <SpanInfoPrimary>75/100</SpanInfoPrimary>
              <SpanLabel size={"12px"}>(75%)</SpanLabel>
            </Flex>
          </CircularProgressbarWithChildren>
        </Flex>
        <Flex flexDirection="column" p={24} width={"50%"}>
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
        </Flex>
      </Flex>
      <Flex flexDirection="column" py={16} px={24}>
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
      </Flex>
    </Card>
  )
}
