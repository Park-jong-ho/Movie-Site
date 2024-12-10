import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);  // 지정된 지연 후 debouncedValue 업데이트
    }, delay);

    // cleanup: 이전 타이머를 정리
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;  // debouncedValue 반환
};

export default useDebounce;
