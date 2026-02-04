// src/features/cabins/CabinRow.jsx
import ButtonText from '../../ui/ButtonText';
import { formatCurrency } from '../../utils/helpers';

function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    // TableRow replacement
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
        <ButtonText color="red" hasOutline>
          Delete
        </ButtonText>
      </div>
    </div>
  );
}

export default CabinRow;
