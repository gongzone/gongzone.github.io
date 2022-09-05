export const FooterInfoContainer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-500">&copy; {currentYear} 공존의 발자취</span>
      <span className="text-xs text-gray-500">Made by GongZone</span>
    </div>
  );
};
