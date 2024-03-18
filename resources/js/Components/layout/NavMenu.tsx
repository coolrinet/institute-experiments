import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Link, usePage } from '@inertiajs/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/Components/ui/navigation-menu';
import { Route } from '@/config/routes';
import { ComponentProps, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/Components/ui/sheet';

type NavMenuProps = {
  navRoutes: Route[];
} & ComponentProps<typeof NavigationMenu>;

function BurgerMenu({ children }: PropsWithChildren) {
  return (
    <Sheet>
      <SheetTrigger>Бургер</SheetTrigger>
      <SheetContent side='right'>{children}</SheetContent>
    </Sheet>
  );
}

export default function NavMenu({ navRoutes, className, ...props }: NavMenuProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const { url } = usePage();

  return isDesktop ? (
    <NavigationMenu className={cn('mx-auto', className)} {...props}>
      <NavigationMenuList>
        {navRoutes.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              asChild={true}
              active={route(item.name).endsWith(url.split('?')[0])}
              className={navigationMenuTriggerStyle()}
            >
              <Link href={route(item.name)}>{item.linkText}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <BurgerMenu>
      <NavigationMenu orientation='vertical' className={cn(className)} {...props}>
        <NavigationMenuList className='flex-col items-start'>
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
    </BurgerMenu>
  );
}
