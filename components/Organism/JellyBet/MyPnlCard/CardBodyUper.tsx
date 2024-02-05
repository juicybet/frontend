import Image from "next/image"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import styled from "styled-components"
import {
  Flex,
  SpanInfoPrimary,
  SpanInfoSecondary,
  SpanLabel,
  FlexRow,
  FlexColumn,
  SmallBlock,
} from "../../../Utils/Utility.style"

const BlockWrapper = styled(FlexRow)`
  gap: 16px;
  align-items: center;
`
const ProfitWrapper = styled(FlexColumn)`
  gap: 16px;
  padding: 16px 24px;
  align-items: center;
`

export const CardBodyUper = () => {
  return (
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
  )
}
