import { Flex } from "../Utils/Utility.style"
import styled from "styled-components"

export const ModalWrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  max-height: 900px;
  top: 0;
  left: 0;
  z-index: 9000;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  align-items: center;
  justify-content: center;
`
export const ModalOverlay = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
`
