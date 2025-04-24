// ~/composables/useAuthValidation.ts
export const useAuthValidation = () => {
  // Email validation (supports @gmail.com and @googlemail.com)
  const validateGmail = (email: string): boolean => {
    return /@(gmail|googlemail)\.com$/i.test(email);
  };

  // Enter key handler
  const handleEnterKey = (callback: () => void) => {
    return (e: KeyboardEvent) => {
      if (e.key === "Enter") callback();
    };
  };

  return { validateGmail, handleEnterKey };
};
