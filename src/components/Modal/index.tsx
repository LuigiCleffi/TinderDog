import { Button, Modal, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

function CustomModal({ onClose, open, title, description, children, ...props }: CustomModalProps) {

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleModalClose = () => {
    setIsOpen(false);
    onClose();
  };
  return (

    <Modal open={isOpen} onClose={handleModalClose} {...props}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        {description && (
          <Text>{description}</Text>
        )}
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button color="secondary" fullWidth onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;