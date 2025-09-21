import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='text-6xl text-black mb-5 bg-green-200 p-2 rounded-4xl'>Props and Tailwindcss</div>
      <Card username='John' imgUrl='https://images.pexels.com/photos/16261966/pexels-photo-16261966.jpeg' />
      <p className='mb-5 mt-5'></p>
      <Card username='Doe' />
    </>
  )
}

export default App
