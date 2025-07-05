// import axios from axios

// const addCategory = async (token, formData) => {

//      console.log(formData)

//      const options = {
//           headers: {
//                Authorization: `Bearer ${token}`
//           }
//      }
//     const response = await axios.post('/api/add-category', formData , options)
//     return response.data
// }

// const getAllCategories = async () => {
//     const response = await axios.get('/api/getallcategory');
//     return response.data;
// }

// const updateCategory = async (id, formData) => {
//     const response = await axios.put(`/api/updatecategory/${id}`, formData);
//     return response.data;
// }

// const deleteCategory = async (id) => {
//     const response = await axios.delete(`/api/deletecategory/${id}`);
//     return response.data;
// }


// const categoryService = {
//     addCategory,
//      getAllCategories,
//      updateCategory,
//      deleteCategory
// }

// export default categoryService;