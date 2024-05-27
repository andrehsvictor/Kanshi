import { useState } from "react";

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["Home", "About", "Contact"];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-fuchsia-700 text-white p-4 flex justify-between shadow-lg">
      <h1 className="text-2xl font-bold">Kanshi</h1>
      <ul className="flex space-x-4 items-center">
        {pages.map((page, index) => (
          <li key={index}>
            <a
              href="#"
              className={`${
                currentPage === index ? "text-white" : "text-gray-300"
              }`}
              onClick={() => handlePageChange(index)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  //   return (
  //     <>
  //       <nav className="fixed top-0 left-0 w-full bg-fuchsia-700 text-white p-4 flex justify-between shadow-lg">
  //         <h1 className="text-2xl font-bold">Kanshi</h1>
  //         <ul className="flex space-x-4 items-center">
  //           <li>
  //             <a href="#" className="text-white">
  //               Home
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#" className="text-white">
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#" className="text-white">
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </nav>
  //     </>
  //   );
}
