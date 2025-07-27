import { Plus } from 'lucide-react';
import { memo } from 'react';
import PageItem from './PageItem';

interface Page {
  id: string;
  title: string;
  type: 'personal' | 'shared';
}

interface Props {
  title: string;
  pages: Page[];
  selectedPageId: string | null;
  onSelectPage: (id: string) => void;
  onAddPage: () => void;
}

const SidebarSection = memo(({ title, pages, selectedPageId, onSelectPage, onAddPage }: Props) => {
  return (
    <div className='w-full mb-4 flex flex-col'>
      <div className='mx-3 my-4 text-label-medium'>{title}</div>
      <div className='flex flex-col'>
        {pages.map((page) => (
          <PageItem
            key={page.id}
            id={page.id}
            title={page.title}
            selected={selectedPageId === page.id}
            onSelect={onSelectPage}
          />
        ))}
        <div
          onClick={onAddPage}
          className='w-full rounded-[10px] px-3 py-2 text-[#adadae] flex justify-start items-center cursor-pointer hover:bg-gray-100'
        >
          <Plus />
          <span className='ml-2 text-body2'>새 페이지 추가</span>
        </div>
      </div>
    </div>
  );
});

SidebarSection.displayName = 'SidebarSection';

export default SidebarSection;
