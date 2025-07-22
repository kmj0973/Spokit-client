import { NotificationIcon } from '@/shared/ui/icons/NotificationIcon';
import { SettingIcon } from '@/shared/ui/icons/SettingIcon';

export default function SidebarFooter() {
  return (
    <div className='w-full pt-6'>
      <div className='px-3 py-2 flex justify-start items-center cursor-pointer'>
        <NotificationIcon />
        <div className='ml-2 text-body2'>알림</div>
      </div>
      <div className='px-3 py-2 flex justify-start items-center cursor-pointer'>
        <SettingIcon />
        <div className='ml-2 text-body2'>설정</div>
      </div>
    </div>
  );
}
