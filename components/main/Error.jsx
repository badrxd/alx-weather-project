import React from "react";
import { IoCloudOfflineSharp } from "react-icons/io5";

function Error() {
  return (
    <div className="flex flex-col gap-4 justify-start items-center h-80 subpixel-antialiased">
      <div className="text-9xl">
        <IoCloudOfflineSharp />
      </div>
      <div>404</div>
      <div>City Not Found</div>
    </div>
  );
}

export default Error;
