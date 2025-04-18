import { useEffect, useState } from "react";
import { myaxiox } from "../../../api/AxioxClient";
import { useNavigate } from "react-router-dom";
export function Index() {

const [courses,setcourses]=useState([]);
const [categories,setcategories]=useState([]);
const navigate=useNavigate();


useEffect(()=>{
  fetchcourses();
  fetchcategories();
},[])


const handlecreate=()=>{
  navigate('/admin/CoursesCreate');
}

const handelDelete=async(id)=>{
  try{
    await myaxiox.delete(`/admin/courses/${id}`);
    setcourses(courses.filter(course=>course.id!==id));
  }catch(error){
    console.log(error);
  }
}

const handelEdit=async(id,titre,description,nombre_secsion,nombre_heure,category_id)=>{
  navigate(`/Admin/CoursesUpdate/${id}`, { state: { id, titre, description, nombre_secsion, nombre_heure, category_id } });
}


const fetchcategories=async()=>{
  try{
    const response=await myaxiox.get('/admin/categories');
    setcategories(response.data);
  }catch(error){
    console.log(error);
  }
}
  const fetchcourses=async()=>{
    try{
      const response=await myaxiox.get('/admin/courses')
      setcourses(response.data);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Courses List</h1>
        
        <button onClick={handlecreate} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Add New Course
        </button>
        
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sections</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
            <tbody className="bg-white divide-y divide-gray-200">
        {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={`http://localhost:8000/storage/${course.image}`} 
                      alt="course" 
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.titre}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 max-w-xs truncate">{course.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.nombre_secsion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.nombre_heure}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {categories.find(cat => cat.id === course.category_id)?.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button onClick={()=>handelEdit(course.id,course.titre,course.description,course.nombre_secsion,course.nombre_heure,course.category_id)} className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-3 py-1 rounded-md transition-colors">
                      Edit
                    </button>
                    <button onClick={()=>handelDelete(course.id)} className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-md transition-colors">
                      Delete
                    </button>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
        </div>
      </div>
    </div>
  );
}