import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaShareAlt } from 'react-icons/fa'; // Import the share icon from react-icons

const SkeletonLoader = () => {
  return (
    <div className="w-full mx-auto group sm:max-w-sm animate-pulse">
      <div className="h-48 bg-gray-300 rounded-lg"></div>
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Use 'smooth' for smooth scrolling, 'auto' for instant scrolling
  });
};

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term
  const blogsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogData = async (page) => {
      setLoading(true);
      try {
        const response = await axios.get(`https://backend.mycaretrading.com/admin/blog/working?page=${page}&limit=${blogsPerPage}`);
        setBlogData(response.data.blogs);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };
    getBlogData(currentPage);
  }, [currentPage]);

  const handleSearchChange = async (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue.trim() !== '') {
      setLoading(true);
      try {
        const response = await axios.get(`https://backend.mycaretrading.com/admin/blog/search/${encodeURIComponent(searchValue)}`);
        setBlogData(response.data);
      } catch (error) {
        console.error('Error searching for blogs:', error);
      } finally {
        setLoading(false);
      }
    } else {
      // If search term is empty, reset to default blogs
      setCurrentPage(1); // Reset to page 1
      // getBlogData(1); // Fetch initial data for page 1
    }
  };

  const handleNavigation = async (blogId, blogName) => {
    if (!blogName) {
      console.error('Blog name is undefined for blogId:', blogId);
      return;
    }
    try {
      const response = await axios.get(`https://backend.mycaretrading.com/admin/blog/${blogId}`);
      const blogData = response.data;

      const formattedBlogName = blogName
        .replace(/[&%@!#^*+\|"'<>?]/g, '-') // Replaces special characters with hyphens
        .replace(/\s+|\.|,|:/g, '-') // Replaces spaces, dots, commas, and colons with hyphens
        .replace(/-+/g, '-') // Removes consecutive hyphens
        .replace(/-+$/, '') // Removes trailing hyphens
        .toLowerCase();

      const encodedBlogName = encodeURIComponent(formattedBlogName);
      console.log('Navigating to:', `/blog/${encodedBlogName}`);

      navigate(`/blog/${encodedBlogName}`, { state: { blogData } });
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    scrollToTop();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    scrollToTop();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const handleShare = (item) => {
    const url = window.location.origin + `/blog/${encodeURIComponent(item.meta_title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase())}`;
    const text = `Check out this blog: ${item.name}`;

    if (navigator.share) {
      navigator.share({
        title: item.name,
        text: text,
        url: url
      }).catch(error => console.error('Error sharing', error));
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
          <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
          <div className="items-center justify-center gap-3 sm:flex">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input
                type="text"
                placeholder="Search blogs"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
              />
            </div>
            {/* <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
              Subscribe
            </button> */}
          </div>
        </div>

        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: blogsPerPage }).map((_, index) => <SkeletonLoader key={index} />)
            : blogData?.map((item) => (
              <li className="w-full mx-auto group sm:max-w-sm bg-white shadow-lg rounded-lg overflow-hidden" key={item._id}>
                <a href="#" onClick={() => handleNavigation(item._id, item.meta_title)} className="block no-underline">
                  <img src={item.banner_image} loading="lazy" alt={item.name} className="w-full h-48 object-cover object-center" />
                  <div className="p-4">
                    <h3 className=" text-left text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-bold mb-2">
                      {item.name}
                    </h3>
                    <div className="prose text-left text-gray-600">
                      <div dangerouslySetInnerHTML={{ __html: item.blog_short_content1 }}></div>
                    </div>
                    <span className="block text-right text-indigo-600 text-sm mb-1">{formatDate(item.createdAt)}</span>
                    <span className="block text-left text-indigo-600 text-sm mb-1">{item?.views}{" "}Views</span>
                    <button
                      onClick={() => handleShare(item)}
                      className="mt-2 flex items-center text-indigo-600 hover:text-indigo-800"
                    >
                      <FaShareAlt className="w-5 h-5 mr-1" /> Share
                    </button>
                  </div>
                </a>
              </li>
            ))}
        </ul>

        <div className="flex justify-center mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-2 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'} rounded`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-2 ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'} rounded`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
