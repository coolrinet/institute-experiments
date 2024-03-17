import { navRoutes } from '@/config/routes';
import { PropsWithChildren } from 'react';
import { Link } from '@inertiajs/react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header className='bg-blue-300 py-4'>
        <nav className='container flex items-center justify-center gap-5'>
          {navRoutes.map((item) => (
            <Link
              className='transition-colors hover:text-white'
              key={item.name}
              href={route(item.name)}
            >
              {item.linkText}
            </Link>
          ))}
        </nav>
      </header>
      <main className='container pt-5'>{children}</main>
    </>
  );
}
