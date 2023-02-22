import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let mounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      if (mounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }
      return () => {
        mounted = false;
      };
    };

    getProducts();
  }, [mounted]);
  const Loading = () => {
    return <>Loading....</>;
  };

  const filterProduct = cat => {
    const updatedList = data.filter(elem => elem.category === cat);
    setFilter(updatedList);
  };

  const ShowFilters = () => {
    return (
      <Box>
        <Button mx={'8'} onClick={() => setFilter(data)}>
          All
        </Button>
        <Button mx={'8'} onClick={() => filterProduct("men's clothing")}>
          Men's Cloths
        </Button>
        <Button mx={'8'} onClick={() => filterProduct("women's clothing")}>
          Women's Cloths
        </Button>
        <Button mx={'8'} onClick={() => filterProduct('jewelery')}>
          Jewelery
        </Button>
        <Button mx={'8'} onClick={() => filterProduct('electronics')}>
          Electronic
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Box pt={'24'}>
        <Heading
          textTransform={'uppercase'}
          textAlign={'center'}
          // margin={'auto'}
        >
          Products
        </Heading>
        <hr />
        <VStack pt={'6'} pb={'6'}>
          {loading ? <Loading /> : <ShowFilters />}
        </VStack>
      </Box>

      <Flex
        flexWrap={'wrap'}
        justifyContent={'center'}
        ml={'56'}
        mr={'20'}
        mt={'auto'}
      >
        {filter.map(product => (
          <Stack>
            <Box
              w={'60'}
              h={'md'}
              m={'1'}
              border={'1px solid pink'}
              boxShadow={'xl'}
            >
              <Box margin={'3vmax'}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/products/${product.id}`}
                >
                  <Image
                    w={['unset', '14vmax']}
                    src={product.image}
                    alt={product.title}
                    objectFit={'contain'}
                  />
                </Link>
              </Box>
              <Text align={'center'}>{product.title.substring(0, 12)}</Text>
              <Text align={'center'} color={['white', 'unset']} mb={'2vmax'}>
                PRICE : {`₹${product.price}`}
              </Text>
            </Box>
          </Stack>
        ))}
      </Flex>
    </>
  );
};

export default Products;
