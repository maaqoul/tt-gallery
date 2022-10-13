import { AspectRatio, Image, useDisclosure } from "@chakra-ui/react";
import CustomModal from "../ui/Modal";

interface Props {
  thumbnailSrc: string;
  fullScreenImage: string;
}

export default function ImageThumbnail({
  thumbnailSrc,
  fullScreenImage,
}: Props): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        src={thumbnailSrc}
        objectFit="cover"
        boxSize="300px"
        _hover={{ boxSize: "400px", cursor: "pointer" }}
        margin="5"
        onClick={onOpen}
      />
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <AspectRatio>
          <Image src={fullScreenImage} width="full" height="full" />
        </AspectRatio>
      </CustomModal>
    </>
  );
}
