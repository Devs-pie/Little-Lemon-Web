// Libraries
import uuid from "react-uuid";
// Components
import Section from "./Section";
import Button from "./Button";
import CardDish from "./CardDish";
import CardTestimonial from "./CardTestimonial";
import SectionAbout from "./SectionAbout";
// Images
import greekSalad from "../images/greek-salad.jpeg";
import bruschetta from "../images/bruschetta.jpg";
import lemonDessert from "../images/lemon-dessert.webp";
import woman1 from "../images/woman1.jpg";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import testimonialsBg from "../images/restaurant-room.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PageTitle from "./SectionPageTitle";

export default function PageHome({ links }) {
  const dishes = [
    {
      name: "Greek Salad",
      photo: greekSalad,
      price: "12.99",
      content:
      "Fresh and delicious, our Greek Salad is a Mediterranean delight. Made with crisp lettuce, juicy tomatoes, crunchy cucumbers, tangy feta cheese, and drizzled with our signature Greek dressing, it's the perfect light meal or side dish.",
    },
    {
      name: "Bruschetta",
      photo: bruschetta,
      price: "9.99",
      content:
      "Indulge in the vibrant flavors of Italy with our Bruschetta. Crusty artisan bread is topped with juicy, ripe tomatoes, aromatic garlic, and fresh basil, then finished with a drizzle of olive oil and a sprinkle of Parmesan cheese. It's a delicious appetizer or snack that will transport your taste buds to the streets of Rome.",
    },
    {
      name: "Lemon Dessert",
      photo: lemonDessert,
      price: "5.99",
      content:
        "Made with freshly squeezed lemons, creamy mascarpone cheese, and a buttery graham cracker crust, it's the perfect way to end any meal.",
    },
  ];

  const testimonials = [
    {
      name: "C. Leman",
      photo: woman1,
      notation: 5,
      content:
      "The food at Little Lemon is exceptional. I highly recommend the lamb chops - they are cooked to perfection and bursting with flavor. The service is also top-notch and the atmosphere is warm and inviting.",
    },
    {
      name: "P. Marchant",
      photo: man1,
      notation: 4.5,
      content:
      "Little Lemon is hands down my favorite restaurant in town. The staff is friendly, the ambiance is cozy and charming, and the food is always fresh and delicious. I especially love their bruschetta - it's the perfect combination of sweet and savory.",
    },
    {
      name: "R. Lebois",
      photo: man2,
      notation: 5,
      content:
      "I recently visited Little Lemon for a special occasion and was blown away by the experience. The attention to detail in every dish was remarkable and the presentation was beautiful. The lemon dessert was the perfect ending to a perfect meal. I can't wait to go back.",
    },
  ];

  return (
    <>
      <PageTitle>
        <h1 className="light">
          Little Lemon<div>Chicago</div>
        </h1>
        <p className="lead">
        Welcome to Little Lemon, where every dish is a burst of flavor. Our commitment to fresh ingredients and expertly crafted dishes will take your taste buds on a journey you won't soon forget. Come join us and indulge in a culinary experience that will leave you craving for more.
        </p>
        <Link to={links["Booking"]}>
          <Button>Reserve a table</Button>
        </Link>
      </PageTitle>
      <Section id="specials">
        <div className="row row-title">
          <h2>This week's specials!</h2>
          <Link to="/order" className="btn-link">
            <Button>
              <FontAwesomeIcon icon={faBookOpen} /> Online menu
            </Button>
          </Link>
        </div>
        <div className="row">
          {dishes.map((dish) => (
            <CardDish
              key={uuid()}
              photo={dish.photo}
              name={dish.name}
              price={dish.price}
              content={dish.content}
            />
          ))}
        </div>
      </Section>
      <Section id="testimonials" bg={testimonialsBg} overlay="light">
        <h2>Testimonials</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <CardTestimonial key={uuid()} testimonial={testimonial} />
          ))}
        </div>
      </Section>
      <SectionAbout />
    </>
  );
}
