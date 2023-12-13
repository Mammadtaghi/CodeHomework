import axios from 'axios'

function useAxios() {

    async function Get(url, cb) {
        const res = await axios.get(url)
        cb(res.data)
    }

    async function Post(url, obj) {
        const res = await axios.post(url, obj)
    }

    async function Put(url, id, obj) {
        const res = await axios.put(`${url}/${id}`, obj)
    }

    async function Delete(url, id) {
        const res = await axios.delete(`${url}/${id}`)
    }


    return {Get, Post, Put, Delete}
}

export default useAxios