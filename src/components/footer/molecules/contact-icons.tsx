import { StaticImage } from 'gatsby-plugin-image';

export const ContactIcons = () => {
  return (
    <div className="flex justify-center gap-4">
      <a href="https://www.instagram.com/gongzone0/">
        <StaticImage
          src="../../../assets/images/instagram.png"
          alt="instagram"
          placeholder="blurred"
          width={30}
          height={30}
        />
      </a>
      <a href="mailto:dnjsqhwo@gmail.com">
        <StaticImage
          src="../../../assets/images/gmail.png"
          alt="gmail"
          placeholder="blurred"
          width={30}
          height={30}
        />
      </a>
      <a href="https://github.com/gongzone">
        <StaticImage
          src="../../../assets/images/github.png"
          alt="github"
          placeholder="blurred"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};
