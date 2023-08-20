import Character from "../Home/Character/Character";
import Style from "./About.module.css";

import Alex from "../../assets/lead guitarist.png";
import Lisa from "../../assets/Lisa.png";
import Max from "../../assets/Bass Guitarist.png";
import Sarah from "../../assets/Sarah-Keyboardist.jpg";
import Jake from "../../assets/drummer.jpg";
import Michelle from "../../assets/lead vocalist.jpg";
import Evan from "../../assets/multi-instrumentalist 2.jpg";
const About = () => {
  return (
    <div className={Style.container}>
      <div className={Style.characterContainer}>
        <Character
          imageUrl={Alex}
          altText="Alex Thompson"
          name="Alex Thompson"
          description="Alex is a virtuoso guitarist known for his lightning-fast solos and mesmerizing stage presence. He's been playing the guitar since the age of 9 and has an uncanny ability to make the instrument sing. With his signature top hat and fiery red hair, Thunder's energy electrifies the crowd, leaving them wanting more."
          role="Lead Guitarist"
        />
        <Character
          imageUrl={Lisa}
          altText="Lisa Martinez"
          name="Lisa Martinez"
          description="Lisa's rhythmic mastery is the backbone of 7ROCK7's sound. She's a versatile musician who effortlessly switches between powerful chords and subtle arpeggios. With a strong passion for songwriting, Rhythm Queen brings an authentic and emotional touch to the band's music."
          role="Rhythm Guitarist"
        />
        <Character
          imageUrl={Michelle}
          altText="Michelle Addams"
          name="Michelle Addams"
          description="Michelle's soulful voice captivates audiences, taking them on an emotional journey with every song. Her powerful vocals and heartfelt lyrics leave a lasting impression, and her performances are a true reflection of her passion for music and storytelling."
          role="Lead Vocalist"
        />
        <Character
          imageUrl={Evan}
          altText="Evan Anderson"
          name="Evan Anderson"
          description="Evan is a musical prodigy, proficient in multiple instruments, including violin, saxophone, and flute. His versatility enriches 7ROCK7's sound, adding layers of complexity to their compositions. The Maestro's unwavering dedication to his craft makes him a driving force in the band's creative process."
          role="Lead Guitarist"
        />
        <Character
          imageUrl={Max}
          altText="Max Johnson"
          name="Max Johnson"
          description="Max is the heartbeat of the band, driving the rhythm with his infectious bass lines. A true groove master, he can make even the most stoic audience members dance to the beat. With his warm smile and laid-back personality, he brings a sense of camaraderie to the group."
          role="Bass Guitarist"
        />
        <Character
          imageUrl={Sarah}
          altText="Sarah Harrison"
          name="Sarah Harrison"
          description="Sarah's magical touch on the keyboards adds a celestial dimension to 7ROCK7's sound. Her ethereal melodies and atmospheric textures transport listeners to otherworldly realms. Offstage, she's known for her love of science fiction and fascination with the cosmos."
          role="Keyboardist"
        />
        <Character
          imageUrl={Jake}
          altText="Jake Davis"
          name="Jake Davis"
          description="Jake is a force of nature behind the drum kit, driving the band with his thunderous beats. With lightning-fast hands and a relentless energy, he's a powerhouse on stage. Outside of music, he's a nature lover and often finds inspiration for his rhythms from the sounds of the great outdoors."
          role="Drummer"
        />
      </div>
      <div className={Style.line}></div>
      <p className={Style.title}>About 7ROCK7</p>
      <p>
        Welcome to the electrifying world of 7ROCK7 – where musical passion
        meets boundless creativity. Formed with a shared vision to conquer
        hearts and minds through the power of rock music, 7ROCK7 is a dynamic
        and soul-stirring band that knows no limits. From the first chord to the
        final note, we aim to ignite a fire within the hearts of our listeners,
        leaving them captivated by our sonic journey.
      </p>
      <p className={Style.title}>Our Musical Odyssey</p>
      <p>
        7ROCK7's journey began as a humble dream shared among friends – a dream
        to create music that defies conventions and speaks to the depths of the
        human experience. Each member brings a unique set of skills and
        personalities, culminating in a symphony of artistry that sets our sound
        apart. With a fusion of thunderous riffs, celestial melodies, and
        heartfelt lyrics, we forge a path through uncharted musical territories.
      </p>
      <p className={Style.title}>The Essence of 7ROCK7</p>
      <p>
        At the core of our music lies a profound love for storytelling. We
        believe that every song has a tale to tell, an emotion to convey, and a
        connection to forge. Our music transcends mere entertainment; it seeks
        to become a companion in life's journey – uplifting, consoling, and
        inspiring. Through our music, we paint vivid landscapes of imagination,
        where each listener finds solace or celebration.
      </p>
      <p className={Style.title}>The Live Experience</p>
      <p>
        A 7ROCK7 live performance is an unforgettable spectacle. We pour our
        hearts and souls into every show, aiming to establish an intimate
        connection with our audience. The stage comes alive with our unbridled
        energy, and the crowd becomes an integral part of the performance. We
        believe that music is a powerful unifier, and together, we create an
        atmosphere of shared euphoria.
      </p>
    </div>
  );
};
export default About;
