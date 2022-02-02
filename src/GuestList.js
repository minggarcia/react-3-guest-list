import './App.css';

// import { useEffect, useState } from 'react';
// import LoadingIndicator from './LoadingIndicator';

// const useLoader = () => {
//   const [loading, setLoading] = useState(false);
//   return [
//     loading ? <LoadingIndicator /> : null,
//     () => setLoading(true), // Show the loading indicator
//     () => setLoading(false), // Hide the loading indicator
//   ];
// };

// export default function App() {
//   const baseUrl = 'https://olgas-react-guest-list.herokuapp.com';
//   const [list, setList] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isAttending, setIsAttending] = useState(false);
//   const [loader, showLoader, hideLoader] = useLoader();
//   useEffect(() => {
//     const getList = async () => {
//       showLoader();
//       const response = await fetch(`${baseUrl}/`);
//       const allGuests = await response.json();

//       setList(allGuests);
//       setIsAttending(false);
//     };

//     getList();
//     hideLoader();
//   });

//   async function newGuest() {
//     const response = await fetch(`${baseUrl}/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//       }),
//     });
//     const createdGuest = await response.json();
//     return createdGuest;
//   }

//   function handleDelete(id) {
//     async function deleteGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'DELETE',
//       });
//       const deletedGuest = await response.json();
//       return deletedGuest;
//     }
//     deleteGuest();
//   }

//   // function handleAttend(id) {
//   //   async function editGuest() {
//   //     const response = await fetch(`${baseUrl}/${id}`, {
//   //       method: 'PATCH',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ attending: true }),
//   //     });

//   //     const updatedGuest = await response.json();
//   //     return updatedGuest;
//   //   }
//   //   editGuest();
//   // }

//   return (
//     <div data-test-id="guest">
//       <section>
//         <div>
//           <h1>Join the Party</h1>
//           <form
//             onSubmit={(e) => {
//               newGuest();
//               e.preventDefault();
//               // clear input fields after entering name:
//               e.target.reset();
//             }}
//           >
//             <label>
//               First Name:
//               <input
//                 value={firstName}
//                 onChange={(event) => setFirstName(event.currentTarget.value)}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 value={lastName}
//                 onChange={(event) => setLastName(event.currentTarget.value)}
//               />
//             </label>
//             <button className="addGuestButton">Add guest</button>
//           </form>
//           {loader}
//         </div>
//       </section>

//       <section>
//         <div>
//           <div>
//             <h2>List of Guests</h2>

//             {list.map((guest) => (
//               <ul key={guest.id}>
//                 <li>
//                   {guest.firstName} {guest.lastName}
//                   <input
//                     type="checkbox"
//                     checked={isAttending}
//                     onChange={(e) => setIsAttending(e.currentTarget.checked)}
//                   />
//                   Attending ({JSON.stringify(isAttending)} {typeof isAttending})
//                   <button onClick={() => handleDelete(guest.id)} id="delete">
//                     x
//                   </button>
//                 </li>
//               </ul>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [guestList, setGuestList] = useState([]);
//   const [isAttending, setIsAttending] = useState(true);

//   return (
//     <div data-test-id="guest">
//       <header>
//         <h1>Join the Party</h1>
//       </header>
//       <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             // clear input field when adding guest:
//             e.target.reset();
//           }}
//         >
//           <label>
//             First Name:
//             <input
//               value={firstName}
//               onChange={(e) => {
//                 setFirstName(e.currentTarget.value);
//               }}
//             />
//           </label>
//           <label>
//             Last Name:
//             <input
//               value={lastName}
//               onChange={(e) => {
//                 setLastName(e.currentTarget.value);
//               }}
//             />
//           </label>
//           <button>add</button>
//         </form>
//         <div data-test-id="guest">
//           <h1>Guest List:</h1>
//           {guestList.map((guest) => {
//             return (
//               <ul key={guest.id}>
//                 <li>
//                   <input
//                     type="checkbox"
//                     aria-label="attending"
//                     checked={isAttending}
//                     onChange={(e) => setIsAttending(e.currentTarget.checked)}
//                   />{' '}
//                   {isAttending ? 'Attending' : ''}
//                   {guest.firstName} {guest.lastName}
//                   <button aria-label="remove">Remove Guest</button>
//                 </li>
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { useEffect, useState } from 'react';
// import LoadingIndicator from './LoadingIndicator';

// const topHeading = css`
// text-align: center``

