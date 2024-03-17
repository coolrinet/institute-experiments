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
      <NavigationMenu className='container'>
        <NavigationMenuList className='gap-3'>
          {navRoutes.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                asChild={true}
                active={route(item.name) === location.href}
                className={navigationMenuTriggerStyle()}
              >
                <Link href={route(item.name)}>{item.linkText}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
