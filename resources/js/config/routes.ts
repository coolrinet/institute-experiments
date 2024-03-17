import { RouteList } from 'ziggy-js';

export type Route = {
  linkText: string;
  name: keyof RouteList;
};

export const navRoutes: Route[] = [
  {
    linkText: 'Главная',
    name: 'welcome',
  },
  {
    linkText: 'Установки',
    name: 'machineries.index',
  },
  {
    linkText: 'Параметры экспериментов',
    name: 'experiment_params.index',
  },
  {
    linkText: 'Эксперименты',
    name: 'experiments.index',
  },
];
