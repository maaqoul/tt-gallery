import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme";
import Header from "../ui/Header";

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
      <Flex height="full" width="full">
        <Header>
          <Flex>options</Flex>
        </Header>
      </Flex>
    </ChakraProvider>
  );
};
