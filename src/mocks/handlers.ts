import { http, HttpResponse } from 'msw';

export const handlers = [
  // 로그인 핸들러
  http.post('/auth/kakao/login', async () => {
    return HttpResponse.json(
      {
        accessToken: 'mock-access-token',
        user: {
          userId: '1',
          email: 'test@example.com',
        },
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': 'refreshToken=mock-refresh-token; HttpOnly; Path=/; Secure;',
        },
      },
    );
  }),

  // 사용자 정보
  http.get('/auth/me', () => {
    return HttpResponse.json({
      userId: '1',
      nickname: '홍길동',
    });
  }),

  // accessToken 재발급
  http.post('/auth/refresh', () => {
    return HttpResponse.json({
      accessToken: 'mock-refreshed-access-token',
    });
  }),
];
