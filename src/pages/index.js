import Head from 'next/head'
import {Box, Text, useColorMode, useColorModeValue} from '@chakra-ui/react'
import PillPity from 'pill-pity';


export default function Home() {
  const bg = useColorModeValue("brand.200", "brand.300")
  return (
    <div>
      <PillPity
        pattern={"glamorous"}
        patternFill={bg}
        bgColor="transparent"
        patternOpacity={0.3}
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        >
            <Box 
                w={{base:"100%", sm: "95%", md:"80%",lg:"75%"}}
                h="fit-content"
                textAlign="center" 
                margin="10px"
            >
                <Text 
                    fontFamily="Arizonia" 
                    fontSize={["32px", "64px"]} 
                    color="secondary.700"
                    display="inline-block"
                    bg={useColorModeValue("secondary.200", "secondary.300")}
                    borderWidth="3px"
                    borderColor="secondary.600"
                    borderRadius="5%"
                    padding="8px 15px"
                >
                    {"Linh & James"}
                </Text>
            </Box>
        </PillPity>

    </div>
  )
}
