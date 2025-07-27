import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import PageItem from './PageItem';
import userEvent from '@testing-library/user-event';

describe('PageItem', () => {
  const defaultProps = {
    id: '123',
    title: '테스트 페이지',
    selected: false,
    onSelect: vi.fn(),
  };

  it('title이 정상적으로 렌더링된다', () => {
    render(<PageItem {...defaultProps} />);
    expect(screen.getByText('테스트 페이지')).toBeInTheDocument();
  });

  it('selected가 true일 때 강조 스타일과 아이콘이 보인다', () => {
    render(<PageItem {...defaultProps} selected={true} />);

    const container = screen.getByTestId('page-item-button');
    expect(container).toHaveClass('bg-sidebar-bg');
    expect(screen.getByTestId('MoreIcon')).toBeInTheDocument(); // MoreIcon이 있을 경우
  });

  it('클릭 시 onSelect가 호출된다', async () => {
    const onSelectMock = vi.fn();
    render(<PageItem {...defaultProps} onSelect={onSelectMock} />);

    const button = screen.getByTestId('page-item-button');
    await userEvent.click(button);
    expect(onSelectMock).toHaveBeenCalledWith('123');
  });
});
