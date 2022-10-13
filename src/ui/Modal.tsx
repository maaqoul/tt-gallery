import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Modal,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export default function CustomModal({
  isOpen,
  onClose,
  children,
}: Props): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton sx={{ zIndex: 100 }} />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
