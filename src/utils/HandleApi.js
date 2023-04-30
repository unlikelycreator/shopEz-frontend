import axios from 'axios'

const baseurl = "https://shopez-backend.onrender.com/items"



const getAllItems = (setItem) => {
    axios
    .get(baseurl)
    .then(({data}) =>{
        console.log('data -->', data);
        setItem(data)
    })
}


const addItem = (item, setText, setItem) =>{
    axios
    .post(`${baseurl}/save`,{item})
    .then((data) =>{
        console.log(data);
        setText("")
        getAllItems(setItem)
    }).catch((err) => console.log(err))
}

const deleteItem = (_id, setItem) =>{
    axios
    .post(`${baseurl}/delete`,{_id: _id})
    .then((data) =>{
        console.log(data)
        getAllItems(setItem)
    })
    .catch((err) => console.log(err))
}


export {getAllItems, addItem, deleteItem}
