import { CardHeader } from "../../../Molecules"
import { Flex, Text, Box } from "../../../Utils/Utility.style"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "react-feather"

export const CardBodyHeader = () => {
  return (
    <CardHeader px={20} py={15}>
      <Text textAlign="left" fontSize={18} color={"var(--dark-gray)"}>
        Salad #12 - Current Pool
      </Text>
      <Flex alignItems="center" justifyContent="space-between" width="150px">
        <Box>
          <ChevronsLeft color="var(--dark-gray)" />
        </Box>
        <Box>
          <ChevronLeft color="var(--dark-gray)" />
        </Box>
        <Box>
          <ChevronRight color="var(--light-gray)" />
        </Box>
        <Box>
          <ChevronsRight color="var(--light-gray)" />
        </Box>
      </Flex>
    </CardHeader>
  )
}
