import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element;
}
export default function Main({ children }: Props): JSX.Element {
  return <Flex width="full" height="full"></Flex>;
}
