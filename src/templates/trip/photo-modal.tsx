import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function PhotoModal({
  open,
  images,
  selectedImageIndex,
  toggle,
  selectImageIndex,
}: {
  images: { description: string; image: IGatsbyImageData }[];
  selectedImageIndex: number;
  selectImageIndex: (index: number) => void;
  toggle: (open: boolean) => void;
  open: boolean;
}): JSX.Element {
  const photo = images?.[selectedImageIndex];

  useEffect(() => {
    function handleKeyUp({ key }: KeyboardEvent) {
      if (key === 'ArrowRight') handleNext();
      else if (key === 'ArrowLeft') handlePrev();
    }

    if (typeof window !== 'undefined') window.addEventListener('keyup', handleKeyUp);

    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('keyup', handleKeyUp);
    };
  }, [open, selectedImageIndex]);

  function handlePrev() {
    selectImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
  }

  function handleNext() {
    selectImageIndex((selectedImageIndex + 1) % images.length);
  }

  if (!photo) return <></>;

  const { image, description } = photo;

  return (
    <Modal isOpen={open} onClose={() => toggle(false)} size="xl">
      <ModalOverlay />
      <ModalContent sx={{ width: '90%' }}>
        <ModalHeader sx={{ minHeight: 'calc(32px + 1rem)' }} />
        <ModalCloseButton />
        <ModalBody as="figure" sx={{ padding: 0 }}>
          <Box aspectRatio={4 / 3} overflow="hidden">
            <GatsbyImage
              alt={description}
              image={image}
              style={{ height: '100%', width: '100%' }}
              title={description}
            />
          </Box>
          <Box as="figcaption" paddingTop={4} paddingX={4}>
            <Text color="gray.600" fontSize="0.9rem">
              {description}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter sx={{ justifyContent: 'space-between' }}>
          <Button leftIcon={<Icon as={IoChevronBack} />} onClick={handlePrev} variant="ghost">
            Précédent
          </Button>
          <Button onClick={handleNext} rightIcon={<Icon as={IoChevronForward} />} variant="ghost">
            Suivant
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PhotoModal;
