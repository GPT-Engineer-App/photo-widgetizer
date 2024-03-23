import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Input, Grid, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [galleryTitle, setGalleryTitle] = useState("My Photo Gallery");
  const [photos, setPhotos] = useState(["https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b3xlbnwwfHx8fDE3MTExNzgwMzl8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvfGVufDB8fHx8MTcxMTE3ODA0MHww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1583912385562-a5b38f796ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwaG90b3xlbnwwfHx8fDE3MTExNzgwNDB8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1649694262988-4c457115731f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGhvdG98ZW58MHx8fHwxNzExMTc4MDQxfDA&ixlib=rb-4.0.3&q=80&w=1080"]);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddPhoto = () => {
    if (newPhotoUrl) {
      setPhotos([...photos, newPhotoUrl]);
      setNewPhotoUrl("");
      onClose();
    }
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        <Input value={galleryTitle} onChange={(e) => setGalleryTitle(e.target.value)} textAlign="center" variant="flushed" size="lg" />
      </Heading>
      <Box textAlign="center" marginBottom={8}>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={onOpen}>
          Add Photo
        </Button>
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
        {photos.map((photo, index) => (
          <Box key={index} position="relative">
            <Image src={photo} alt={`Photo ${index + 1}`} borderRadius="md" />
            <IconButton icon={<FaTrash />} colorScheme="red" size="sm" position="absolute" top={2} right={2} onClick={() => handleRemovePhoto(index)} />
          </Box>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Enter photo URL" value={newPhotoUrl} onChange={(e) => setNewPhotoUrl(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddPhoto}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
