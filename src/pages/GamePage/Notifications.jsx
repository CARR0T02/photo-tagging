import '../../styles/Notifications.css';
import React, { useEffect, useState } from 'react';
import SuccessToast from '../../Components/SuccessToast';
import FailureToast from '../../Components/FailureToast';

export default function Notifications({ toastList, setToastList }) {
  const [list, setList] = useState(toastList);
  const autoDeleteInterval = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(1);
      }
    }, autoDeleteInterval);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, list]);

  const deleteToast = (index) => {
    let newList = toastList.slice(index);
    setToastList([...newList]);
  };

  return (
    <div
      id='toast-container'
      className='fixed top-16 right-3 w-40 sm:w-56 grid gap-2'
    >
      {toastList.map((toast, i) => {
        if (toast.isCorrect) {
          return <SuccessToast message={`You found ${toast.name}`} key={i} />;
        }
        return <FailureToast key={i} />;
      })}
    </div>
  );
}
