'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import type { TNavList } from '../Header';
import { cn } from '@/utils/helpers';

interface IProps {
  navList: TNavList[];
}

const Navbar: React.FC<IProps> = ({ navList }) => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {navList.map((link) => {
          return link.subMenu ? (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[250px] gap-2 p-4 flex flex-col">
                  {link.subMenu.map((subLink) => (
                    <NavigationMenuLink key={subLink.id} title={subLink.title} href={subLink.link}>
                      <span className={cn(subLink.isActive ? 'font-[900]' : '')}>{subLink.title}</span>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink href={link.link} className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