// const useLoader = () => {
//   const [loading, setLoading] = useState(false);
//   return [
//     loading ? <LoadingIndicator /> : null,
//     () => setLoading(true), // Show the loading indicator
//     () => setLoading(false), // Hide the loading indicator
//   ];
// };

// export default function App() {
//   const baseUrl = 'https://olgas-react-guest-list.herokuapp.com';
//   const [guestList, setGuestList] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isAttending, setIsAttending] = useState(false);
//   const [loader, showLoader, hideLoader] = useLoader();

//   useEffect(() => {
//     const getList = async () => {
//       showLoader();
//       const response = await fetch(`${baseUrl}/`);
//       const allGuests = await response.json();

//       setGuestList(allGuests);
//       setIsAttending(false);
//     };

//     getList();
//     hideLoader();
//   });
//   // Add new guest:
//   async function newGuest() {
//     const response = await fetch(`${baseUrl}/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//       }),
//     });
//     const createdGuest = await response.json();
//     return createdGuest;
//   }

//   const handleSubmit = (event) => {
//     newGuest();
//     event.preventDefault();
//     event.target.reset();
//   };
//   // Delete guests:
//   function handleDelete(id) {
//     async function deleteGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'DELETE',
//       });
//       const deletedGuest = await response.json();
//       return deletedGuest;
//     }
//     deleteGuest();
//   }
//   // attend function
//   function handleAttend(id) {
//     async function editGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ attending: true }),
//       });

//       const updatedGuest = await response.json();
//       return updatedGuest;
//     }
//     editGuest();
//   }

//   return (
//     <>
//       <section>
//         <div>
//           <h1 css={topHeading}>Join the Party:</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor={firstName}>
//               First Name:
//               <input
//                 onChange={(event) => setFirstName(event.currentTarget.value)}
//               />
//             </label>
//             <label htmlFor={lastName}>
//               Last Name:
//               <input
//                 onChange={(event) => setLastName(event.currentTarget.value)}
//               />
//             </label>
//             <button>Add guest</button>
//           </form>
//           {loader}
//         </div>
//       </section>

//       <section className="listBackground">
//         <div>
//           <div>
//             <h2>Guest List</h2>

//             <table>
//               <tbody>
//                 {guestList.map((guest) => (
//                   <tr key={guest.id}>
//                     <td className="tdName">{guest.firstName}</td>
//                     <td className="tdName">{guest.lastName}</td>
//                     <td>
//                       <button
//                         className={
//                           guest.attending
//                             ? 'attendButtonConfirmed'
//                             : 'attendButton'
//                         }
//                         type="button"
//                         onClick={() => {
//                           handleAttend(guest.id);
//                         }}
//                       >
//                         &#10003;
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="deleteButton"
//                         type="button"
//                         onClick={() => handleDelete(guest.id)}
//                         id="delete"
//                       >
//                         x
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { useEffect, useState } from 'react';
// import LoadingIndicator from './LoadingIndicator';

// const topHeading = css`
// text-align: center``

// const useLoader = () => {
//   const [loading, setLoading] = useState(false);
//   return [
//     loading ? <LoadingIndicator /> : null,
//     () => setLoading(true), // Show the loading indicator
//     () => setLoading(false), // Hide the loading indicator
//   ];
// };

// export default function App() {
//   const baseUrl = 'https://olgas-react-guest-list.herokuapp.com';
//   const [guestList, setGuestList] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isAttending, setIsAttending] = useState(false);
//   const [loader, showLoader, hideLoader] = useLoader();

//   useEffect(() => {
//     const getList = async () => {
//       showLoader();
//       const response = await fetch(`${baseUrl}/`);
//       const allGuests = await response.json();

//       setGuestList(allGuests);
//       setIsAttending(false);
//     };

//     getList();
//     hideLoader();
//   });
//   // Add new guest:
//   async function newGuest() {
//     const response = await fetch(`${baseUrl}/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//       }),
//     });
//     const createdGuest = await response.json();
//     return createdGuest;
//   }

//   const handleSubmit = (event) => {
//     newGuest();
//     event.preventDefault();
//     event.target.reset();
//   };
//   // Delete guests:
//   function handleDelete(id) {
//     async function deleteGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'DELETE',
//       });
//       const deletedGuest = await response.json();
//       return deletedGuest;
//     }
//     deleteGuest();
//   }
//   // attend function
//   function handleAttend(id) {
//     async function editGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ attending: true }),
//       });

