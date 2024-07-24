import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Flex,
    Heading,
    Button,
    HStack,
    Avatar,
    Text,
    Badge,
    Skeleton,
    SkeletonCircle,
} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import axios from 'axios';
import { BASE_URL } from '../constant';
import { AddIcon } from '@chakra-ui/icons';

interface Product {
    price: number;
    id: number;
    name: string;
    description: string;
    isInStore: boolean;
}

const ProductSkeleton = () => {




    return (
        <>

            <Box m={12} shadow={'md'} rounded={'md'}>
                <Flex justifyContent={'space-between'} px={'5'}>
                    <Heading>
                        <Skeleton>Product List</Skeleton>
                    </Heading>
                    <Button color="teal.300" leftIcon={<AddIcon/>}>
                    <Skeleton>
                    {""}
                    </Skeleton>
                    </Button>

                </Flex>

                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>

                        <Thead>
                            <Tr>
                                <Th><Skeleton>Id</Skeleton></Th>
                                <Th><Skeleton>Name</Skeleton></Th>
                                <Th><Skeleton>Description</Skeleton></Th>
                                <Th><Skeleton>IsinStock</Skeleton></Th>
                             
                                <Th isNumeric><Skeleton>Price</Skeleton></Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {Array.from({length:5 }).map((_,index) => (
                            <Tr key={index}>
                                <Td><Skeleton>01</Skeleton></Td>
                                <Td>
                                    <HStack>
                                        <SkeletonCircle>AD</SkeletonCircle> 
                                        <Text><Skeleton>Product Name</Skeleton></Text>
                                    </HStack>
                                </Td>

                                <Badge color="teal.300"><Skeleton>Yes</Skeleton></Badge>

                                <Td><Skeleton>12345678</Skeleton></Td>
                                <HStack>
                                    <SkeletonCircle>1</SkeletonCircle>
                                    <SkeletonCircle>2</SkeletonCircle>
                                    <SkeletonCircle>3</SkeletonCircle>
                                </HStack>
                           


                            </Tr> 

                                ))}
                        </Tbody>
                 
                    </Table>
                </TableContainer>
              

            </Box>



        </>
    )
}

export default ProductSkeleton