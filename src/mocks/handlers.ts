import { http, HttpResponse } from 'msw';

export const handlers = [
  //사용자 정보
  http.get('/user/info', () => {
    return HttpResponse.json({
      userId: '1',
      nickname: '홍길동',
      accessToken: 'access-token',
    });
  }),

  //토큰 재발급
  http.post('/auth/refresh', () => {
    return HttpResponse.json({
      accessToken: 'access-refresh-torken',
    });
  }),

  // logout
  http.post('/logout', () => {
    return HttpResponse.json({
      userId: null,
      nickname: null,
      accessToken: null,
    });
  }),
];
