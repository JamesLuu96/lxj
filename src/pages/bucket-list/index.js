import React from 'react'
import {Box, Text, useColorMode, useColorModeValue} from '@chakra-ui/react'
import PillPity from 'pill-pity';

export default function index() {
  const bg = useColorModeValue("brand.200", "brand.300")

    return (
        <div>
            <PillPity
            pattern={"anchors-away"}
            patternFill={bg}
            bgColor="transparent"
            patternOpacity={0.3}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            >
                <Box 
                    w={{base:"100%", sm: "95%", md:"80%",lg:"75%"}}
                    h="100vh"
                    textAlign="center" 
                    margin="10px" 
                    bg={useColorModeValue("secondary.200", "secondary.300")}
                    borderWidth="3px"
                    borderColor="secondary.600"
                >
                    <Text 
                        fontFamily="Arizonia" 
                        fontSize={["32px", "64px"]} 
                        color="secondary.700"
                        borderWidth="0 0 2px 0"
                        borderColor={useColorModeValue("secondary.300", "secondary.500")}
                        display="inline-block"
                    >
                        Bucket List
                    </Text>
                </Box>
            </PillPity>
        </div>
    )
}
