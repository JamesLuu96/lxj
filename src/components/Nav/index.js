import React from 'react';
import Link from 'next/link'
import {
  Box,
  Text,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ['Gallery', 'Trips', 'Food', 'Movies', 'Bucket List'];


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  const toHome = function(){
    
  }
  const NavLink = ({ children }) => (
    <Link href={`/${children.split(' ').join('-').toLowerCase()}`} >
      <Text onClick={onClose}
        px={2}
        py={1}
        rounded={'md'}
        fontFamily="Oleo Script"
        fontWeight="thin"
        _hover={{
          textDecoration: 'none',
          color: "brand.300",
          cursor: 'pointer'
        }}>
          {children}
        </Text>
    </Link>
  );

  return (
    <>
      <Box bg={useColorModeValue('brand.100', 'brand.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href="/#" >
              <Box 
              _hover={{cursor: "pointer", bg: "brand.300"}} 
              onClick={toHome} 
              fontFamily="Leckerli One" 
              border={`1px solid ${useColorModeValue('black', 'white')}`} 
              borderRadius="50%" 
              padding="3px"
              >
                L+J
              </Box>
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            
            {useColorModeValue(
              <MoonIcon onClick={toggleColorMode} _hover={{color:"brand.300", cursor:"pointer"}} margin="8px"/>,
              <SunIcon onClick={toggleColorMode} _hover={{color:"brand.300", cursor:"pointer"}} margin="8px"/>
            )}
                
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

