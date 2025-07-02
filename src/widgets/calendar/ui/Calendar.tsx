import { getMonthMatrix } from '@/widgets/calendar/lib/calendarUtils';
import { DAY_MONTH_WEEK, DAYS_KO } from '../model';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';
import { CalendarForm } from './CalendarForm';

// 첫 렌더링 = 당월
// 이후 < >로 수정된 월이 표시될 것
// 일정 입력 = 멤버, 메모, 시간(시작, 끝), 날짜(클릭 한 곳이 날짜로 들어가게)

// TODO : REACT HOOK FORM + ZOD 로 유효성 검사 및 폼 제출 코드 작성 및 테스트 코드 작성
// TODO : 일정 입력 목데이터 활용해서 기능 구현하기

export default function Calendar() {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const weeks = getMonthMatrix(year, month);
  const monthFormat = format(new Date(year, month), 'MMMM', { locale: ko }).padStart(3, '0');

  const mockMembers = [
    { id: 1, name: '김철수' },
    { id: 2, name: '이영희' },
    { id: 3, name: '박민수' },
  ];

  return (
    <div className='w-full h-full mx-auto bg-white rounded-xl shadow p-4 flex flex-col gap-4'>
      <div className='flex items-end justify-between'>
        <div className='flex gap-2 items-end'>
          <h1 className='text-6xl font-bold text-center'>{monthFormat}</h1>
          <div className='flex'>
            <ChevronLeft size={48} onClick={handlePrevMonth} className='cursor-pointer' />
            <ChevronRight size={48} onClick={handleNextMonth} className='cursor-pointer' />
          </div>
        </div>
        <div className='flex gap-3 text-3xl font-bold'>
          {DAY_MONTH_WEEK.map((d) => (
            <span key={d}>{d}</span>
          ))}
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
                <CalendarForm date={'2025-07-02'} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
