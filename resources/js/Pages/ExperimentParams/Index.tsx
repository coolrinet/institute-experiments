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
  experimentParams: App.Data.ExperimentParamDetailData[];
};

export default function Index({ experimentParams }: PageProps) {
  return (
    <>
      <Head title='Параметры экспериментов' />
      <h1 className='mb-4 text-3xl font-bold'>Здесь будут параметры экспериментов</h1>
      {!experimentParams.length ? (
        <p>Пока параметров нет...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Название</TableHead>
              <TableHead>Входной или выходной</TableHead>
              <TableHead>Тип параметра</TableHead>
              <TableHead>Установка (если параметр общий, то прочерк)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {experimentParams.map((experimentParam) => (
              <TableRow key={experimentParam.id}>
                <TableCell>{experimentParam.id}</TableCell>
                <TableCell>{experimentParam.name}</TableCell>
                <TableCell>{experimentParam.isOutput ? 'выходной' : 'входной'}</TableCell>
                <TableCell>
                  {experimentParam.isQuantitative ? 'количественный' : 'качественный'}
                </TableCell>
                <TableCell>{experimentParam.machinery?.name || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
