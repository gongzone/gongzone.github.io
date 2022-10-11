type VideoProps = {
  video: string;
  type: string;
};

export const Video = ({ video, type }: VideoProps) => {
  return (
    <div className="w-full">
      <video className="w-full object-cover" controls muted>
        <source src={video} type={`video/${type}`} />
      </video>
    </div>
  );
};
