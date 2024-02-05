import { Radio } from "../../../Atoms"
import { Video } from "../../../Molecules"
import styled from "styled-components"
import { FlexWrapperCentered, Flex, Box } from "../../../Utils/Utility.style"

export const RadioButtonWrapper = styled(FlexWrapperCentered)`
  justify-content: space-between;
  margin: 32px;
  width: 100%;
`

const waterMelonVideos = [
  "/videos/watermelon/idle_1.webm",
  "/videos/watermelon/idle_2.webm",
  "/videos/watermelon/idle_3.webm",
]
const strawBerryVideos = [
  "/videos/strawberry/idle_1.webm",
  "/videos/strawberry/idle_2.webm",
  "/videos/strawberry/idle_3.webm",
]
export const CardBodyUper = () => {
  return (
    <Box borderBottom="1px solid var(--border-gray)">
      <Flex alignItems="center" justifyContent="center" flexDirection="column" mx={4} my={2}>
        {/* to be fixed properly */}
        <Flex width={"100%"} overflow="hidden">
          <Video videos={waterMelonVideos} />
          <Video videos={strawBerryVideos} />
        </Flex>
        <RadioButtonWrapper>
          <Radio name="bet">Watermelon</Radio>
          <Radio name="bet">Strawberry</Radio>
        </RadioButtonWrapper>
      </Flex>
    </Box>
  )
}
