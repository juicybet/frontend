import Image from "next/image"
import { CardHeader } from "../../../Molecules"
import { Text } from "../../../Utils/Utility.style"

export const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Bet which veggie* will be thrown away!
      </Text>
      <Image src="images/icons/close.svg" width="15" height="15" alt="close" />
    </CardHeader>
  )
}
