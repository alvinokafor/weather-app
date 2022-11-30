import { useState } from 'react'
export default function Search({setCity, searchResult}) {
  const [inputText, setInputText] = useState("");

    const searchHandler = (e) => {
        setInputText(e.target.value);
        // console.log(inputText)
      };
    

    const submitHandler = (e) => {
        e.preventDefault();

        setCity(inputText) 
      };
    

  return (
    <form onSubmit={submitHandler} className="z-30 relative flex justify-between border-b pb-2 md:w-[300px] md:items-center md:pb-4">
        <input
          className="bg-transparent outline-none w-full px-1"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
        />
        <button>
          <img
            className="w-4 h-4 md:w-6 md:h-6 cursor-pointer"
            src="/assets/icons/search.svg"
            alt="search icon"
          />
        </button>
    </form>
  );
}
