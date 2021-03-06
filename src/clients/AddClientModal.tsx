import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  InputGroup, InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';

interface AddClientModalProps {
  shown: boolean,
  onClose: () => void,
  addClient: (name: string, email: string, phone: string, address: string) => void,
}

const AddClientModal = (props: AddClientModalProps) => {
  const { shown, onClose, addClient } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  }

  const handleSubmit = () => {
    addClient(name, email, phone, address);
    resetFields();
  }

  const handleClose = () => {
    onClose();
    resetFields();
  }

  return (
    <Modal isOpen={shown} onClose={handleClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a client</ModalHeader>

        <ModalBody>
          <Stack spacing={4}>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiUser />
                </InputLeftElement>

                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiMail />
                </InputLeftElement>

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiPhone />
                </InputLeftElement>

                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiHome />
                </InputLeftElement>

                <Input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  autoComplete="street-address"
                />
              </InputGroup>
            </FormControl>

          </Stack>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>

            <Button onClick={handleClose}>Cancel</Button>
            <Button colorScheme="teal" onClick={handleSubmit}>Save</Button>
          </ButtonGroup>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddClientModal;