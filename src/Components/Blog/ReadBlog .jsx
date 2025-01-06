import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import QuoteCard from "./QuoteCard"; // Adjust the import path as necessary

const ReadBlog = () => {
  const location = useLocation();
  const { id } = useParams();
  const { blogData: initialBlogData } = location.state || {};
  const [blogData, setBlogData] = useState(initialBlogData || {});
  const [tagArray, setTagArray] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [sameCategoryBlogs, setSameCategoryBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loading, setLoading] = useState(!initialBlogData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      console.log(initialBlogData, ":sdjhgjhvbdsjbsdvhjb");
      setLoading(true); // Show loading state on navigation
      try {
        const response = await axios.get(
          `https://backend.mycaretrading.com/admin/blog/routename/${id}`
        );
        const data = response.data;
        setBlogData(data);
        setTagArray(data.tags ? data.tags.split(",") : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id, initialBlogData]); // Add 'id' as a dependency

  useEffect(() => {
    if (!blogData.category) return;

    const fetchAdditionalData = async () => {
      try {
        const [
          randomResponse,
          latestResponse,
          sameCategoryResponse,
          popularResponse,
        ] = await Promise.all([
          axios.get("https://backend.mycaretrading.com/admin/blog/random"),
          axios.get("https://backend.mycaretrading.com/admin/blog/latest"),
          axios.get(
            `https://backend.mycaretrading.com/admin/blog/category/${blogData.category}`
          ),
          axios.get("https://backend.mycaretrading.com/admin/blog/popular"),
        ]);

        setRandomBlogs(randomResponse.data);
        setLatestBlogs(latestResponse.data);
        setSameCategoryBlogs(sameCategoryResponse.data);
        setPopularBlogs(popularResponse.data);

        if (blogData.tags) {
          setTagArray(blogData.tags.split(","));
        }
      } catch (error) {
        console.error("Error fetching additional blog data:", error);
      }
    };

    fetchAdditionalData();
  }, [blogData.category]);

  if (loading) return <div>Loading...</div>;
  console.log(popularBlogs, "blogs ");

  const handleNavigation = async (blogId, blogName) => {
    if (!blogName) {
      console.error("Blog name is undefined for blogId:", blogId);
      return;
    }
    try {
      const response = await axios.get(
        `https://backend.mycaretrading.com/admin/blog/${blogId}`
      );
      const blogData = response.data;

      const formattedBlogName = blogName
        .replace(/[&%@!#^*+\|"'<>?]/g, "-") // Replaces special characters with hyphens
        .replace(/\s+|\.|,|:/g, "-") // Replaces spaces, dots, commas, and colons with hyphens
        .replace(/-+/g, "-") // Removes consecutive hyphens
        .replace(/-+$/, "") // Removes trailing hyphens
        .toLowerCase();

      const encodedBlogName = encodeURIComponent(formattedBlogName);
      console.log("Navigating to:", `/blog/${encodedBlogName}`);

      navigate(`/blog/${encodedBlogName}`, { state: { blogData } });
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>{blogData.meta_title}</title>
        <meta name="description" content={blogData.meta_description} />
        <meta name="tags" content={blogData.meta_tags} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="container mx-auto mt-5 px-4">
        <div className="relative w-full h-[70vh] mb-3">
          <img
            src={blogData.banner_image}
            alt="Blog Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2  text-justify left-10 transform -translate-y-1/2 bg-white bg-opacity-60 p-3 text-gray-800 rounded-3 w-full max-w-xs">
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: blogData.banner_content }}
            ></div>
            <p>
              Published By:{" "}
              <span className="text-theme font-bold text-lg">
                {blogData.added_by}
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-4xl font-extrabold mb-3 text-left">
              {blogData.name}
            </h1>
            <div className="text-gray-600 mb-5 text-left flex justify-between">
              <p>
                Category:{" "}
                <span className="text-blue-600">{blogData.category}</span>
              </p>
              <p>
                Published on:{" "}
                <span className="text-gray-600">
                  {new Date(blogData.createdAt).toLocaleDateString()}
                </span>
              </p>
            </div>
            <div className="flex gap-2 mb-3 text-left">
              {tagArray.length > 0 &&
                tagArray.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 px-3 py-2 rounded-full"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay={index * 200}
                  >
                    {item}
                  </div>
                ))}
            </div>
            <div className="prose text-justify">
              <div
                dangerouslySetInnerHTML={{ __html: blogData.blog_content }}
              ></div>
            </div>

            {/* <QuoteCard quote="A spring of truth shall flow from it: like a new star it shall scatter the darkness of ignorance, and cause a light heretofore unknown to shine amongst men." author="Andrio Domeco" /> */}

            <div className="prose text-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: blogData.blog_short_content1,
                }}
              ></div>
            </div>
            <div className="prose text-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: blogData.blog_short_content2,
                }}
              ></div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-blue-500 p-5 text-white rounded-lg text-left">
              <h3 className="text-lg font-bold mb-2">Join our newsletter!</h3>
              <p className="mb-3">
                Enter your email to receive our latest newsletter.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 mb-3 rounded-lg text-gray-800"
              />
              <button className="w-full bg-green-500 p-2 rounded-lg font-bold">
                Subscribe Now
              </button>
              <p className="text-xs mt-3">Don't worry, we don't spam</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-left">
                Popular Blogs
              </h3>

              <div className="space-y-3">
                {popularBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => handleNavigation(blog._id, blog.meta_title)}
                  >
                    <img
                      src={blog.banner_image}
                      alt="Article Thumbnail"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-md font-bold">{blog.name}</h4>
                      <p className="text-xs">By {blog.added_by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-left">Latest Blogs</h3>
              <div className="space-y-3">
                {latestBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => handleNavigation(blog._id, blog.meta_title)}
                  >
                    <img
                      src={blog.banner_image}
                      alt="Article Thumbnail"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-md font-bold">{blog.name}</h4>
                      <p className="text-xs">By {blog.added_by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-left">
                Random Articles
              </h3>
              <div className="space-y-3">
                {randomBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => handleNavigation(blog._id, blog.meta_title)}
                  >
                    <img
                      src={blog.banner_image}
                      alt="Article Thumbnail"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-md font-bold">{blog.name}</h4>
                      <p className="text-xs">By {blog.added_by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-left">
                Same Category Blogs
              </h3>
              <div className="space-y-3">
                {sameCategoryBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => handleNavigation(blog._id, blog.meta_title)}
                  >
                    <img
                      src={blog.banner_image}
                      alt="Article Thumbnail"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-md font-bold">{blog.name}</h4>
                      <p className="text-xs">By {blog.added_by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
