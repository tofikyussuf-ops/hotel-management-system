import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import ButtonIcon from './ButtonIcon';
import DarkModeToggle from './DarkMode';

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-2">
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser className="h-6 w-6 text-brand-600" />
        </ButtonIcon>
      </li>
      {/* Future: Add DarkModeToggle here */}
      <li>
        <DarkModeToggle />
      </li>
    </ul>
  );
}

export default HeaderMenu;
