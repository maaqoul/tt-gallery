import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme";
import Header from "../ui/Header";
import Main from "../ui/Main";
import ImageThumbnail from "../components/ImageThumbnail";
import { fetchPhotos } from "../services/api";

export const App = () => {
  const [photos, setPhotos] = React.useState<Response[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetchPhotos();
        setPhotos(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Flex height="full" width="full" flexDirection="column" padding={5}>
        <Header>
          <Flex>options</Flex>
        </Header>
        <Main>
          <Flex flexWrap="wrap" padding={5} width="full">
            {photos.map((photo: any) => (
              <ImageThumbnail
                key={photo.id}
                fullScreenImage={photo.urls.regular}
                thumbnailSrc={photo.urls.small}
              />
            ))}
          </Flex>
        </Main>
      </Flex>
    </ChakraProvider>
  );
};
