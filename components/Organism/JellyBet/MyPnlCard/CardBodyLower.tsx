import Image from "next/image"
import styled from "styled-components"
import { Flex, SpanInfoPrimary, SpanInfoSecondary, SpanLabel, FlexRow, SmallBlock } from "../../../Utils/Utility.style"

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

export const CardBodyLower = () => {
  return (
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
  )
}
