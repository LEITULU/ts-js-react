import { useEffect, useState } from 'react';

export default function App() {
  // const [count, setCount] = useState(0);
  const [textarray, setTextarray] = useState<string[]>([]);

  function handleClick() {
    const inputElement = document.getElementById("text") as HTMLInputElement;
    const inputValue = inputElement.value;
    setTextarray([...textarray, inputValue]);
    inputElement.value = "";
  }

  useEffect(() => {
    componentDidUpdate();
  }, [textarray])

  function componentDidUpdate() {
    const textareaElement = document.getElementById("textarea") as HTMLTextAreaElement;
    textareaElement.value = textarray.join("\n");
  }

  return (
    <>
    <input type="text" id="text" />
    <button onClick={handleClick}>送信</button> <br />
    <textarea name="" id="textarea"></textarea>
    </>
  )
}