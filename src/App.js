import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }      
    } catch (err) {
      console.log('request failed')
    }
  }

  return (
    <div className="App">
      My blog 
      <div className="">
        {posts.map((post) => {
          return <pre key={post.id}>{JSON.stringify(post)}</pre>
        })}
      </div>
    </div>
  );
}

export default App;
