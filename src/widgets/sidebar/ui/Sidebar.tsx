import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';
import { SidebarSection } from './SidebarSection';

export default function Sidebar() {
  return (
    <div className='max-w-[260px] h-screen p-6 text-[#2c2c2d] bg-[#FCFCFD] flex flex-col justify-between items-center'>
      <div className='w-full'>
        <SidebarHeader />
        <SidebarSection title='개인 공간' />
        <div id='divider' className='w-full h-[1px] bg-[#e2e2e4]' />
        <SidebarSection title='공유 공간' />
      </div>
      <SidebarFooter />
    </div>
  );
}
