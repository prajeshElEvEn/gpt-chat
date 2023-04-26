import { useEffect, useState } from 'react';
import './styles/App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
      const sendData = {
        model: "text-davinci-003",
        prompt: "Hi, how are you today?",
        max_tokens: 7,
      }
      const response = await axios.post(process.env.REACT_APP_API_URL, sendData, config)
      const res = response.data
      setData(res)
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
