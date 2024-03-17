import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import { Head } from '@inertiajs/react';

type PageProps = {
  machineries: App.Data.MachineryData[];
};

export default function Index({ machineries }: PageProps) {
  return (
    <>
      <Head title='Установки' />
      <h1 className='mb-4 text-3xl font-bold'>Здесь будут установки</h1>
      {!machineries.length ? (
        <p>Пока установок нет...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Название</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {machineries.map((machinery) => (
              <TableRow key={machinery.id}>
                <TableCell>{machinery.id}</TableCell>
                <TableCell>{machinery.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
