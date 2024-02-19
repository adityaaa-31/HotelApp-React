
function HomePage() {
  return (
    <div className="bg-gray-300 min-h-screen rounded-md shadow-xl">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 mb-6">Explore our services and products below:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-blue-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Service 1</h2>
            <p className="text-blue-700">Description of Service 1...</p>
          </div>

          <div className="bg-green-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-green-800 mb-4">Service 2</h2>
            <p className="text-green-700">Description of Service 2...</p>
          </div>


          <div className="bg-yellow-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-yellow-800 mb-4">Service 3</h2>
            <p className="text-yellow-700">Description of Service 3...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
