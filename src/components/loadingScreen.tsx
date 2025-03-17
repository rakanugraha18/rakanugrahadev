"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, [isMounted]);

  if (isMounted) return;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00423b] z-50">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute w-full h-full animate-spin">
          <span className="block w-3 h-3 bg-[#14b8a6] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          <span className="block w-3 h-3 bg-[#14b8a6] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          <span className="block w-3 h-3 bg-[#14b8a6] rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" />
          <span className="block w-3 h-3 bg-[#14b8a6] rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
