async function useFetch(url, cb) {
    await fetch(url).then(res=>res.json()).then(data=>cb(data))
}

export default useFetch