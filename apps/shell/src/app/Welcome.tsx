import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Welcome = () => {
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
};

export default Welcome;
