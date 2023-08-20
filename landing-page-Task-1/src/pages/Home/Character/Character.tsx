import Style from "./Character.module.css";
interface CharacterProps {
  imageUrl: string;
  altText: string;
  name: string;
  description: string;
  role: string;
}
const Character: React.FC<CharacterProps> = ({
  imageUrl,
  altText,
  name,
  description,
  role,
}) => {
  return (
    <div className={Style.container}>
      <div className={Style.nameRoleContainer}>
        <p className={Style.name}>{name}</p>
        <p className={Style.role}>{role}</p>
      </div>
      <div className={Style.imageDescriptionContainer}>
        <div className={Style.imageContainer}>
          <img src={imageUrl} alt={altText} className={Style.image} />
        </div>

        <div>
          <p className={Style.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
