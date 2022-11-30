function useFetch(url, setData) {
  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();

    setData(result);
  };

  fetchData().catch(console.error);
  // console.log(url)
}

export default useFetch;
