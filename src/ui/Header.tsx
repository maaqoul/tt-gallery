import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

interface Props {
  children: JSX.Element;
}
export default function Header({ children }: Props): JSX.Element {
  return (
    <Flex justifyContent="space-between" width="full" height="30px">
      {children}
      <ColorModeSwitcher />
    </Flex>
  );
}
