import { useEffect } from 'react';
import './styles/App.css';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "Hi, how are you today?",
          max_tokens: 7,
        })
      })
      const data = await response.json()
      console.log(data)
    }

    fetchData()
  }, [])
  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
