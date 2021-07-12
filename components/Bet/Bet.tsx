import React from "react"
import { Cardbutton, CardHeader, ContentCard, LowerCardSection, UpperCardSection } from "./Bet.style"

export const Createbet = () => {
  return (
    <ContentCard>
      <CardHeader>Bet which fruit will turn into jelly</CardHeader>
      <UpperCardSection>
        <h1>dldjdj</h1>
      </UpperCardSection>
      <LowerCardSection>
        <h1>dldjdj</h1>
      </LowerCardSection>
      <Cardbutton>create a bet</Cardbutton>
    </ContentCard>
  )
}

export const Acceptbet = () => {
  return (
    <ContentCard>
      <CardHeader>Or accept an existing bet</CardHeader>
      <Cardbutton>accept a bet</Cardbutton>
    </ContentCard>
  )
}
