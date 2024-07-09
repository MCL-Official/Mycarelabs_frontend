import React, { useEffect, useState } from 'react';
import { useNavigate, useParams,useLocation } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import QuoteCard from './QuoteCard'; // Adjust the import path as necessary

const ReadBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { blog_id } = location.state || {};
  // const { blog_id } = useParams(); // Get blog_id from URL parameters
  const [blogData, setBlogData] = useState({});
  const [seoData, setSeoData] = useState({});
  const [tagArray, setTagArray] = useState([]);
  
  console.log(blog_id,"sdkjdsbndsn");

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await axios.get(`https://backend.mycaretrading.com/admin/blog/${blog_id}`);
        setBlogData(response.data);
        if (response.data.tags) {
          setTagArray(response.data.tags.split(','));
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    getBlogData();
  }, [blog_id]);

  console.log(blogData, "dsksdskjnd");

  return (
    <>
      <Helmet>
        <title>{blogData.meta_title}</title>
        <meta name="description" content={blogData.meta_description} />
        <meta name="tags" content={blogData.meta_tags} />
        <meta name="robots" content={seoData.metaKey} />
      </Helmet>
      <div className="container mx-auto mt-5 px-4">
        <div className="relative w-full h-[70vh] mb-3">
          <img src={blogData.banner_image} alt="Blog Banner" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white bg-opacity-60 p-3 text-left text-gray-800 rounded-3 w-full max-w-xs">
            <div dangerouslySetInnerHTML={{ __html: blogData.banner_content }}></div>
            <p>
              Published By: <span className="text-theme font-bold text-lg">{blogData.added_by}</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-3 text-left">{blogData.name}</h1>
            <div className="text-gray-600 mb-5 text-left flex justify-between">
              <p>Category: <span className="text-blue-600">{blogData.category}</span></p>
              <p>Published on: <span className="text-gray-600">{blogData.createdAt}</span></p>
            </div>
            <div className="flex gap-2 mb-3 text-left">
              {tagArray.length > 0 &&
                tagArray.map((item, index) => (
                  <div key={index} className="bg-gray-200 px-3 py-2 rounded-full" data-aos="fade-right" data-aos-duration="1000" data-aos-delay={index * 200}>
                    {item}
                  </div>
                ))}
            </div>
            <div className="prose text-left">
              <div dangerouslySetInnerHTML={{ __html: blogData.blog_content }}></div>
            </div>
            
            <QuoteCard quote="A spring of truth shall flow from it: like a new star it shall scatter the darkness of ignorance, and cause a light heretofore unknown to shine amongst men." author="Andrio Domeco" />
            
            <div className="prose text-left">
              <div dangerouslySetInnerHTML={{ __html: blogData.blog_short_content1 }}></div>
            </div>
            <div className="prose text-left">
              <div dangerouslySetInnerHTML={{ __html: blogData.blog_short_content2 }}></div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-blue-500 p-5 text-white rounded-lg text-left">
              <h3 className="text-lg font-bold mb-2">Join our newsletter!</h3>
              <p className="mb-3">Enter your email to receive our latest newsletter.</p>
              <input type="email" placeholder="Your email address" className="w-full p-2 mb-3 rounded-lg text-gray-800" />
              <button className="w-full bg-green-500 p-2 rounded-lg font-bold">Subscribe Now</button>
              <p className="text-xs mt-3">Don't worry, we don't spam</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-left">Popular Articles</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img src="http://165.22.223.26/jouls/RID1719600979514.jpg" alt="Article Thumbnail" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="text-left">
                    <h4 className="text-md font-bold">Create engaging online courses</h4>
                    <p className="text-xs">By Glomiya Lucy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="http://165.22.223.26/jouls/RID1719600979514.jpg" alt="Article Thumbnail" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="text-left">
                    <h4 className="text-md font-bold">The ultimate formula for launching online course</h4>
                    <p className="text-xs">By Andrio Jeson</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="http://165.22.223.26/jouls/RID1719600979514.jpg" alt="Article Thumbnail" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="text-left">
                    <h4 className="text-md font-bold">50 Best web design tips & tricks</h4>
                    <p className="text-xs">By Unknown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
