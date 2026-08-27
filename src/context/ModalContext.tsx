import React, { createContext, useContext, useState } from 'react';
import { MotorcycleModel, NewsArticle } from '../types';

interface ModalContextType {
  isConsultModalOpen: boolean;
  selectedModelForConsult: string | null;
  openConsultModal: (modelName?: string) => void;
  closeConsultModal: () => void;

  selectedModelDetail: MotorcycleModel | null;
  openModelDetail: (model: MotorcycleModel) => void;
  closeModelDetail: () => void;

  selectedNewsDetail: NewsArticle | null;
  openNewsDetail: (news: NewsArticle) => void;
  closeNewsDetail: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedModelForConsult, setSelectedModelForConsult] = useState<string | null>(null);

  const [selectedModelDetail, setSelectedModelDetail] = useState<MotorcycleModel | null>(null);
  const [selectedNewsDetail, setSelectedNewsDetail] = useState<NewsArticle | null>(null);

  const openConsultModal = (modelName?: string) => {
    setSelectedModelForConsult(modelName || null);
    setIsConsultModalOpen(true);
  };

  const closeConsultModal = () => {
    setIsConsultModalOpen(false);
    setSelectedModelForConsult(null);
  };

  const openModelDetail = (model: MotorcycleModel) => {
    setSelectedModelDetail(model);
  };

  const closeModelDetail = () => {
    setSelectedModelDetail(null);
  };

  const openNewsDetail = (news: NewsArticle) => {
    setSelectedNewsDetail(news);
  };

  const closeNewsDetail = () => {
    setSelectedNewsDetail(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isConsultModalOpen,
        selectedModelForConsult,
        openConsultModal,
        closeConsultModal,
        selectedModelDetail,
        openModelDetail,
        closeModelDetail,
        selectedNewsDetail,
        openNewsDetail,
        closeNewsDetail
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
