import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import { Head, router } from '@inertiajs/react';

type PageProps = {
  experiments: App.Data.ExperimentData[];
};

export default function Index({ experiments }: PageProps) {
  function onRowClick(experimentId: number) {
    const experimentRoute = route('experiments.show', experimentId);

    router.get(experimentRoute);
  }

  return (
    <>
      <Head title='Эксперименты' />
      <h1 className='mb-4 text-3xl font-bold'>Здесь будут эксперименты</h1>
      {!experiments.length ? (
        <p>Пока экспериментов нет...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Название</TableHead>
              <TableHead>Дата проведения</TableHead>
              <TableHead>Установка</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {experiments.map((experiment) => (
              <TableRow
                onClick={() => onRowClick(experiment.id)}
                className='cursor-pointer'
                key={experiment.id}
              >
                <TableCell>{experiment.id}</TableCell>
                <TableCell>{experiment.name}</TableCell>
                <TableCell>{experiment.date}</TableCell>
                <TableCell>{experiment.machinery.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
