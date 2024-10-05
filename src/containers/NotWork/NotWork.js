import useBackground from '../../hooks/useBackground';

const NotWork = ({ setMainBackground }) => {
  useBackground({ setMainBackground, color: 'dog' });

  return null;
};

export default NotWork;