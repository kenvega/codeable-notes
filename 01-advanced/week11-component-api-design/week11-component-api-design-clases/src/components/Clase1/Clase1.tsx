import BadBanner from "../components_clase1/BadBanner";
import Banner from "../components_clase1/Banner";
import UserBanner from "../components_clase1/UserBanner";
import BadApartmentDetails from "../components_clase1/BadApartmentDetails";
import ApartmentDetails from "../components_clase1/AparmentDetails";
import BadUserCard from "../components_clase1/BadUserCard";
import BadProductCard from "../components_clase1/BadProductCard";
import UserCard from "../components_clase1/UserCard";
import ProductCard from "../components_clase1/ProductCard";

const apartment = {
  id: "123abc",
  title:
    "Urban Elegance: A Luxurious Contemporary Apartment with Breathtaking City Views",
  description:
    "Step into a world of urban sophistication with this luxurious apartment, where contemporary elegance meets unparalleled comfort. Located in a vibrant city, this apartment offers breathtaking views of the skyline through its expansive windows, inviting an abundance of natural light into every room. The living area is a testament to modern design, featuring a plush sofa set, a sleek glass coffee table, and artful decorations that create a warm and inviting atmosphere. An open-concept kitchen, equipped with state-of-the-art appliances and a spacious marble countertop, seamlessly blends into the living space, offering both functionality and style. Elegant bar stools at the kitchen counter provide the perfect spot for morning coffee or casual dining.",
  photos: [
    "https://res.cloudinary.com/dwdgpw20b/image/upload/v1700528415/illustrations/dall-e-photo1_oovyf1.png",
    "https://res.cloudinary.com/dwdgpw20b/image/upload/v1700528417/illustrations/dall-e-photo2_dfd3ph.png",
    "https://res.cloudinary.com/dwdgpw20b/image/upload/v1700528420/illustrations/dall-e-photo3_a1pxuq.png",
  ],
  rating: 4,
};

const product = {
  id: "abc123",
  imageSrc:
    "https://res.cloudinary.com/dwdgpw20b/image/upload/v1700571741/illustrations/laptop_sxhixu.png",
  imageAlt: "An extremely cool laptop inspired in Dragon Ball",
  title: "Dragon Laptop",
  price: "1,299.00",
};

const user = {
  avatarSrc:
    "https://res.cloudinary.com/dwdgpw20b/image/upload/v1700572072/illustrations/avataaars_p19wog.png",
  avatarDescription: "Avatar generated with https://getavataaars.com",
  name: "Testina Diprueba",
  handle: "testina",
};

const Clase1 = () => {
  return (
    <div>
      <div>
        <h1>Clase 1: Component API Design</h1>

        <h2>BadBanner</h2>
        <BadBanner type="warning" user={{ name: "John Doe" }}>
          This is a warning banner for John Doe.
        </BadBanner>

        {/* con composicion cada componente queda ubicado con mayor claridad en el espectro de categorías de componentes */}
        <h2>Banner</h2>
        <Banner type="error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quos tenetur nisi laboriosam earum voluptatum dicta.
        </Banner>

        <h2>UserBanner</h2>
        <UserBanner user={{ name: "John Doe" }} type="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quos tenetur nisi laboriosam earum voluptatum dicta.
        </UserBanner>
      </div>
      <div>
        <h1>Clase 1 Ejercicios</h1>

        <h2>BadApartmentDetails</h2>
        <BadApartmentDetails apartment={apartment} />

        {/* se extraen y crean componentes reutilizables: Gallery y Rating */}
        <h2>ApartmentDetails</h2>
        <ApartmentDetails apartment={apartment} />

        <h2>BadUserCard & BadProductCard</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            marginTop: "64px",
            maxWidth: "480px",
            marginInline: "auto",
          }}
        >
          <BadUserCard user={user} />
          <BadProductCard product={product} />
        </div>

        {/* Se crea el componente contendor Card y se pasa elevation como un prop a ese componente */}
        <h2>UserCard & ProductCard</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            marginTop: "64px",
            maxWidth: "480px",
            marginInline: "auto",
          }}
        >
          <UserCard user={user} />
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default Clase1;
