export const colorPalette = {
  red: { side: '#FF8B8B', bg: '#FFE3E4' },
  orange: { side: '#FF8B60', bg: '#FFE7DE' },
  yellow: { side: '#FFB300', bg: '#FDEDC7' },
  gray: { side: '#878787', bg: '#E2E2E4' },
  sky: { side: '#47BDF0', bg: '#DBF4FF' },
  blue: { side: '#6296ED', bg: '#DBE8FF' },
  violet: { side: '#C073F9', bg: '#F0DCFF' },
} as const;

export const queryKeys = {
  todos: {
    all: ['todos'] as const,
    // todoList 전체 캐시 삭제를 위함
    lists: () => [...queryKeys.todos.all, 'list'] as const,
    list: (filters: { yearMonth: string; parentsId: number }) =>
      [...queryKeys.todos.lists(), filters] as const,
    details: () => [...queryKeys.todos.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.todos.details(), id] as const,
  },
} as const;
