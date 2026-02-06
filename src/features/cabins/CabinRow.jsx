// src/features/cabins/CabinRow.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteCabin } from '../../services/apiCabins';
import ButtonText from '../../ui/ButtonText';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
function CabinRow({ cabin }) {
  const {
    id: cabinID,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => toast.error(err.message),
  });
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
          <ButtonText
            onClick={() => mutate(cabinID)}
            disabled={isDeleting}
            color="grey"
            hasOutline
          >
            Delete
          </ButtonText>
          <ButtonText
            color="grey"
            hasOutline
            onClick={() => setShowForm(!showForm)}
          >
            Edit
          </ButtonText>
        </div>
      </div>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
