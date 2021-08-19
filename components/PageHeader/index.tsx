import { Text, Flex } from "../Utils/Utility.style"
import { getLogoProps, getTitle } from "../../core/site"
import Image from "next/image"

export const PageHeader = () => {
  return (
    <Flex flexDirection="column" width="412px">
      <Flex alignItems="center" justifyContent="space-between">
        <Image alt={getTitle()} {...getLogoProps()} />
        <Text color="#FF624E"> by </Text>
        <Image src="images/logo/juicy.png" height="120" width="212" alt="juicy" />
      </Flex>

      <Image src="images/BlueRibn.svg" width="300" height="50" alt="ribbon" />
    </Flex>
  )
}
