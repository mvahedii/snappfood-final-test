export const digitsToPersian = (number?: string): string => {
  const hindiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return (
    number?.replace(/[0-9]/g, function (w) {
      return hindiDigits[Number(w)];
    }) ?? ''
  );
};
