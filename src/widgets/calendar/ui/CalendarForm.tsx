import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { calendarFormSchema, type FormData } from '../model';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/shared/ui/shadcn/components/select';

import { Input } from '@/shared/ui/shadcn/components/input';

import { Label } from '@/shared/ui/shadcn/components/label';

import { Button } from '@/shared/ui/shadcn/components/button';

import { Modal } from '@/widgets/modal/Modal';

const mockMembers = [
  { id: '1', name: '홍길동' },

  { id: '2', name: '김철수' },

  // ...etc
];

export function CalendarForm({ date }: { date: string }) {
  const {
    register,

    handleSubmit,

    setValue,

    formState: { errors },

    watch,
  } = useForm<FormData>({
    resolver: zodResolver(calendarFormSchema),

    defaultValues: {
      member: [],

      memo: '',

      startTime: '',

      endTime: '',

      date,
    },
  });

  // 멤버 복수 선택 예시 (Select 대신 Checkbox 등으로 구현 가능)

  const selectedMembers = watch('member');

  const handleMemberSelect = (memberId: string) => {
    console.log(memberId);
    const exists = selectedMembers.some((m) => m.id === memberId);

    if (exists) {
      setValue(
        'member',

        selectedMembers.filter((m) => m.id !== memberId),
      );
    } else {
      const member = mockMembers.find((m) => m.id === memberId);
      if (!member) return;
      setValue('member', [...selectedMembers, member]);
    }
  };

  // 시간/분 선택

  const handleTimeChange = (field: 'startTime' | 'endTime', hour: string, minute: string) => {
    setValue(field, `${hour}:${minute}`);
  };

  const onSubmit = (data: FormData) => {
    // submit 처리

    console.log('FormData:', data);
  };

  // 시/분 옵션

  const hourOptions = Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(2, '0'));

  const minuteOptions = ['00', '10', '20', '30', '40', '50'];

  return (
    <Modal trigger={<div className='h-full w-full'>{date ?? ''}</div>} title='일정 추가'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 my-4'>
        {/* 멤버 선택 */}

        <div>
          <Label>멤버 선택</Label>

          <Select onValueChange={handleMemberSelect}>
            <SelectTrigger>
              <SelectValue placeholder='멤버 선택' />
            </SelectTrigger>

            <SelectContent>
              {mockMembers.map((member) => (
                <SelectItem key={member.id} value={member.id}>
                  {member.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.member && <span className='text-red-500'>{errors.member.message as string}</span>}
        </div>

        <div className='flex gap-2 items-center'>
          <Label>시작 시간</Label>

          <Select
            onValueChange={(val) =>
              handleTimeChange('startTime', val, watch('startTime').split(':')[1] || '00')
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='시' />
            </SelectTrigger>

            <SelectContent>
              {hourOptions.map((h) => (
                <SelectItem key={h} value={h}>
                  {h}시
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(val) =>
              handleTimeChange('startTime', watch('startTime').split(':')[0] || '01', val)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='분' />
            </SelectTrigger>

            <SelectContent>
              {minuteOptions.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}분
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.startTime && (
            <span className='text-red-500'>{errors.startTime.message as string}</span>
          )}
        </div>

        <div className='flex gap-2 items-center'>
          <Label>종료 시간</Label>

          <Select
            onValueChange={(val) =>
              handleTimeChange('endTime', val, watch('endTime').split(':')[1] || '00')
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='시' />
            </SelectTrigger>

            <SelectContent>
              {hourOptions.map((h) => (
                <SelectItem key={h} value={h}>
                  {h}시
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(val) =>
              handleTimeChange('endTime', watch('endTime').split(':')[0] || '01', val)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='분' />
            </SelectTrigger>

            <SelectContent>
              {minuteOptions.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}분
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.endTime && (
            <span className='text-red-500'>{errors.endTime.message as string}</span>
          )}
        </div>

        <div>
          <Label htmlFor='memo'>일정 입력</Label>

          <Input id='memo' type='text' placeholder='메모 입력' {...register('memo')} />

          {errors.memo && <span className='text-red-500'>{errors.memo.message as string}</span>}
        </div>

        <input type='hidden' value={date} {...register('date')} />

        <Button type={'submit'} variant='outline' className='w-full'>
          저장
        </Button>
      </form>
    </Modal>
  );
}
