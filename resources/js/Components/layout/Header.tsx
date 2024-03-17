import { Route } from '@/config/routes';
import { ComponentPropsWithoutRef } from 'react';
import NavMenu from '@/Components/layout/NavMenu';

type HeaderProps = {
  navRoutes: Route[];
} & ComponentPropsWithoutRef<'header'>;

export default function Header({ navRoutes, ...props }: HeaderProps) {
  return (
    <header className='bg-blue-300 p-4' {...props}>
      <NavMenu navRoutes={navRoutes} />
    </header>
  );
}
