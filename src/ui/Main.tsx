import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Main({ children }: Props): JSX.Element {
  return (
    <Flex width="full" height="full" flexDirection="column">
      {children}
    </Flex>
  );
}
