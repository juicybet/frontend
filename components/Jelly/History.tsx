import { BackgroundWrapper, ContentWrapper } from "../Utils/Utility.style"
import { MainContent } from "../JellyBet/Bet.style"
import { MyPnl } from "../JellyBet/MyPnl"
import { MyBet } from "../JellyBet/MyBet"

export const History = () => {
  return (
    <main>
      <BackgroundWrapper />
      <ContentWrapper>
        <MainContent>
          <MyPnl />
          <MyBet />
        </MainContent>
      </ContentWrapper>
    </main>
  )
}
