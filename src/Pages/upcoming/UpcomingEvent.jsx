import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate=useNavigate()
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">About Our Gift Shop</h1>
          <p className="text-xl text-center text-gray-700 mt-4 max-w-3xl mx-auto">
            Turning your precious memories into unique, personalized keepsakes since 2018.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16 pb-0">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://res.cloudinary.com/dg3ftdduj/image/upload/v1742035067/62ea33c5c69f445885ff9e68_what-is-a-workshop_ozknvw.jpg" 
              alt="Workshop with craftspeople creating gifts" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              We started as a small workshop with a big dream - to help people preserve their 
              memories and celebrate special moments through personalized gifts that last a lifetime.
            </p>
            <p className="text-gray-700">
              What began as a passion project has grown into a beloved brand trusted by thousands 
              of customers across the country for creating meaningful, high-quality keepsakes.
            </p>
          </div>
        </div>
      </div>

      {/* Products Showcase */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Our Handcrafted Gifts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Category 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 flex items-center justify-center">
                <img src="https://res.cloudinary.com/dg3ftdduj/image/upload/v1742034987/Acrylic_Photo_Frame_dndrby.webp" alt="Acrylic gifts" className="max-h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Acrylic Creations</h3>
              <p className="text-gray-700 mt-2">
                Stunning acrylic photo prints, keychains, and decorative pieces that capture moments in crystal-clear quality.
              </p>
            </div>

            {/* Product Category 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 flex items-center justify-center">
                <img src="https://res.cloudinary.com/dg3ftdduj/image/upload/v1742035116/IN_Custom-Mug_Hero-image_04_xpnq0m.webp" alt="Customized mugs" className="max-h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Photo Mugs & Drinkware</h3>
              <p className="text-gray-700 mt-2">
                Start your day with a smile using our customized mugs featuring your favorite photos, quotes, or designs.
              </p>
            </div>

            {/* Product Category 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 flex items-center justify-center">
                <img src="https://res.cloudinary.com/dg3ftdduj/image/upload/v1742035183/images_hfqwml.jpg" alt="Customized cushions" className="max-h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Comfort & Home</h3>
              <p className="text-gray-700 mt-2">
                Cozy cushions, frames, and home decor items that add a personal touch to any living space.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors" onClick={()=> navigate("/")}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://res.cloudinary.com/dg3ftdduj/image/upload/v1742035284/IMG_0446_2048x2048_mdqqim.webp" 
              alt="Quality craftsmanship" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Quality Craftsmanship</h2>
            <p className="text-gray-700 mb-4">
              We believe in creating gifts that last. That's why we use only premium materials and state-of-the-art 
              printing technology to ensure vibrant colors, sharp details, and durability.
            </p>
            <p className="text-gray-700">
              Each item is carefully inspected before shipping to make sure it meets our high standards. 
              From acrylic prints to custom T-shirts, we put our heart into every product.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16 pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"><img className="w-12 h-12 bg-gray-300 rounded-full" src='https://static.vecteezy.com/system/resources/previews/004/773/704/large_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg'alt=''/></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sumita J.</h4>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The acrylic photo print I ordered exceeded my expectations. The quality is amazing and it arrived perfectly packaged. Will definitely order again!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"><img className="w-12 h-12 bg-gray-300 rounded-full" src='https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg' alt=''/></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Rohit T.</h4>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "I got a custom cushion with my dog's photo for my mom's birthday. She absolutely loved it! The print quality is fantastic and the cushion is super comfortable."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"><img className="w-12 h-12 bg-gray-300 rounded-full object-fill" src='https://img.freepik.com/free-vector/smiling-woman-with-braided-hair_1308-175650.jpg?ga=GA1.1.1881452094.1742035910&semt=ais_hybrid' alt=''/></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Priya M.</h4>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "I ordered custom wallet cards with family photos as anniversary gifts. The quality and speed of delivery were impressive. Their customer service was excellent too!"
              </p>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default AboutPage;