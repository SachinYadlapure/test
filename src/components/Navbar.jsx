import React, { useState } from 'react';
import { Box, Button, Input, HStack, Flex, Badge } from '@chakra-ui/react';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [keyword, setKeyword] = useState('');
  const { cartItems } = useSelector(state => state.cart);

  const isAuthenticated = true;

  const navigate = useNavigate();

  const searchSubmitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate(`/`);
    }
    setKeyword('');
  };

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        bg={'coral'}
        pl={'40'}
        pr={'5'}
        h={'20'}
        position={'fixed'}
        top={'0'}
        width={'100vw'}
        height={'20'}
        mb={'20'}
        zIndex={5}
      >
        <Flex align={'center'} display={['none', 'none', 'flex', 'flex']}>
          <Link to={'/'}>
            <Button color={'white'} variant="link" bg={'coral'} mx={40}>
              Home
            </Button>
          </Link>
          {isAuthenticated && (
            <Link to="/profile">
              <Button mr={'20'} colorScheme={'purple'} variant={'outline'}>
                PROFILE
              </Button>
            </Link>
          )}

          {isAuthenticated ? (
            <Link to="/logout">
              <Button variant={'outline'} colorScheme={'purple'}>
                LOGOUT
              </Button>
            </Link>
          ) : (
            <Link to="/register">
              <Button variant={'outline'} colorScheme={'purple'}>
                REGISTER
              </Button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/login">
              <Button ml={'20'} colorScheme={'purple'} variant={'outline'}>
                LOGIN
              </Button>
            </Link>
          )}

          <HStack pl={'40'}>
            <form onSubmit={searchSubmitHandler}>
              <Input
                onChange={e => setKeyword(e.target.value)}
                // type="submit"
                placeholder="Search a products"
                w={['60', '3xl']}
                size={['md', 'md']}
                borderRadius={'md'}
                border={'2px'}
                // borderColor={'white'}
                value={keyword}
                color={'white'}
              />
            </form>
          </HStack>
          <Flex pl={'12'}>
            <Link to="/cart">
              <ShoppingCartOutlined
                style={{ cursor: 'pointer' }}
                color="action"
              />
              <Badge>{cartItems.length}</Badge>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
