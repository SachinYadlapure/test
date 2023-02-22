import {
  Flex,
  Image,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productAction';
import { addItemsToCart } from '../../redux/action/cartAction';

const ProductDetail = () => {
  const { product } = useSelector(state => state.productDetails);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { id } = useParams();

  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Flex
      mt={'80px'}
      pl={['unset', '20']}
      pr={['unset', '20']}
      pt={['unset', '20']}
      h={'100vh'}
      bg={'darkgray'}
      direction={['column', 'column', 'row', 'row']}
      overflowX={'hidden'}
    >
      <Flex flex={1}>
        <Image
          borderRadius={'50'}
          h={['45vh', '45vh', '60vh', '80vh']}
          src={product.image}
        />
      </Flex>
      <Flex
        flex={1}
        pl={['10px', '60px']}
        pr={['10px', '60px']}
        pt={['unset', '10']}
      >
        <Stack>
          <Heading borderBottom={'1px'} color={['blue', 'unset']}>
            {product.title}
          </Heading>
          <Text pb={'5'} fontSize={['md', 'md', 'x-large']}>
            {product.description}
          </Text>
          <Heading borderBottom={'1px'} size={'xl'}>
            ₹{product.price}/-
          </Heading>
          <HStack borderBottom={'1px'} pt={'8'} pb={'8'}>
            <Button onClick={decreaseQuantity} w={'16'} colorScheme={'teal'}>
              -
            </Button>
            <Input
              bg={['green.100', 'white']}
              value={quantity}
              readOnly
              type={'number'}
              width={'12'}
              outline={'none'}
            />
            <Button onClick={increaseQuantity} w={'16'} colorScheme={'teal'}>
              +
            </Button>
          </HStack>
          <HStack pt={'8'} pb={'8'}>
            <Button
              onClick={addToCartHandler}
              h={'50'}
              fontSize={['unset', 'lg']}
              colorScheme={'blue'}
              w={['32', '40']}
            >
              Add To Cart
            </Button>
          </HStack>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
