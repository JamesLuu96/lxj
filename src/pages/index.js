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
                fontFamily="Lobster"
            >
                <Text
                  mt="10px"
                  fontSize={["32px", "64px"]}
                  fontFamily="Leckerli One"
                  borderRadius="50%"
                  borderWidth="2px"
                  borderColor={useColorModeValue('black', 'white')}
                  display="inline-block"
                  padding="10px"
                  className="logo"
                >
                  <span className="l">L</span>+<span className="j">J</span>
                </Text>

                <Text 
                  fontSize={["32px", "64px"]}
                  color={useColorModeValue("brand.500", "white")}
                >
                  Welcome to Our Story
                </Text>

            </Box>
        </PillPity>

    </div>
  )
}
