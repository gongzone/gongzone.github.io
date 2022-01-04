export const preventScroll = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop;

  document.body.style.position = "fixed";
  (document.body.style as any)["overflow-y"] = "scroll";
  document.body.style.top = `${-top}px`;
  document.body.style.width = "100%";

  return () => {
    document.body.style.position = "unset";
    (document.body.style as any)["overflow-y"] = "unset";
    document.documentElement.scrollTop = top;
  };
};
