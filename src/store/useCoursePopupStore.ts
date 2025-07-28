import { create } from 'zustand';

interface CoursePopupState {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

export const useCoursePopupStore = create<CoursePopupState>((set) => ({
  isOpen: false,
  openPopup: () => set({ isOpen: true }),
  closePopup: () => {
    localStorage.setItem('popupDismissed', 'true');
    set({ isOpen: false });
  },
}));