import Section from "./Section";
import mario from "../images/mario.jpg";
import adrian from "../images/adrian.jpg";
import ImagesCol from "./ImagesCol";

export default function About({ bg }) {
  return (
    <Section id="about" bg={bg}>
      <div className="row wrap">
        <div className="col">
          <h2>Little Lemon</h2>
          <div className="lead">Chicago</div>
          <p>
          "Meet the duo behind Little Lemon - John and Michael. These two friends have been passionate about bringing fresh, healthy food to their community since they were teenagers. With over a decade of combined experience in the restaurant industry, they decided to team up and create something special. John brings his expertise in Mediterranean cuisine, while Michael adds his touch of Italian flair. Together, they've created a menu that blends classic and contemporary flavors to delight every palate. When they're not in the kitchen, you'll find them chatting with customers and sharing their love of good food and great company."
          </p>
          <p>
            Justo laoreet sit amet cursus sit amet dictum. Pharetra magna ac
            placerat vestibulum lectus mauris ultrices eros in. Sed viverra
            tellus in hac habitasse platea dictumst vestibulum rhoncus.
          </p>
          <p>
            Velit laoreet id donec ultrices. Arcu ac tortor dignissim convallis
            aenean et tortor. Massa tincidunt nunc pulvinar sapien et. Diam quam
            nulla porttitor massa id.
          </p>
        </div>
        <ImagesCol imgLeft={adrian} imgRight={mario} />
      </div>
    </Section>
  );
}
