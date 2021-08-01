import Image from "next/image"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { SmallBlock } from "../Block"
import { CardHeader, BottomCardSection, PrimaryCard, TopCardSection } from "../Card/Card"
import { FlexWrapperCol, FlexWrapperRow, SpanInfoPrimary, SpanInfoSecondary, SpanLabel } from "../Utils/Utility.style"
import styled, { css } from "styled-components"

const SharedWrapperStyle = css`
  width: 50%;
  padding: 24px;
`

const ProgressBarWrapper = styled(FlexWrapperRow)`
  ${SharedWrapperStyle}
  border-right: 1px solid var(--border-gray);
`

const NetProfitWrapper = styled(FlexWrapperCol)`
  ${SharedWrapperStyle}
`

const ProgressBarChildren = styled(FlexWrapperCol)`
  align-items: center;
`

const BlockWrapper = styled(FlexWrapperRow)`
  gap: 16px;
  align-items: center;
`
const ProfitWrapper = styled(FlexWrapperCol)`
  gap: 16px;
  padding: 16px 24px;
  align-items: center;
`

const BetDetailWrapper = styled(FlexWrapperCol)`
  padding: 16px 24px;
`
const BetBreakDown = styled(FlexWrapperRow)`
  align-items: center;
  gap: 16px;
`
const BreakDownDetail = styled(FlexWrapperRow)`
  align-items: center;
  justify-content: space-between;
  padding: 1.128px 0;
  border-bottom: 1px solid var(--border-gray);
  width: 100%;
`

export const MyPnl = () => {
  return (
    <PrimaryCard>
      <CardHeader>My PNL</CardHeader>
      <TopCardSection height={"208px"} top={"10%"}>
        <FlexWrapperRow>
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
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </ProfitWrapper>
          </NetProfitWrapper>
        </FlexWrapperRow>
      </TopCardSection>
      <BottomCardSection height={"min-content"} bottom={"-1%"}>
        <BetDetailWrapper>
          <BetBreakDown>
            <SmallBlock color={"var(--primary-green)"} />
            <BreakDownDetail>
              <SpanLabel size={"18px"}>Won :</SpanLabel>
              <FlexWrapperCol>
                <SpanInfoPrimary>75 bets</SpanInfoPrimary>
                <SpanInfoSecondary>(75%)</SpanInfoSecondary>
              </FlexWrapperCol>
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </BreakDownDetail>
          </BetBreakDown>
          <BetBreakDown>
            <SmallBlock color={"var(--primary-red)"} />
            <BreakDownDetail>
              <SpanLabel size={"18px"}>Lost :</SpanLabel>
              <FlexWrapperCol>
                <SpanInfoPrimary>25 bets</SpanInfoPrimary>
                <SpanInfoSecondary>(25%)</SpanInfoSecondary>
              </FlexWrapperCol>
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </BreakDownDetail>
          </BetBreakDown>
          <BetBreakDown>
            <SmallBlock color={"var(--dark-gray)"} />
            <BreakDownDetail>
              <SpanLabel size={"18px"}>Entered :</SpanLabel>
              <FlexWrapperCol>
                <SpanInfoPrimary>100 bets</SpanInfoPrimary>
                <SpanInfoSecondary>total</SpanInfoSecondary>
              </FlexWrapperCol>
              <FlexWrapperCol>
                <SpanInfoPrimary>
                  0.123021
                  <Image src="/images/Bitmap.png" width="25" height="25" alt="" />
                </SpanInfoPrimary>
                <SpanInfoSecondary>~ $3.67 </SpanInfoSecondary>
              </FlexWrapperCol>
            </BreakDownDetail>
          </BetBreakDown>
        </BetDetailWrapper>
      </BottomCardSection>
    </PrimaryCard>
  )
}
