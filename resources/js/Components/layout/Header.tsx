import { Route } from '@/config/routes';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/Components/ui/navigation-menu';
import { Link } from '@inertiajs/react';
import { HTMLAttributes } from 'react';

type HeaderProps = {
  navRoutes: Route[];
} & HTMLAttributes<HTMLElement>;

export default function Header({ navRoutes, ...props }: HeaderProps) {
  return (
    <header className='bg-blue-300 py-4' {...props}>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList>
          {navRoutes.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link href={route(item.name)}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.linkText}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
