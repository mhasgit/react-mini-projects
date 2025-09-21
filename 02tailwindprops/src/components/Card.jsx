import '../App.css'


function Card({username = "Enter your name here", imgUrl = "https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg"}) {
  return (
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={imgUrl}
        alt="Profile" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{username}</div>
        <p className="text-gray-700 text-base">
          A passionate developer who loves building web apps with React and Tailwind CSS.
        </p>
      </div>

      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default Card
