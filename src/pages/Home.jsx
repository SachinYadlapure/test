import React from 'react';

import { Box } from '@chakra-ui/react';
import Products from './products/Products';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <Box mt={24} overflowX={'hidden'}>
      <HeroSection />
      <Products />
    </Box>
  );
};

export default Home;
