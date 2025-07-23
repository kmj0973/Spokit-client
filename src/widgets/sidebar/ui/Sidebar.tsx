import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import SidebarHeader from './SidebarHeader';
import SidebarSection from './SidebarSection';
import SidebarFooter from './SidebarFooter';

interface Page {
  id: string;
  title: string;
  type: 'personal' | 'shared';
}

/* 페이지 mock데이터 */
const initialPages: Page[] = [
  { id: '1', title: '개인 페이지 1', type: 'personal' },
  { id: '2', title: '개인 페이지 2', type: 'personal' },
  { id: '3', title: '공유 페이지 1', type: 'shared' },
];

export default function Sidebar() {
  const [pages, setPages] = useState<Page[]>(initialPages);

  const location = useLocation();
  const navigate = useNavigate();

  /* 선택된 페이지 아이디 */
  const selectedPageId = location.pathname.split('/')[2];

  /* 새 페이지 추가 */
  const addPage = (type: 'personal' | 'shared') => {
    const newPage = {
      id: Math.random().toString(36).slice(2),
      title: type === 'personal' ? '개인 새 페이지' : '공유 새 페이지',
      type,
    };
    setPages((prev) => [...prev, newPage]);
  };

  /* 섹션별 페이지 필터링 */
  const personalPages = useMemo(() => pages.filter((p) => p.type === 'personal'), [pages]);
  const sharedPages = useMemo(() => pages.filter((p) => p.type === 'shared'), [pages]);

  return (
    <div className='min-w-[260px] h-screen p-6 text-sidebar-text-base bg-sidebar-bg flex flex-col justify-between items-center'>
      <div className='w-full'>
        <SidebarHeader />
        <SidebarSection
          title='개인 공간'
          pages={personalPages} //필터링된 mock 페이지 데이터
          selectedPageId={selectedPageId} // 선택된 페이지 id
          onSelectPage={(id) => navigate(`/personal/${id}`)}
          onAddPage={() => addPage('personal')}
        />
        <div id='divider' className='w-full h-[1px] bg-[#e2e2e4]' />
        <SidebarSection
          title='공유 공간'
          pages={sharedPages}
          selectedPageId={selectedPageId}
          onSelectPage={(id) => navigate(`/shared/${id}`)}
          onAddPage={() => addPage('shared')}
        />
      </div>
      <SidebarFooter />
    </div>
  );
}
