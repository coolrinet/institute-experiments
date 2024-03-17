import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';
import { Head, Link } from '@inertiajs/react';

type PageProps = {
  experiment: App.Data.ExperimentData;
  inputParams: App.Data.ExperimentParamData[];
  outputParams: App.Data.ExperimentParamData[];
};

export default function Show(props: PageProps) {
  const { experiment, inputParams, outputParams } = props;

  return (
    <>
      <Head title={`Эксперимент "${experiment.name}"`} />

      <h1 className='mb-4 text-3xl font-bold'>Эксперимент №{experiment.id}</h1>

      <section className='flex flex-col gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Вводная информация</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <span className='font-medium'>Название эксперимента:</span> {experiment.name}
            </p>
            <p>
              <span className='font-medium'>Дата проведения:</span> {experiment.date}
            </p>
            <p>
              <span className='font-medium'>Установка:</span> {experiment.machinery.name}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Входные параметры</CardTitle>
          </CardHeader>
          <CardContent>
            {inputParams.map((param) => (
              <>
                <p className='py-3' key={param.paramDetail.id}>
                  <span className='font-medium'>{param.paramDetail.name}:</span> {param.value}
                </p>
                <Separator />
              </>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Выходные параметры</CardTitle>
          </CardHeader>
          <CardContent>
            {outputParams.map((param) => (
              <>
                <p className='py-3' key={param.paramDetail.id}>
                  <span className='font-medium'>{param.paramDetail.name}:</span> {param.value}
                </p>
                <Separator />
              </>
            ))}
          </CardContent>
        </Card>

        <Link href={route('experiments.index')} className='hover:underline'>
          Вернуться назад
        </Link>
      </section>
    </>
  );
}
