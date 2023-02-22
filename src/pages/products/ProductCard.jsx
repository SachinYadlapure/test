import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Box m={'1'} border={'1px solid pink'} boxShadow={'xl'}>
      <Flex margin={'3vmax'}>
        <Link style={{ textDecoration: 'none' }} to={`/products/${product.id}`}>
          <Image
            w={['unset', '14vmax']}
            src={product.image}
            alt={product.title}
            // objectFit={'cover'}
          />
        </Link>
      </Flex>
      {/* <Text align={'center'}>{product.title}</Text> */}
      <Text align={'center'} color={['white', 'unset']} mb={'2vmax'}>
        PRICE : {`₹${product.price}`}
      </Text>
    </Box>
  );
};

export default ProductCard;
