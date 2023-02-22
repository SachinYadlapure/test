import React from 'react';

import { Box } from '@chakra-ui/react';
import Products from './products/Products';

const Home = () => {
  return (
    <Box overflowX={'hidden'}>
      <Products />
    </Box>
  );
};

export default Home;
