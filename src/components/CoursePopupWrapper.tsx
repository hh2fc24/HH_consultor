'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CoursePopup from './CoursePopup';

export default function CoursePopupWrapper() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Delay solo si no estás en /curso
    if (pathname !== '/curso') {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (pathname === '/curso') return null;

  return show ? <CoursePopup /> : null;
}