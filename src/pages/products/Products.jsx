import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/action/productAction';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.product);

  const [category, setCategory] = useState('');

  const { keyword } = useParams();

  const getData = (data, property) => {
    let newVal =
      data &&
      data.map(cat => {
        return cat[property];
      });

    return [...new Set(newVal)];
  };

  const categoryData = getData(data, 'category');

  useEffect(() => {
    dispatch(getProducts(keyword, category));
  }, [dispatch, keyword, category]);

  return (
    <Box mt={'80px'} h={'full'}>
      <Heading
        textTransform={'uppercase'}
        pt={'5'}
        pb={'5'}
        textAlign={'center'}
        // borderBottom="1px "
        margin={'auto'}
      >
        Products
      </Heading>
      <Flex
        ml={['unset', '15vmax']}
        flexWrap={'wrap'}
        justifyContent={'center'}
        minH={'30vh'}
      >
        {data &&
          data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Flex>
      <Box
        visibility={'visible'}
        w={['20vmax', '10vmax']}
        position={['fixed', 'absolute']}
        top={'10vmax'}
        left={'4vmax'}
      >
        <Text
          color={['white', 'unset']}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          pt={'5'}
        >
          Categories
        </Text>
        <UnorderedList pb={'5'} pt={'5'}>
          {categoryData &&
            categoryData.map(category => (
              <ListItem
                p={'4'}
                fontSize={['unset', 'md']}
                textTransform={'uppercase'}
                cursor={'pointer'}
                listStyleType={'none'}
                color={['white', 'unset']}
                _hover={{
                  color: 'red',
                }}
                key={category}
                onClick={() => setCategory(category)}
                value={category}
              >
                {category}
              </ListItem>
            ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Products;
