import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/Components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import { Head } from '@inertiajs/react';
import { ComponentElement, ReactElement } from 'react';

type PageProps = {
  experimentParams: App.Data.ExperimentParamDetailData[];
  links: string[] | null;
  nextUrl: string | null;
  prevUrl: string | null;
};

export default function Index({ experimentParams, links, nextUrl, prevUrl }: PageProps) {
  return (
    <>
      <Head title='Параметры экспериментов' />
      <Card>
        <CardHeader>
          <h1 className='mb-4 text-3xl font-bold'>Здесь будут параметры экспериментов</h1>
        </CardHeader>
        <CardContent>
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
        </CardContent>
        {links && (
          <CardFooter>
            <Pagination>
              <PaginationContent>
                <PaginationPrevious
                  href={prevUrl || '#'}
                  disabled={!prevUrl}
                  className='rounded-l-lg'
                />
                {links.map((link, index) => (
                  <PaginationItem key={link}>
                    <PaginationLink
                      disabled={location.href === link}
                      isActive={location.href === link}
                      href={link}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationNext
                  href={nextUrl || '#'}
                  disabled={!nextUrl}
                  className='rounded-r-lg'
                />
              </PaginationContent>
            </Pagination>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
