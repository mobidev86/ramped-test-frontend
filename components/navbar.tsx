import { SketchLogoIcon } from '@radix-ui/react-icons';
import { LogoutBtn } from './auth/logout-btn';

export const Navbar = () => {
    return (
        <div className="py-8 px-[100px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 h-16 shadow-lg flex items-center justify-between text-white">
            <SketchLogoIcon width={25} height={25} />
            <LogoutBtn />
        </div>
    )
}