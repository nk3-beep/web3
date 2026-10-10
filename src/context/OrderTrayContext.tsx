import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/bakeryData';

export interface TrayItem {
  item: MenuItem;
  quantity: number;
}

interface OrderTrayContextType {
  items: TrayItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearTray: () => void;
  totalCount: number;
  totalAmount: number;
  isTrayOpen: boolean;
  setIsTrayOpen: (open: boolean) => void;
  openTray: () => void;
  closeTray: () => void;
  isCustomCakeModalOpen: boolean;
  openCustomCakeModal: () => void;
  closeCustomCakeModal: () => void;
  generateWhatsAppOrderLink: (customerName: string, pickupTime: string, notes?: string) => string;
}

const OrderTrayContext = createContext<OrderTrayContextType | undefined>(undefined);

export const OrderTrayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCustomCakeModalOpen, setIsCustomCakeModalOpen] = useState(false);

  // Clear any legacy order tray from localStorage
  useEffect(() => {
    try {
      localStorage.removeItem('nk_bakery_tray');
    } catch {
      // ignore
    }
  }, []);

  const openCustomCakeModal = () => setIsCustomCakeModalOpen(true);
  const closeCustomCakeModal = () => setIsCustomCakeModalOpen(false);

  return (
    <OrderTrayContext.Provider
      value={{
        items: [],
        addItem: () => {},
        removeItem: () => {},
        updateQuantity: () => {},
        clearTray: () => {},
        totalCount: 0,
        totalAmount: 0,
        isTrayOpen: false,
        setIsTrayOpen: () => {},
        openTray: () => {},
        closeTray: () => {},
        isCustomCakeModalOpen,
        openCustomCakeModal,
        closeCustomCakeModal,
        generateWhatsAppOrderLink: () => '',
      }}
    >
      {children}
    </OrderTrayContext.Provider>
  );
};

export const useOrderTray = () => {
  const context = useContext(OrderTrayContext);
  if (!context) {
    throw new Error('useOrderTray must be used within an OrderTrayProvider');
  }
  return context;
};
