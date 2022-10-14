import { useState, useEffect } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme";
import Header from "../ui/Header";
import Main from "../ui/Main";
import ImageThumbnail from "../components/imageThumbnail";
import { fetchPhotos, searchPhotos } from "../services/api";
import SearchImage from "../components/searchImage";

export const App = () => {
  const [photos, setPhotos] = useState<Response[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchPhotos();
        setPhotos(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (keyword) {
      (async () => {
        try {
          const response = await searchPhotos({ query: keyword, per_page: 30 });
          setPhotos(response);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [keyword]);
  return (
    <ChakraProvider theme={theme}>
      <Flex height="full" width="full" flexDirection="column" padding={5}>
        <Header>
          <SearchImage keyword={keyword} setKeyword={setKeyword} />
        </Header>
        <Main>
          <Flex flexWrap="wrap" padding={5} width="full">
            {(photos || [])?.map((photo: any) => (
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
