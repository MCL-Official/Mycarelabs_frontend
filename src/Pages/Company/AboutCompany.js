import React from "react";
function AboutCompany() {
    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]
    return (
        <div className="container mx-auto pt-6">



            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                            suspendisse.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="xl:w-full w-11/12 mx-auto">
                <h1 className="text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center xl:text-left md:text-left lg:text-left">Hear From Our Team</h1>
                <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0 text-gray-600">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
<br></br>
<br></br>
<br></br>
<br></br>
        </div>
    );
}

export default AboutCompany;
