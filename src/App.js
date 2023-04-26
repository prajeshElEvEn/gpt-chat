import { useEffect, useState } from 'react';
import './styles/App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Loading from './components/Loading';

function App() {

  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setData(null)
    if (!query) {
      alert('Please enter a message')
    } else {
      const config = {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
      const sendData = {
        model: "text-davinci-003",
        prompt: query,
        max_tokens: 1024,
      }
      const response = await axios.post(
        process.env.REACT_APP_API_URL,
        sendData,
        config
      )
      const res = response.data
      setData(res)
      // console.log(res)
      setQuery('')
    }
  }

  return (
    <div className="container">
      <div className='head'>
        <Navbar />
      </div>
      <div className='main'>
        <form
          onSubmit={handleSubmit}
        >
          <div className='form-field'>
            <div className='input-field'>
              <input
                type="text"
                placeholder='Enter your message here...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <input
              className='submit-btn'
              type="submit"
              value="Send"
            />
          </div>
        </form>
        <div className='answer'>
          {
            data ? (
              <>
                {
                  data.choices[0].text
                }
              </>
            ) : (
              <>
                <Loading />
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
