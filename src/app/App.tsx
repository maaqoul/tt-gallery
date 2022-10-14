import { useState, useEffect } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme";
import Header from "../ui/Header";
import Main from "../ui/Main";
import ImageThumbnail from "../components/imageThumbnail";
import { fetchPhotos, searchPhotos } from "../services/api";
import SearchImage from "../components/searchImage";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrrorMessage";

export const App = () => {
  const [photos, setPhotos] = useState<Response[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchPhotos();
        setPhotos(response);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
        setIsError(true);
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
          setIsLoading(false);
          setIsError(true);
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
          {isLoading && <Loader />}
          {isError ? (
            <ErrorMessage />
          ) : (
            <Flex flexWrap="wrap" padding={5} width="full">
              {(photos || [])?.map((photo: any) => (
                <ImageThumbnail
                  key={photo.id}
                  fullScreenImage={photo.urls.regular}
                  thumbnailSrc={photo.urls.small}
                />
              ))}
            </Flex>
          )}
        </Main>
      </Flex>
    </ChakraProvider>
  );
};
