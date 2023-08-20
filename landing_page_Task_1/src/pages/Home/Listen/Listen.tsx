import Style from "./Listen.module.css";
import {
  CrimsonHorizon,
  EchoesOfInfinity,
  EclipseOfSouls,
  ElectricStorm,
  FiresOfEuphoria,
  MidnightReverie,
  RhythmOftheStars,
  SerenadeOfShadows,
  WhispersInTheWind,
  WildfireDreams,
} from "./images.ts";
interface Songs {
  name: string;
  url: string;
}
const Albums: Songs[] = [
  {
    name: "Crimson Horizon",
    url: CrimsonHorizon,
  },
  {
    name: "Echoes of Infinity",
    url: EchoesOfInfinity,
  },
  {
    name: "Eclipse of Souls",
    url: EclipseOfSouls,
  },
  {
    name: "Electric Storm",
    url: ElectricStorm,
  },
  {
    name: "Fires of Euphoria",
    url: FiresOfEuphoria,
  },
  {
    name: "Midnight Revieries",
    url: MidnightReverie,
  },
  {
    name: "Rhythm of the Stars",
    url: RhythmOftheStars,
  },
  {
    name: "Serenade of Shadows",
    url: SerenadeOfShadows,
  },
  {
    name: "Whispers in the Wind",
    url: WhispersInTheWind,
  },
  {
    name: "Wildfire Dreams",
    url: WildfireDreams,
  },
];
const Listen = () => {
  return (
    <div className={Style.container}>
      <div className={Style.listen}>Listen</div>
      <div className={Style.albumContainer}>
        {Albums.map((e) => {
          return <Cover name={e.name} url={e.url} />;
        })}
      </div>
    </div>
  );
};

const Cover: React.FC<Songs> = ({ name, url }) => {
  return (
    <div className={Style.coverContainer}>
      <img src={url} alt={name} className={Style.image} />
      <p className={Style.name}>{name}</p>
    </div>
  );
};

export default Listen;
