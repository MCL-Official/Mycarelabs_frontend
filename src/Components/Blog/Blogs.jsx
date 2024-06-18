import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogData = async () => {
    //   loadScreen(true);
      try {
        const response = await axios.get('http://165.22.223.26:5000/admin/blog/'); // Adjust the URL as needed
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        // loadScreen(false);
      }
    };
    getBlogData();
  }, []);

  console.log(blogData,"blogData");

  return (
    <>
      <div className="bg-gray-800 p-5">
        <h1 className="text-white text-center" data-aos="zoom-in">Blogs</h1>
      </div>
      <div className="container mx-auto px-4">
        <h3 className="my-4 text-lg font-semibold">Explore Blogs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogData.map(item => (            
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              key={item.blog_id}
              onClick={() => navigate(`/readBlog/${item._id}`, { state: { blog_id: item._id } })}
            >
              <img src={item.banner_image} className="w-full h-48 object-cover" alt={item.name} />
              <div className="p-4">
                <h5 className="text-lg font-bold text-gray-800 capitalize">{item.name}</h5>
                <p className="text-gray-600">Read Time: {item.read_time}</p>
                <p className="text-gray-600">Category: {item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
