import { useEffect, useState } from "react";
import CustomModal from "../../../../components/Modal";

function NotFound({ employeeId }: { employeeId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (employeeId) {
      handleModalOpen();
    }
  }, [employeeId]);

  return <CustomModal
    open={isOpen}
    onClose={handleModalClose}
    title="User ID Not Found"
    description={`Oops! The user with ID "${employeeId}" was not found.`}
  />
}


export default NotFound