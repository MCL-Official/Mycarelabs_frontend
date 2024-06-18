import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const ReadBlog = () => {
  const navigate = useNavigate();
  const { id: blog_id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [seoData, setSeoData] = useState({});
  const [tagArray, setTagArray] = useState([]);
console.log(blog_id);
  useEffect(() => {
    const getBlogData = async () => {
    //   loadScreen(true);
      try {
        const response = await axios.get(`http://165.22.223.26:5000/admin/blog/${blog_id}`);
        setBlogData(response.data);
        if (response.data.tags) {
          setTagArray(response.data.tags.split(','));
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        // loadScreen(false);
      }
    };

    getBlogData();
  }, [blog_id]);

//   useEffect(() => {
//     // Assuming you have an API to get SEO data
//     const getSeoData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5100/api/seo');
//         setSeoData(response.data);
//       } catch (error) {
//         console.error('Error fetching SEO data:', error);
//       }
//     };

//     getSeoData();
//   }, []);

console.log(blogData,"dsksdskjnd");
  return (
    <>
      <Helmet>
        <title>{blogData.meta_title}</title>
        <meta name="description" content={blogData.meta_description} />
        <meta name="tags" content={blogData.meta_tags} />
        <meta name="robots" content={seoData.metaKey} />
        {/* <meta property="og:image" content={seoData.metaImage} /> */}
      </Helmet>
      <div>
        <div className="relative w-full h-[70vh] mb-3">
          <img src={blogData.banner_image} alt="Blog Banner" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-white bg-opacity-60 p-3 text-end text-gray-800 rounded-3 w-full max-w-xs">
            <div dangerouslySetInnerHTML={{ __html: blogData.banner_content }}></div>
            <p>
              Published By: <span className="text-theme font-bold text-lg">{blogData.added_by}</span>
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-5 px-4">
          <div className="flex justify-between">
            <h1 className="text-capitalize text-green-600">{blogData.name}</h1>
            <div className="text-lg">
              <p>
                Category: <span className="text-blue-600">{blogData.category}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            {tagArray.length > 0 &&
              tagArray.map((item, index) => (
                <div key={index} className="bg-gray-200 px-3 py-2 rounded-full" data-aos="fade-right" data-aos-duration="1000" data-aos-delay={index * 200}>
                  {item}
                </div>
              ))}
          </div>
          <div data-aos="fade-up">
            <div dangerouslySetInnerHTML={{ __html: blogData.blog_content }}></div>
          </div>
          <div data-aos="fade-up">
            <div dangerouslySetInnerHTML={{ __html: blogData.blog_short_content1 }}></div>
          </div>
          <div data-aos="fade-up">
            <div dangerouslySetInnerHTML={{ __html: blogData.blog_short_content2 }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
