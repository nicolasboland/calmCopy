export interface ChatRecommendationProps {
    isChatOpen?: boolean;
    onChatOpen?: () => void;
    imageUrl?: string;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    isForMobile?: boolean
  }