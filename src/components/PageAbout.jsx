import PageTitle from "./SectionPageTitle";
import Plaintext from "./SectionPlainText";
import SectionAbout from "./SectionAbout";

export default function PageAbout() {
  return (
    <>
      <PageTitle title={"About us"} />
      <Plaintext classes="lead">
      "Meet the duo behind Little Lemon - John and Michael. These two friends have been passionate about bringing fresh, healthy food to their community since they were teenagers. With over a decade of combined experience in the restaurant industry, they decided to team up and create something special. John brings his expertise in Mediterranean cuisine, while Michael adds his touch of Italian flair. Together, they've created a menu that blends classic and contemporary flavors to delight every palate. When they're not in the kitchen, you'll find them chatting with customers and sharing their love of good food and great company."
      </Plaintext>
      <SectionAbout bg="light" />
    </>
  );
}
