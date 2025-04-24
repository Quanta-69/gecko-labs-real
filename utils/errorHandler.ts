export const handleError = (err: unknown): string => {
  return err instanceof Error ? err.message : "An unknown error occurred";
};
