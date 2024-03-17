import { Box, Heading, Icon, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { IoThumbsDown } from 'react-icons/io5';

function Cons({ items }: { items: string[] }): JSX.Element {
  if (items.length === 0) return <></>;

  return (
    <Box
      bgColor="red.50"
      borderRadius={16}
      display="flex"
      flexDirection="column"
      gap={3}
      padding={6}
    >
      <Box alignItems="center" display="flex" gap={2}>
        <Icon as={IoThumbsDown} boxSize={4} color="red.500" />
        <Heading as="h4" color="red.500" fontSize="1rem" fontWeight={700}>
          Ce qu'on a moins aimé
        </Heading>
      </Box>
      <UnorderedList>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Cons;
