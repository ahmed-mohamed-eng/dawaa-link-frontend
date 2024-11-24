import React from "react";

import Image from "next/image";

const EmailInput = () => {
  return (
    <div className="bg-secondary text-white w-fit px-6 py-3 rounded-2xl flex items-center justify-center space-x-4">
      <input
        className="text-lg w-56 bg-transparent font-medium outline-none placeholder:font-bold placeholder:text-white"
        placeholder="Email address"
      />

      <button>
        <Image alt="Send Email" src="/send.svg" width={25} height={25} />
      </button>
    </div>
  );
};

export default EmailInput;
