// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Flex, Text } from '@chakra-ui/react';

export function App() {
  return (
    <Flex
      width={`1oo%`}
      height={`100vh`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Text color={`green.400`} fontWeight={`bold`} fontSize={`5rem`}>
        Productize Landing Page
      </Text>
    </Flex>
  );
}

export default App;
