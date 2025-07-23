/**
 * api 호출간에 에러 메세지를 리턴해주는 함수입니다.
 * (범용적인 코드에 대해서만 지정을 해놓았고 추후 변경될 여지가 있습니다.)
 * @param status error status : number
 * @returns errormessage : string
 */
export const getErrorMessage = (status: number): string => {
  if (status >= 400 && status < 500) {
    // 클라이언트 에러
    switch (status) {
      case 400:
        return '잘못된 요청입니다';
      case 401:
        return '로그인이 필요합니다';
      case 403:
        return '권한이 없습니다';
      case 404:
        return '요청한 데이터를 찾을 수 없습니다';
      default:
        return '요청 처리 중 오류가 발생했습니다';
    }
  } else if (status >= 500) {
    // 서버 에러
    return '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요';
  }
  return '알 수 없는 오류가 발생했습니다';
};
