import SampleImage from '@/assets/sampleImage.svg';
import { ChevronLeft } from 'lucide-react';

export default function SidebarHeader() {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div className='w-full mb-6 flex justify-between items-center'>
      <div className='px-3 py-2 flex justify-center items-center gap-2 text-body2'>
        <img src={SampleImage} />
        <div>프로필</div>
      </div>
      <div
        onClick={handleClick}
        className='embossed p-2 bg-cal-btn-bg rounded-full flex items-center justify-center cursor-pointer '
      >
        <ChevronLeft size={18} color='white' />
      </div>
    </div>
  );
}
