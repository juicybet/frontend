import { useState } from "react"
import { Box, Flex } from "../Utils/Utility.style"

export const Video = (props: any) => {
  const initialState = {
    index: 0,
    src: props.videos[0],
  }

  const [state, setState] = useState(initialState)

  const PlayNext = () => {
    if (state.index < props.videos.length - 1) {
      let nextIndex = state.index + 1
      setState({ index: nextIndex, src: props.videos[nextIndex] })
    } else {
      setState(initialState)
    }
  }

  return (
    <Box overflow="hidden" PointerEvent="none" maxWidth="50%" height="7rem">
      <video
        src={state.src}
        width="300"
        height="200"
        autoPlay
        playsInline
        muted
        onEnded={() => PlayNext()}
        className="videoElement"
      />
    </Box>
  )
}
