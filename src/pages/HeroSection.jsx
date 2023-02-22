import { Box, Button, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import man from '../images/Man.png';
import './Hero.css';

const HeroSection = () => {
  return (
    <Box h={'100vh'} p={'5rem'} boxSizing={'border-box'}>
      <Stack
        direction={'row'}
        height="100%"
        justifyContent={'center'}
        alignItems="center"
        spacing={['60', '56']}
      >
        <VStack width={'full'} alignItems={'center'} spacing="8">
          <h1 className="headingText">Amazing Products Bellow</h1>
          <Text
            fontFamily={'cursive'}
            textAlign={['center', 'left']}
            children="Find Valuable Products At Reasonable Price"
          />
          <Link to="/products">
            <Button size={'lg'} colorScheme="yellow">
              Explore Now
            </Button>
          </Link>
        </VStack>
        <Image
          className="graphics"
          boxSize={'container.md'}
          src={man}
          objectFit="contain"
        />
      </Stack>
    </Box>
  );
};

export default HeroSection;
