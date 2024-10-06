import { useEffect } from 'react';

const useBackground = ({ setMainBackground, color }) => {
  useEffect(() => {
    setMainBackground(color);
    window.scrollTo(0, 0);
  }, [setMainBackground, color]);
}

export default useBackground;