//       const updatedGuest = await response.json();
//       return updatedGuest;
//     }
//     editGuest();
//   }

//   return (
//     <>
//       <section>
//         <div>
//           <h1 css={topHeading}>Join the Party:</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor={firstName}>
//               First Name:
//               <input
//                 onChange={(event) => setFirstName(event.currentTarget.value)}
//               />
//             </label>
//             <label htmlFor={lastName}>
//               Last Name:
//               <input
//                 onChange={(event) => setLastName(event.currentTarget.value)}
//               />
//             </label>
//             <button>Add guest</button>
//           </form>
//           {loader}
//         </div>
//       </section>

//       <section className="listBackground">
//         <div>
//           <div>
//             <h2>Guest List</h2>

//             <table>
//               <tbody>
//                 {guestList.map((guest) => (
//                   <tr key={guest.id}>
//                     <td className="tdName">{guest.firstName}</td>
//                     <td className="tdName">{guest.lastName}</td>
//                     <td>
//                       <button
//                         className={
//                           guest.attending
//                             ? 'attendButtonConfirmed'
//                             : 'attendButton'
//                         }
//                         type="button"
//                         onClick={() => {
//                           handleAttend(guest.id);
//                         }}
//                       >
//                         &#10003;
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="deleteButton"
//                         type="button"
//                         onClick={() => handleDelete(guest.id)}
//                         id="delete"
//                       >
//                         x
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { useEffect, useState } from 'react';
// import LoadingIndicator from './LoadingIndicator';

// const topHeading = css`
// text-align: center``

// const useLoader = () => {
//   const [loading, setLoading] = useState(false);
//   return [
//     loading ? <LoadingIndicator /> : null,
//     () => setLoading(true), // Show the loading indicator
//     () => setLoading(false), // Hide the loading indicator
//   ];
// };

// export default function App() {
//   const baseUrl = 'https://olgas-react-guest-list.herokuapp.com';
//   const [guestList, setGuestList] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isAttending, setIsAttending] = useState(false);
//   const [loader, showLoader, hideLoader] = useLoader();

//   useEffect(() => {
//     const getList = async () => {
//       showLoader();
//       const response = await fetch(`${baseUrl}/`);
//       const allGuests = await response.json();

//       setGuestList(allGuests);
//       setIsAttending(false);
//     };

//     getList();
//     hideLoader();
//   });
//   // Add new guest:
//   async function newGuest() {
//     const response = await fetch(`${baseUrl}/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//       }),
//     });
//     const createdGuest = await response.json();
//     return createdGuest;
//   }

//   const handleSubmit = (event) => {
//     newGuest();
//     event.preventDefault();
//     event.target.reset();
//   };
//   // Delete guests:
//   function handleDelete(id) {
//     async function deleteGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'DELETE',
//       });
//       const deletedGuest = await response.json();
//       return deletedGuest;
//     }
//     deleteGuest();
//   }
//   // attend function
//   function handleAttend(id) {
//     async function editGuest() {
//       const response = await fetch(`${baseUrl}/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ attending: true }),
//       });

//       const updatedGuest = await response.json();
//       return updatedGuest;
//     }
//     editGuest();
//   }

//   return (
//     <>
//       <section>
//         <div>
//           <h1 css={topHeading}>Join the Party:</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor={firstName}>
//               First Name:
//               <input
//                 onChange={(event) => setFirstName(event.currentTarget.value)}
//               />
//             </label>
//             <label htmlFor={lastName}>
//               Last Name:
//               <input
//                 onChange={(event) => setLastName(event.currentTarget.value)}
//               />
//             </label>
//             <button>Add guest</button>
//           </form>
//           {loader}
//         </div>
//       </section>

//       <section className="listBackground">
//         <div>
//           <div>
//             <h2>Guest List</h2>

//             <table>
//               <tbody>
//                 {guestList.map((guest) => (
//                   <tr key={guest.id}>
//                     <td className="tdName">{guest.firstName}</td>
//                     <td className="tdName">{guest.lastName}</td>
//                     <td>
//                       <button
//                         className={
//                           guest.attending
//                             ? 'attendButtonConfirmed'
//                             : 'attendButton'
//                         }
//                         type="button"
//                         onClick={() => {
//                           handleAttend(guest.id);
//                         }}
//                       >
//                         &#10003;
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="deleteButton"
//                         type="button"
//                         onClick={() => handleDelete(guest.id)}
//                         id="delete"
//                       >
//                         x
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
