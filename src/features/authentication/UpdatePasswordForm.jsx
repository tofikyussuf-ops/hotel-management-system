import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import { useUpdateUser } from './useUpdateUser';
import { useVerifyPassword } from './useVerifyPassword';
import { useUser } from './useLogin';

function UpdatePasswordForm() {
  const [isVerified, setIsVerified] = useState(false);
  const {
    user: { email },
  } = useUser();

  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();
  const { verifyPassword, isVerifying } = useVerifyPassword();

  function onSubmit(data) {
    const { currentPassword, password } = data;

    // STEP 1: If not verified yet, run the verification mutation
    if (!isVerified) {
      verifyPassword(
        { email, password: currentPassword },
        { onSuccess: () => setIsVerified(true) }
      );
      return;
    }

    // STEP 2: If verified, run the update mutation
    updateUser(
      { password },
      {
        onSuccess: () => {
          reset();
          setIsVerified(false);
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* ALWAYS SHOW CURRENT PASSWORD UNTIL VERIFIED */}
      {!isVerified && (
        <FormRow
          label="Current password"
          error={errors?.currentPassword?.message}
        >
          <Input
            type="password"
            id="currentPassword"
            autoComplete="current-password"
            disabled={isVerifying}
            {...register('currentPassword', {
              required: 'Please verify your current password first',
            })}
          />
        </FormRow>
      )}

      {/* REVEAL NEW PASSWORD FIELDS ONLY AFTER VERIFICATION */}
      {isVerified && (
        <>
          <FormRow
            label="New password (min 8 characters)"
            error={errors?.password?.message}
          >
            <Input
              type="password"
              id="password"
              autoComplete="new-password"
              disabled={isUpdating}
              {...register('password', {
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: 'Password needs a minimum of 8 characters',
                },
              })}
            />
          </FormRow>

          <FormRow
            label="Confirm password"
            error={errors?.passwordConfirm?.message}
          >
            <Input
              type="password"
              autoComplete="new-password"
              id="passwordConfirm"
              disabled={isUpdating}
              {...register('passwordConfirm', {
                required: 'This field is required',
                validate: (value) =>
                  getValues().password === value || 'Passwords need to match',
              })}
            />
          </FormRow>
        </>
      )}

      <FormRow>
        <Button
          onClick={() => {
            reset();
            setIsVerified(false);
          }}
          type="reset"
          variation="secondary"
        >
          Cancel
        </Button>
        <Button disabled={isVerifying || isUpdating}>
          {isVerified ? 'Update password' : 'Verify current password'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
