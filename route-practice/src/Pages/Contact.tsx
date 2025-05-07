const Contact = () => {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
  
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  