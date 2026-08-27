export interface StatItem {
  id: string;
  valueNumber: number;
  prefix?: string;
  suffix: string;
  labelKey: string;
}

export const statsData: StatItem[] = [
  {
    id: 'years',
    valueNumber: 20,
    suffix: '+',
    labelKey: 'years'
  },
  {
    id: 'payload',
    valueNumber: 1500,
    suffix: ' КГ',
    labelKey: 'payload'
  },
  {
    id: 'speed',
    valueNumber: 70,
    suffix: ' КМ/Ч',
    labelKey: 'speed'
  },
  {
    id: 'fuel',
    prefix: 'ОТ ',
    valueNumber: 6,
    suffix: ' Л/100',
    labelKey: 'fuel'
  },
  {
    id: 'dealers',
    valueNumber: 17,
    suffix: ' ТОЧЕК',
    labelKey: 'dealersCount'
  },
  {
    id: 'warranty',
    valueNumber: 2,
    suffix: ' МЕСЯЦА',
    labelKey: 'warranty'
  }
];
