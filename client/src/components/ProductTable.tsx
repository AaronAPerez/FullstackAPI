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
import ProductSkeleton from './ProductSkeleton';
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';

interface Product {
    price: number;
    id: number;
    name: string;
    description: string;
    isInStore: boolean;
}

const ProductTable = () => {

    const [data, setData] = useState<Product[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [error, setError] = useState("");

    const fetchData = () => {
        setisLoading(true)
        axios
            .get(BASE_URL + "Product")
            .then(response => {
                setData(response.data)
            }).catch(error => {
                console.log(error);
                setError(error);

            }).finally(() => {
                setisLoading(false)
            })

    }

    useEffect(() => {

        fetchData();
    }, [])


    if(isLoading) return <ProductSkeleton/>

    return (
        <>

            <ColorModeSwitch />
            <Box m={12} shadow={'md'} rounded={'md'}>
                <Flex justifyContent={'space-between'} px={'5'}>
                    <Heading>
                        Product List
                    </Heading>
                    <Button color="teal.300" leftIcon={<AddIcon/>}>
                    Add Product
                    </Button>
                    {/* <Button color="teal.300" leftIcon={<AddIcon/>}> */}
                </Flex>




                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                       
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Is In Stock</Th>
                                <Th isNumeric>Price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((product: Product) => (
                                    <Tr key={product.id}>
                                        <Td>{product.id}</Td>
                                        <Td>
                                            <HStack>
                                                <Avatar name={product.name}/>
                                                <Text>{product.name}</Text>
                                            </HStack>
                                        </Td>

                                        <Badge color="teal.300">Yes</Badge>



                                        <Td>{product.description}</Td>
                                        <Td>{product.isInStore}</Td>
                                        <Td>{product.price}</Td>
                                        <HStack>
                                            <EditIcon boxSize={23} color={"orange.200"}/>
                                            <DeleteIcon boxSize={23} color={"red.300"}/>
                                            <ViewIcon boxSize={23} color={"blue.200"}/>
                                        </HStack>
                                    </Tr>
                                ))}
                        </Tbody>
              
                    </Table>
                </TableContainer>
                {data.length == 0 && <Heading fontSize={24}>No Data</Heading>}

            </Box>



        </>
    )
}

export default ProductTable