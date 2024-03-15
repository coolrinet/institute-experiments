import { Head } from '@inertiajs/react';
import styles from './Welcome.module.css';

export default function Welcome() {
  return (
    <>
      <Head title='Добро пожаловать' />
      <h1 className={styles.heading}>Привет, мир!</h1>
    </>
  );
}
