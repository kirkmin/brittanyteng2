import { useEffect } from 'react';

const useBackground = ({ setBackground, color }) => {
    useEffect(() => {
        setBackground(color);
        window.scrollTo(0, 0);
    }, [setBackground, color]);
}

export default useBackground;