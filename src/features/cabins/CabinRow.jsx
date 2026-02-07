// src/features/cabins/CabinRow.jsx
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import { useCreateCabin } from './useCreateCabin';
import { useDeleteCabin } from './useDeleteCabin';

function CabinRow({ cabin }) {
  const { isCreating, createCabin } = useCreateCabin();

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  function handleDuplicate() {
    createCabin({
      newCabinData: {
        name: `Copy of ${name}`,
        maxCapacity,
        regularPrice,
        discount,
        image,
        description,
      },
    });
  }
  const isWorking = isDeleting || isCreating;
  return (
    // TableRow replacement
    <>
      <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-[2.4rem] border-b border-grey-100 px-[2.4rem] py-[1.4rem] last:border-b-0">
        {/* Img replacement */}
        <img
          src={image}
          alt={`Cabin ${name}`}
          className="block aspect-[3/2] w-[6.4rem] -translate-x-[7px] scale-[1.5] object-cover object-center"
        />
        {/* Cabin replacement */}
        <div className="font-sono text-[1.6rem] font-semibold text-grey-600">
          {name}
        </div>
        <div>Fits up to {maxCapacity} guests</div>
        {/* Price replacement */}
        <div className="font-sono font-semibold">
          {formatCurrency(regularPrice)}
        </div>
        {/* Discount replacement */}
        <div className="font-sono font-medium text-green-700">
          {discount ? formatCurrency(discount) : <span>&mdash;</span>}
        </div>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />

              <Menus.List id={cabinId}>
                {/* Duplicate doesn't need a modal, just a button */}
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                  disabled={isWorking}
                >
                  Duplicate
                </Menus.Button>

                {/* Edit needs a modal window */}
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                {/* Delete needs a modal window */}
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              {/* Modal Windows remain here, triggered by the buttons above */}
              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="cabins"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(cabinId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
        {/* --- MENU APPLICATION ENDS HERE --- */}
      </div>
    </>
  );
}

export default CabinRow;
