import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => {
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setPhotos(res);
        }
      });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" fontSize="xl" height="full" width="full">
        <Flex
          height="50px"
          width="full"
          flexDirection="column"
          alignItems="end"
        >
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Flex
          minH="100vh"
          p={2}
          flexDirection="row"
          flexWrap="wrap"
          width="full"
          justifyContent="space-evenly"
        >
          {photos.map((photo: any) => (
            <Flex flexDirection="column">
              <Image
                src={photo.urls.thumb}
                boxSize="300px"
                m="2"
                objectFit="cover"
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
