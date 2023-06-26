import React, { useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { updateItem } from "../../../../services/api.service";
import { useMutation } from "@tanstack/react-query";
import { EmployeesDTO } from "../..";

const RegisterUser: React.FC<any> = () => {
  const mutation = useMutation((data: EmployeesDTO) => updateItem<EmployeesDTO | null>("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/", data))
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [section, setSection] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState<number>(100);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const handleSubmit = async () => {
    try {
      const updatedEmployee = {
        id: (id + 1).toString(),
        nome: name,
        email: email,
        departamento: section,
        endereco: address,
      };

      const data = await mutation.mutateAsync(updatedEmployee);

      if (mutation.status) {
        console.log(updatedEmployee)
        console.log(data);
        closeModal();
      } else {
        console.log({
          status: 400,
          message: "account not created",
        });
      }
    } catch (error) {
      console.error("An error occurred while updating the employee:", error);
    }
  };

  return (
    <div>
      <Button
        shadow
        css={{
          height: "100%",
          fontSize: "20px",
        }}
        size="xs"
        color="secondary"
        onPress={openModal}
      >
        +
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
        css={{
          backgroundColor: "#DDE6ED",
        }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            New{" "}
            <Text b size={18}>
              Employee
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Close
          </Button>
          <Button auto onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterUser;
