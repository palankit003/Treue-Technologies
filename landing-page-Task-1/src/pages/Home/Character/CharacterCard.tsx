import Style from "./CharacterCard.module.css";
interface CharacterCardProps {
  image: string;
  name: string;
  role: string;
}
const CharacterCard: React.FC<CharacterCardProps> = ({ image, name, role }) => {
  return (
    <div className={Style.container}>
      <div className={Style.imageContainer}>
        <img src={image} alt={name} className={Style.image} />
      </div>

      <p className={Style.name}>{name}</p>
      <p className={Style.role}>{role}</p>
    </div>
  );
};
export default CharacterCard;
