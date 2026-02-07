import { useState } from 'react';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

function AddCabin() {
  const [isOpenModal, setisOpenModal] = useState(false);
  return (
    <>
      <div className="flex justify-start">
        <Button
          variation="primary"
          onClick={() => setisOpenModal((show) => !show)}
        >
          Add New Cabin
        </Button>
      </div>

      {isOpenModal && (
        <Modal onClose={() => setisOpenModal(false)}>
          <CreateCabinForm onClose={() => setisOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
