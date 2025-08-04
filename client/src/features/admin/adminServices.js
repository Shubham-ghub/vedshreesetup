import axios from "axios"

const fetchAllUsers = async (token) => {
    const options = {
        headers: { authorization: `Bearer ${token}` }
    }
    const response = await axios.get("/api/admin/view-users", options)
//     console.log(response.data)
    return response.data
}

const getAllCategories = async (token) => {
     // console.log('Token in Services', token)
     // Fetch all categories from the server
     const options = {
          headers: {
               authorization: `Bearer ${token}`
          }
     }
     const response = await axios.get('/api/admin/getallcategory', options);
     // console.log(response)
     return response.data;
}


const addCategory = async (formData, token) => {
     const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
     }
     const response = await axios.post('/api/admin/add-category', formData, options);
     console.log('add category..................', response.data)
     return response.data;
}    



const updateCategory = async (id, categoryData, token) => {
     const options = {
          headers: {
               authorization: `Bearer ${token}`
          }
     }  
     const response = await axios.put(`/api/admin/updatecategory/${id}`, categoryData, options);
     return response.data;
}

const deleteCategory = async (id, token) => {
     const options = {
          headers: {
               authorization: `Bearer ${token}`
          }
     }
     // Delete a category by its ID
     const response = await axios.delete(`/api/admin/deletecategory/${id}`, options);
     return response.data;
}

// const addproduct = async (productData) => {
// //   const response = await axios.post('/api/admin/add-product', productData);
// //      return response.data;
// }
// const getAllProducts = async () => {
// //   const response = await axios.get('/api/admin/getallproducts');
// //   return response.data;
// }
// const updateProduct = async (id, productData) => {
// //   const response = await axios.put(`/api/admin/updateproduct/${id}`, productData);   
// //      return response.data;
// }
// const deleteProduct = async (id) => {
// //   const response = await axios.delete(`/api/admin/deleteproduct/${id}`);
// //      return response.data;
// }


// const addAppointment = async (appointmentData) => {
// //   const response = await axios.post('/api/admin/add-appointment', appointmentData);
// //      return response.data;    
// }
// const getAllAppointments = async () => {
// //   const response = await axios.get('/api/admin/getallappointments');
// //      return response.data;
// }
// const updateAppointment = async (id, appointmentData) => {
// //   const response = await axios.put(`/api/admin/updateappointment/${id}`, appointmentData);
// //      return response.data;
// }
// const deleteAppointment = async (id) => {
// //   const response = await axios.delete(`/api/admin/deleteappointment/${id}`);
// //      return response.data;
// }


// const addConsultant = async (consultantData) => {
// //   const response = await axios.post('/api/admin/add-consultant', consultantData);    
// //      return response.data;
// }
// const getAllConsultants = async () => {
// //   const response = await axios.get('/api/admin/getallconsultants');
// //      return response.data;
// }
// const updateConsultant = async (id, consultantData) => {
// //   const response = await axios.put(`/api/admin/updateconsultant/${id}`, consultantData);
// //      return response.data;
// }
// const deleteConsultant = async (id) => {
// //   const response = await axios.delete(`/api/admin/deleteconsultant/${id}`);     
// //      return response.data;
// }


// const addConsultationType = async (consultationTypeData) => {
// //   const response = await axios.post('/api/admin/add-consultationtype', consultationTypeData);
// //   return response.data;
// }
// const getAllConsultationTypes = async () => {
// //   const response = await axios.get('/api/admin/getallconsultationtypes');
// //   return response.data;
// }
// const updateConsultationType = async (id, consultationTypeData) => {
// //   const response = await axios.put(`/api/admin/updateconsultationtype/${id}`, consultationTypeData);
// //   return response.data;
// }
// const deleteConsultationType = async (id) => {
// //   const response = await axios.delete(`/api/admin/deleteconsultationtype/${id}`);         
// //      return response.data;
// }

// const addTestimonial = async (testimonialData) => {
// //   const response = await axios.post('/api/admin/add-testimonial', testimonialData);  
// //      return response.data;
// }
// const getAllTestimonials = async () => {
// //   const response = await axios.get('/api/admin/getalltestimonials');
// //      return response.data;
// }
// const updateTestimonial = async (id, testimonialData) => {
//      // const response = await axios.put(`/api/admin/updatetestimonial/${id}`, testimonialData);
//      //  return response.data;
// }
// const deleteTestimonial = async (id) => {
// //   const response = await axios.delete(`/api/admin/deletetestimonial/${id}`);
// //      return response.data;
// }

// const fetchAllOrders = async (token) => {
//     const options = {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     }
//     const response = await axios.get("/api/admin/view-orders", options)
//     return response.data
// }

// // const fetchAllRatings = async (token) => {
// //     const options = {
// //         headers: {
// //             authorization: `Bearer ${token}`
// //         }
// //     }
// //     const response = await axios.get("/api/admin/view-ratings", options)
// //     return response.data
// // }

const adminServices = {
     fetchAllUsers,
//      fetchAllOrders,
     
     addCategory,
     getAllCategories,
     updateCategory,   
     deleteCategory,

//      addproduct,
//      getAllProducts,
//      updateProduct,
//      deleteProduct,

//      addAppointment,
//      getAllAppointments,
//      updateAppointment,
//      deleteAppointment,

//      addConsultant,
//      getAllConsultants,
//      updateConsultant,
//      deleteConsultant,

//      addConsultationType,
//      getAllConsultationTypes,
//      updateConsultationType,
//      deleteConsultationType,

//      addTestimonial,
//      getAllTestimonials,
//      updateTestimonial,
//      deleteTestimonial

};

export default adminServices;