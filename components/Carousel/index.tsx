import Image from "next/image"
import { Flex } from "../Utils/Utility.style"
import { Radio, RadioProps } from "../Radio/Radio"

type RadioCarouselProps = RadioProps & {
  img: string
  width: string
  height: string
  alt: string
}

export const RadioCarousel = ({
  name,
  children,
  img,
  width,
  height,
  alt,
  selected = false,
  setSelected = () => {},
}: RadioCarouselProps) => {
  return (
    <Flex flexDirection="column" onClick={() => setSelected(true)} cursor="pointer">
      <Flex alignItems="center" justifyContent="center" m={1} size={[64, 128]}>
        <Image src={img} width={width} height={height} alt={alt} />
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Radio name={name} selected={selected} setSelected={setSelected}>
          {children}
        </Radio>
      </Flex>
    </Flex>
  )
}
