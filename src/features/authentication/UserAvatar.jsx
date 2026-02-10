import { useUser } from './useLogin';

function UserAvatar() {
  const { user, isLoading } = useUser();

  // 1. Handle loading state
  if (isLoading)
    return <div className="h-9 w-9 animate-pulse rounded-full bg-grey-200" />;

  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-3 text-sm font-medium text-grey-600">
      <img
        className="block aspect-square w-9 rounded-full object-cover object-center outline outline-2 outline-grey-100"
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
