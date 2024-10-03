import React, { useRef } from 'react';


const NotificationModal = ({ modalOpened, setModalOpened }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpened(false);
    }
  };

  if (!modalOpened) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
      onClick={handleClickOutside}
    >
      <div 
        className="bg-gray-800 p-5 rounded-lg w-[600px] h-[400px] shadow-lg" 
        ref={modalRef}
      >
        <div className="flex justify-between items-center">
          <h3 className="m-0 font-semibold text-white">Notifications</h3>
          <button 
            onClick={() => setModalOpened(false)} 
            className="bg-none text-white border-none text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>
        <div className="mt-5">
          <p className="text-center text-gray-400 text-2xl">No notifications</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;