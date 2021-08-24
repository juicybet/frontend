import { CardHeader } from "../../../Molecules"
import { Text } from "../../../Utils/Utility.style"

export const CardBodyHeader = () => {
  return (
    <CardHeader>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Bet what the last digit of the current block’s hash will be to win a 15x reward!
      </Text>
    </CardHeader>
  )
}
