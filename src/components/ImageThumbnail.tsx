import { Image } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  thumbnailSrc: string;
}

export default function ImageThumbnail({ thumbnailSrc }: Props): JSX.Element {
  return (
    <Image
      src={thumbnailSrc}
      objectFit="cover"
      _hover={{ boxSize: "300px", cursor: "pointer" }}
      margin="5"
    />
  );
}
