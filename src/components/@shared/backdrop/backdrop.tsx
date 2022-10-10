interface BackdropProps {
  state: boolean;
  closeHandler: () => void;
  duration?: string | number;
}

export const Backdrop = ({ state, closeHandler, duration }: BackdropProps) => {
  const backdropControl = state ? 'visible opacity-100' : 'invisible opacity-0';
  const backdropDuration = duration ? `duration-[${duration}ms]` : '';

  return (
    <div
      role="button"
      className={`
      ease fixed top-0 left-0 z-40 h-screen w-full
      bg-black/60 transition-opacity ${backdropControl} ${backdropDuration}`}
      onClick={closeHandler}
    ></div>
  );
};
