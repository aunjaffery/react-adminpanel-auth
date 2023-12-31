import { Box, Text } from "@chakra-ui/react";

const PageTitle = ({ title = "Dashboard" }) => {
  return (
    <Box my="6">
      <Text fontSize="2xl" fontWeight="bold" textTransform="capitalize">
        {title}
      </Text>
    </Box>
  );
};

export default PageTitle;
