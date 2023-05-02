import { useState } from 'react';

const useGenerateRandomColor = () => {
  const [setColor] = useState('');
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { generateColor };
};
export default useGenerateRandomColor;
