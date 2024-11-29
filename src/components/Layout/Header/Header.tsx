import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import Navbar from './Navbar/Navbar';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export type TNavList = {
  id: number;
  title: string;
  link?: string;
  isActive?: boolean;
  subMenu?: TNavList[];
};

const navList: TNavList[] = [
  {
    id: 1,
    title: '채용',
    subMenu: [
      { id: 0, title: '채용', link: '/#', isActive: true },
      { id: 1, title: '해외 개발자 원격 채용', link: '/#' },
      { id: 2, title: '외국인 원격 채용 (비개발)', link: '/#' },
      { id: 3, title: '한국어 가능 외국인 채용', link: '/#' },
    ],
  },
  { id: 2, title: '해외 개발자 활용 서비스', link: '/#' },
];

const Header = () => {
  return (
    <header className="flex container h-[60px] justify-between items-center">
      <Image src={logo} alt="logo" height={24} />
      <Navbar navList={navList} />
      <Button variant={'link'} asChild className="hidden md:block">
        <Link href={'/#'}>문의하기</Link>
      </Button>
      <MobileNavbar navList={navList} />
    </header>
  );
};

export default Header;
