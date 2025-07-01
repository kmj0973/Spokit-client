import { getMonthMatrix } from '@/widgets/calendar/lib/calendarUtils';
import { DAY_MONTH_WEEK, DAYS_KO } from '../model/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/shadcn/components/dialog';
import { Input } from '@/shared/ui/shadcn/components/input';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcn/components/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn/components/select';
import { Label } from '@/shared/ui/shadcn/components/label';

// 첫 렌더링 = 당월
// 이후 < >로 수정된 월이 표시될 것
// 일정 입력 = 멤버, 메모, 시간(시작, 끝), 날짜(클릭 한 곳이 날짜로 들어가게)
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
                <Dialog>
                  <DialogTrigger asChild>
                    <div className='h-full w-full'>{date ?? ''}</div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>일정 추가</DialogTitle>
                      <DialogDescription className='flex flex-col gap-4 my-4'>
                        <div className='flex gap-4 items-center justify-between'>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder='멤버 선택' />
                            </SelectTrigger>
                            <SelectContent>
                              {mockMembers.map((member) => (
                                <SelectItem key={member.id} value={member.id.toString()}>
                                  {member.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <div className='flex gap-2 items-center'>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder='시간 선택' />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i).map((i) => (
                                  <SelectItem key={i} value={i.toString()}>
                                    {i}시
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <RadioGroup className='flex gap-2'>
                              <Label htmlFor='start_am'>AM</Label>
                              <RadioGroupItem value='1' id='start_am' />
                              <Label htmlFor='start_pm'>PM</Label>
                              <RadioGroupItem value='2' id='start_pm' />
                            </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor='memo' className='mb-2'>
                            일정 입력
                          </Label>
                          <Input type='text' placeholder='메모 입력' id='memo' />
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
