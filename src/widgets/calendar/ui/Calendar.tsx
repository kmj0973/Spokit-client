import { getMonthMatrix } from '@/widgets/calendar/lib/calendarUtils';
import { DAYS_KO } from '../model/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

// 첫 렌더링 = 당월
// 이후 < >로 수정된 월이 표시될 것

export default function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const weeks = getMonthMatrix(year, month);
  const monthFormat = format(new Date(year, month), 'MMMM', { locale: ko });

  return (
    <div className='w-full h-full mx-auto bg-white rounded-xl shadow p-4 flex flex-col gap-4'>
      <div className='flex items-end justify-between'>
        <div className='flex gap-2 items-end'>
          <h1 className='text-6xl font-bold text-center'>{monthFormat}</h1>
          <div className='flex'>
            <ChevronLeft size={48} />
            <ChevronRight size={48} />
          </div>
        </div>
        <div className='flex gap-3 text-3xl font-bold'>
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
        </div>
      </div>
      <div className='w-full grid grid-cols-7 text-center font-bold text-sky-600'>
        {DAYS_KO.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className='flex-1 flex flex-col gap-1 justify-between'>
        {weeks.map((week, i) => (
          <div key={i} className='w-full h-full grid grid-cols-7 text-center'>
            {week.map((date, j) => (
              <div
                key={j}
                className='flex-1 flex items-center justify-center rounded hover:bg-sky-100 transition text-sky-900 text-sm border border-sky-100'
              >
                {date ?? ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
