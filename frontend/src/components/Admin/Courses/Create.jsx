import { useState, useEffect } from "react";
import { myaxiox } from "../../../api/AxioxClient";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from "react-router-dom";

export function Create() {

const [image,setImage]=useState('');
const [titre,setTitre]=useState('');
const [description,setDescription]=useState('');
const [nombre_secsion,setNombre_secsion]=useState('');
const [nombre_heure,setNombre_heure]=useState('');
const [category_id,setCategory_id]=useState('');
const [categories, setCategories] = useState([]);
const navigate = useNavigate();

const handleCancel = () => {
    navigate('/Admin/CoursesIndex');
};


useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await myaxiox.get('/admin/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    fetchCategories();
}, []);

const handleSubmit= async (e)=>{
    e.preventDefault();
///To send a file (image) and other fields properly, you must create a FormData object.
  const formData = new FormData();
  formData.append('image', image); 
  formData.append('titre', titre);
  formData.append('description', description);
  formData.append('nombre_secsion', nombre_secsion);
  formData.append('nombre_heure', nombre_heure);
  formData.append('category_id', category_id);

  try {
    const response = await myaxiox.post('/admin/courses', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if(response.status === 201) {
      setImage('');
      setTitre('');
      setDescription('');
      setNombre_secsion('');
      setNombre_heure('');
      setCategory_id('');
      console.log('Course created successfully');
      
      navigate('/Admin/CoursesIndex');
    }
  } catch (error) {
    console.error('Error creating course:', error);
  }

}
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto w-full">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side - Form */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">Create New Course</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input 
                      type="file" 
                      name="image" 
                      onChange={(e)=>setImage(e.target.files[0])}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                      type="text" 
                      name="titre" 
                      value={titre} 
                      onChange={(e)=>setTitre(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                      name="description" 
                      value={description} 
                      onChange={(e)=>setDescription(e.target.value)}
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Number of sections</label>
                      <input 
                        type="number" 
                        name="nombre_secsion" 
                        value={nombre_secsion} 
                        onChange={(e)=>setNombre_secsion(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Number of hours</label>
                      <input 
                        type="number" 
                        name="nombre_heure" 
                        value={nombre_heure} 
                        onChange={(e)=>setNombre_heure(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select 
                      name="category_id" 
                      value={category_id} 
                      onChange={(e)=>setCategory_id(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4 flex gap-4">
                                    <button 
                                        type="submit"
                                        className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    >
                                        Create Course
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={handleCancel}
                                        className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                </div>

                </form>
              </div>

              {/* Right side - Lottie Animation */}
              <div className="flex-1 flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/9180f7b3-70d1-4257-a1f8-eb7c2751e779/gMccnGvO0L.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}