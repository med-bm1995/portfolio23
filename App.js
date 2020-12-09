import './App.css';
import Navbar from '../src/comp/navbar'
import Photocart from '../src/comp/Photocart'
import Projet from '../src/comp/Projet'
import Contact from '../src/comp/Contact'
import Footer from '../src/comp/Footer'

function App() {
  const arr = [{
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Github', link: 'link'
  },
  {
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Facebook', link: 'link'
  },
  {
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Github', link: 'link'
  },
  {
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Github', link: 'link'
  },
  {
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Github', link: 'link'
  },
  {
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Github', link: 'link'
  },
  {
    src: './2.png', paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam",
    text: 'Github', link: 'link'
  }
  ]

  return (
    <div className="App">
      <Navbar name="JOHN DOE" About="About" Projects="Projects" Contact="Contact" />
      <Photocart hello="Hello my name is" name="John doe" and="and i make a horrible websites" />
      <Projet arr={arr} />
      <Contact />
      <Footer />


    </div>

  );
}

export default App;
