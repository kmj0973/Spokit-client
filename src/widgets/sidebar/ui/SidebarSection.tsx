import { MoreIcon } from '@/shared/ui/icons/MoreIcon';
import { SettingIcon } from '@/shared/ui/icons/SettingIcon';
import { Plus } from 'lucide-react';

type Props = {
  title: string;
};

export const SidebarSection = ({ title }: Props) => {
  return (
    <div className='w-full mb-4 flex flex-col'>
      <div className='mx-3 my-4 text-label-medium flex justify-start'>{title}</div>
      <div className='flex flex-col'>
        {title == '개인 공간' && (
          <>
            <div className='w-full debossed rounded-[10px] px-3 py-2 bg-[#F5F6FA] text-[#6473E8] flex justify-between items-center cursor-pointer'>
              <div className='flex justify-center items-center'>
                <SettingIcon color='#6473E8' />
                <span className='ml-2 text-body2-medium'>Label</span>
              </div>
              <MoreIcon color='#6473E8' />
            </div>
            <div className='w-full rounded-[10px] px-3 py-2 flex justify-between items-center cursor-pointer'>
              <div className='flex justify-center items-center '>
                <SettingIcon />
                <span className='ml-2 text-body2'>Label</span>
              </div>
            </div>
          </>
        )}
        <div className='w-full rounded-[10px] px-3 py-2 text-[#adadae] flex justify-start items-center cursor-pointer'>
          <Plus />
          <span className='ml-2 text-body2'>새 페이지 추가</span>
        </div>
      </div>
    </div>
  );
};
