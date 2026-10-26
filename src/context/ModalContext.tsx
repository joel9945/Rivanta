"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import PartnerModal from "@/components/PartnerModal";

interface ModalContextType {
  isPartnerOpen: boolean;
  openPartnerModal: () => void;
  closePartnerModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const openPartnerModal = useCallback(() => setIsPartnerOpen(true), []);
  const closePartnerModal = useCallback(() => setIsPartnerOpen(false), []);

  const value = useMemo(
    () => ({
      isPartnerOpen,
      openPartnerModal,
      closePartnerModal,
    }),
    [isPartnerOpen, openPartnerModal, closePartnerModal]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <PartnerModal isOpen={isPartnerOpen} onClose={closePartnerModal} />
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
