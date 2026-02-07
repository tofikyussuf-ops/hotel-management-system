import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
// No more local state!
function AddCabin() {
  return (
    <div>
      <Modal>
        {/* Step 1: Tell the modal which "window" this button opens */}
        <Modal.Open opens="cabin-form">
          <Button variation="primary">Add New Cabin</Button>
        </Modal.Open>

        {/* Step 2: Define the window with a matching name */}
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
