import Photo from "../../assets/gallery.png";

const AboutPage = () => {
  return (
    <section className="p-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 active">
          About Our services
        </h2>
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <img
              src={Photo}
              alt="Sample Musician"
              className="w-full h-full object-cover rounded-full shadow-lg mb-6"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              officiis saepe ipsa ullam id. Minus placeat provident deserunt
              ipsam eos.
            </p>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
              odio recusandae ex necessitatibus quos assumenda ut doloremque,
              repellendus consectetur.
            </p>
            <p className="text-lg mb-6">lorem20</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
