const addList = (payload) =>({
    type:"ADD_LIST",
    payload
});

const removeList = (payload) => ({
    type:"REMOVE_LIST",
    payload,
})

export {addList,removeList}