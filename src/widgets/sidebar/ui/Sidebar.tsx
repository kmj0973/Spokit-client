import { Plus } from 'lucide-react';
import Setting from '@/assets/setting.svg';
import More from '@/assets/more.svg';
import Notification from '@/assets/notification.svg';
import SidebarHeader from './SidebarHeader';
export default function Sidebar() {
  return (
    <div className='max-w-[260px] h-screen p-6 flex flex-col justify-between items-center text-[#2c2c2d] bg-[#FCFCFD]'>
      <div className='w-full'>
        <SidebarHeader />
        <div className='w-full flex flex-col mb-4'>
          <div className='mx-3 my-4 flex justify-start text-label'>개인 공간</div>
          <div className='flex flex-col text-body2'>
            <div className='w-full debossed rounded-[10px] px-3 py-2 flex justify-between items-center bg-[#F5F6FA] text-[#6473E8]'>
              <div className='flex justify-center items-center'>
                <img src={Setting} />
                <span className='ml-2'>Label</span>
              </div>
              <img src={More} />
            </div>
            <div className='w-full rounded-[10px] px-3 py-2 flex justify-between items-center'>
              <div className='flex justify-center items-center'>
                <img src={Setting} />
                <span className='ml-2'>Label</span>
              </div>
            </div>

            <div className='w-full rounded-[10px] px-3 py-2 flex justify-ar items-center text-[#adadae]'>
              <Plus />
              <span className='ml-2'>새 페이지 추가</span>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#e2e2e4]'></div>
        <div className='w-full flex flex-col'>
          <div className='mx-3 my-4 flex justify-start text-label'>공유 공간</div>
          <div className='flex flex-col text-body2'>
            <div className='w-full rounded-[10px] px-3 py-2 flex justify-ar items-center text-[#adadae]'>
              <Plus />
              <span className='ml-2 text-body2'>새 페이지 추가</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full pt-6'>
        <div className='flex justify-start items-center px-3 py-2'>
          <img src={Notification} />
          <div className='ml-2'>알림</div>
        </div>
        <div className='flex justify-start items-center px-3 py-2'>
          <img src={Setting} />
          <div className='ml-2'>설정</div>
        </div>
      </div>
    </div>
  );
}
