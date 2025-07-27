import { memo } from 'react';
import { SettingIcon } from '@/shared/ui/icons/SettingIcon';
import { MoreIcon } from '@/shared/ui/icons/MoreIcon';

interface PageItemProps {
  id: string;
  title: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

const PageItem = memo(
  ({ id, title, selected, onSelect }: PageItemProps) => {
    return (
      <div
        data-testid='page-item-button'
        key={id}
        onClick={() => onSelect(id)}
        className={`w-full rounded-[10px] px-3 py-2 flex justify-between items-center cursor-pointer ${
          selected
            ? 'debossed bg-sidebar-bg text-sidebar-text-accent'
            : 'text-sidebar-text-base hover:bg-gray-100'
        }`}
      >
        <div className='flex justify-center items-center'>
          <SettingIcon color={selected ? '#6473E8' : '#2c2c2d'} />
          <span className={`ml-2 ${selected ? 'text-body2 font-medium' : 'text-body2'}`}>
            {title}
          </span>
        </div>
        {selected && <MoreIcon color='#6473E8' />}
      </div>
    );
  },
  (prev, next) => {
    /* selected 값이 바뀔 때만 리렌더링 */
    return prev.selected === next.selected;
  },
);

PageItem.displayName = 'PageItem';

export default PageItem;
