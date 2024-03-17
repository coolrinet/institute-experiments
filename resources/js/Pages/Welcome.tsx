import { Head } from '@inertiajs/react';

export default function Welcome() {
  return (
    <>
      <Head title='Добро пожаловать' />
      <h1 className='select-none text-center text-4xl font-bold italic transition-colors hover:text-red-600'>
        Привет, мир!
      </h1>
    </>
  );
}
