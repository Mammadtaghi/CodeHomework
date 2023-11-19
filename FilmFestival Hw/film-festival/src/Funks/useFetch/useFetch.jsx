function useFetch(url, cb) {

    useEffect(() => {
        try {
            fetch(url).then(res=>res.json()).then(data=>cb(data))
        } catch (error) {
            console.log(error);
        }
    
      return () => {
        console.log("Succesfully Fetched!");
      }
    }, [url, cb])
    



}

export default useFetch