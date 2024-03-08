import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack p={3} bg="#d0e7d2" justify="center" w='100%' bottom={0}>
      <Text color="#618264">
        Designed and developed by{" "}
        <Link href="https://github.com/ThilakRamanie" isExternal color="black">
          Thilak Ramanie
        </Link>{" "}
      </Text>
    </HStack>
  );
};

export default Footer;
