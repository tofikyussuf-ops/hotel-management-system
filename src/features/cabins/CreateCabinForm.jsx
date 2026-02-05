import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';

function CreateCabinForm() {
  // 1. Initialize the form hook
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    // Logic for Supabase mutation goes here later!
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* --- CABIN NAME --- */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 first:pt-0 last:border-0 last:pb-0">
        <label className="font-medium text-grey-700" htmlFor="name">
          Cabin name
        </label>
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
        {errors?.name?.message && (
          <span className="text-sm text-red-700">{errors.name.message}</span>
        )}
      </div>

      {/* --- MAX CAPACITY --- */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 last:border-0">
        <label className="font-medium text-grey-700" htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <Input
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
        {errors?.maxCapacity?.message && (
          <span className="text-sm text-red-700">
            {errors.maxCapacity.message}
          </span>
        )}
      </div>

      {/* --- REGULAR PRICE --- */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 last:border-0">
        <label className="font-medium text-grey-700" htmlFor="regularPrice">
          Regular price
        </label>
        <Input
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 1, message: 'Price should be at least 1' },
          })}
        />
        {errors?.regularPrice?.message && (
          <span className="text-sm text-red-700">
            {errors.regularPrice.message}
          </span>
        )}
      </div>

      {/* --- DISCOUNT --- */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 last:border-0">
        <label className="font-medium text-grey-700" htmlFor="discount">
          Discount
        </label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              'Discount should be less than regular price',
          })}
        />
        {errors?.discount?.message && (
          <span className="text-sm text-red-700">
            {errors.discount.message}
          </span>
        )}
      </div>

      {/* --- DESCRIPTION --- */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 last:border-0">
        <label className="font-medium text-grey-700" htmlFor="description">
          Description for website
        </label>
        <Textarea
          id="description"
          defaultValue=""
          {...register('description', { required: 'This field is required' })}
        />
        {errors?.description?.message && (
          <span className="text-sm text-red-700">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* --- IMAGE --- */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 border-b border-grey-100 py-5 last:border-0">
        <label className="font-medium text-grey-700" htmlFor="image">
          Cabin photo
        </label>
        <FileInput id="image" accept="image/*" />
      </div>

      {/* --- BUTTONS --- */}
      <div className="flex justify-end gap-3 py-5">
        <Button variation="secondary" type="reset" onClick={() => reset()}>
          Cancel
        </Button>
        <Button>Add cabin</Button>
      </div>
    </Form>
  );
}

export default CreateCabinForm;
