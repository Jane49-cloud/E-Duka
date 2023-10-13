import Photo from "../../assets/bill.png"; // Replace this with your musician's photo

const Package = () => {
  return (
    <section className="p-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 active">
          Packages
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Event Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={Photo}
                alt="Sample Musician"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-800 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Freemium
                </h3>
                {/* <p className="text-white text-sm">Date: August 15, 2023</p> */}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Allows Upload of upto 20 images per month
              </p>
              <button className="mt-4 bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-secondary-orange transition-colors duration-300">
                Default
              </button>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={Photo}
                alt="Sample Musician"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-800 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Premium
                </h3>
                {/* <p className="text-white text-sm">Date: September 5, 2023</p> */}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                This plan comes with upload of unlimited images Every month
              </p>
              <button className="mt-4 bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-secondary-orange transition-colors duration-300">
                Get Package
              </button>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={Photo}
                alt="Sample Musician"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-800 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">Mega</h3>
                {/* <p className="text-white text-sm">Date: September 5, 2023</p> */}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                This plan comes with upload of unlimited images Every month and
                prioritizing your adverts
              </p>
              <button className="mt-4 bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-secondary-orange transition-colors duration-300">
                Get Package
              </button>
            </div>
          </div>

          {/* Add more event cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Package;
