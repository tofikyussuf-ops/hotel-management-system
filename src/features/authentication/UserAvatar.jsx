import { useUser } from './useLogin';

function UserAvatar() {
  const { user, isLoading } = useUser();

  // Handle loading state with theme-aware colors
  if (isLoading)
    return (
      <div className="h-14 w-14 animate-pulse rounded-full bg-[var(--color-grey-200)]" />
    );

  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-4 text-lg font-semibold text-[var(--color-grey-600)]">
      <img
        className="block aspect-square w-14 rounded-full object-cover object-center outline outline-2 outline-[var(--color-grey-100)]"
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
