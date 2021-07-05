import { useEffect, useState } from "react";

interface Kanye{
  quote:string;
}

function App() {
  const [quote, setQuote] = useState<Kanye>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.kanye.rest/"
      );
      const jsonBody: Kanye = await response.json();
      setQuote(jsonBody);
    };

    fetchQuote();
  }, []);

  // useEffect(() => {
  //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Kanye Quotes</h1>
      {quote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{quote.quote}</b>
          </p>
          <p>
          
          </p>
        </>
      )}
    </>
  );
}

export default App;
