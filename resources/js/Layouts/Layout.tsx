import { navRoutes } from '@/config/routes';
import { PropsWithChildren } from 'react';
import Header from '@/Components/layout/Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header navRoutes={navRoutes} />
      <main className='container py-5'>{children}</main>
    </>
  );
}
