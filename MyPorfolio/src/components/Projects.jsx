export const Projects = () => {
  return (
    <div id="projects" className="relative">
      <div className="bg-gray-700 p-4 min-h-screen relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20 pointer-events-none"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative z-10">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-purple-400"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              My Work
            </h2>
            <p className="text-gray-300">
              I have built multiple projects and some of them are below
            </p>
          </div>

          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/164986/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="Xyz.com logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-purple-400">
                    Barber Shop Website(Front-end)
                  </h5>
                  <p className="text-gray-300 text-xs">
                    I developed a responsive ‘Urban Trims’ barber shop website
                    using HTML, CSS, Tailwind CSS and React(JavaScript). This
                    website is meant to be used by clients seeking for barber
                    services. It shows the prices for the services offered,
                    location, contact info. and an array of satisfied customers
                    gallery. I deployed the website on vercel.com. This is the
                    link to the website:{" "}
                    <a href="https://barber-shop-website-whbl.vercel.app/">
                      <span className="text-blue-400"> Click here!</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/120853/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="ABC.com logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-purple-400">
                    Social media API(Back-end)
                  </h5>
                  <p className="text-gray-300 text-xs">
                    This project involves building a Social Media API using
                    Django and Django REST Framework that supports user and post
                    management, follow/unfollow functionality, and a
                    personalized content feed. The API enables authenticated
                    users to create, update, and delete posts, manage profiles,
                    follow other users, and view a paginated, chronologically
                    ordered feed from followed accounts. The project emphasizes
                    RESTful API design, secure authentication, efficient
                    database relationships, and scalable handling of social
                    interactions in a real-world like environment. This is the
                    link for the project on GitHub:{" "}
                    <a href="https://github.com/Alexgacanga/SocialMedia_API.git">
                      <span className="text-blue-400 whitespace-normal">
                        Click here!
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/120852/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="ASD.com logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-purple-400">
                    Student management system(Java)
                  </h5>
                  <p className="text-gray-300 text-xs">
                    Developed a desktop-based Student Management System using
                    Java. The application allows users to add, view, and delete
                    student records through an intuitive GUI, with input
                    validation to ensure data accuracy. Implemented file
                    handling to persist student data using text files, enabling
                    loading and saving of records. Applied object-oriented
                    programming principles, event-driven programming, and Java
                    I/O for efficient data management. This is the link to the
                    project on GitHub:{" "}
                    <a href="https://github.com/Alexgacanga/SocialMedia_API">
                      <span className="text-blue-400 ">Click here!</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/120850/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="TMK.co logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-purple-400">
                    Graphic Design Projects
                  </h5>
                  <p className="text-gray-300 text-xs">
                    I have done a multiple of projects which are all in my
                    graphic designing website.{" "}
                    <a href="https://fanticsdesigner.wordpress.com/">
                      <span className="text-blue-400">Click here</span>
                    </a>{" "}
                    to to view the projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
