import { CardHeader } from "../../../Molecules"
import { Text } from "../../../Utils/Utility.style"

export const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        My PNL
      </Text>
    </CardHeader>
  )
}