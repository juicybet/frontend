import { CardHeader } from "../../../Molecules"
import { Text } from "../../../Utils/Utility.style"

export const CardBodyHeader = () => {
  return (
    <CardHeader px={20} py={15}>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Salad #12 - Current Pool
      </Text>
    </CardHeader>
  )
}
