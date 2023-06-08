import '../../styles/Notifications.css';
import React, { useEffect, useState } from 'react';
import SuccessToast from '../../Components/SuccessToast';
import FailureToast from '../../Components/FailureToast';

export default function Notifications({ toastList, autoDeleteInterval }) {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0]);
      }
    }, autoDeleteInterval);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, list]);

  const deleteToast = (index) => {
    list.splice(index, 1);
    toastList.splice(index, 1);
    setList([...list]);
  };

  return (
    <div
      id='toast-container'
      className='fixed top-16 right-3 w-40 sm:w-56 grid gap-2'
    >
      {list.map((toast, i) => {
        if (toast.isCorrect) {
          return <SuccessToast message={`You found ${toast.name}`} />;
        }
        return <FailureToast />;
      })}
    </div>
  );
}
