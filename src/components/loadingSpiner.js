import React from 'react';

function LoadingSpiner() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <div className="grid gap-2">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-mediumpurple rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpiner;
