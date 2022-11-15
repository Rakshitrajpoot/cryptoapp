import { Container, HStack,VStack,Image,Heading,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const CoinsCard = ({id,name,img,symbol,price,currencySymbol="₹"}) => {
    return (
      <Link to={`/coin/${id}`} >
          <VStack w={"52"} shadow={'lg'} p={'8'} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
          css={{
            "&:hover":{
              transform:"scale(1.5)"
            }
          }}
          >
              <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"}></Image>
              <Heading size={"md"} noOfLines={1}>
                {symbol}
                </Heading>
              <Text noOfLines={1}>{name}</Text>
              <Text noOfLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Text>
          </VStack>
  
      </Link>
    )
  }

export default CoinsCard