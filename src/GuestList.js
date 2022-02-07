//     const getList = async () => {
//       setIsLoading(true);
//       const response = await fetch(`${baseUrl}/guests`);
//       const allGuests = await response.json();

//       setList(allGuests);
//       setIsLoading(false);
//     };

//     getList().catch((error) => {
//       console.error(error);
//     });
//   });
//   // submit handler for form
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   // add new guest
//   async function newGuest() {
//     const response = await fetch(`${baseUrl}/guests`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//         isAttending: false,
//       }),
//     });
//     const createdGuest = await response.json();
//     console.log(createdGuest);
//     setFirstName('');
//     setLastName('');
//     setGuestList([...guestList, createdGuest]);
//   }
//    newGuest().catch((error) => {console.error(error)});
// };

// //   async function newGuest() {
// //     const response = await fetch(`${baseUrl}/guests`, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         firstName: firstName,
// //         lastName: lastName,
// //       }),
// //     });
// //     window.location.reload(false);
// //     const createdGuest = await response.json();
// //     return createdGuest;
// //   }
// //   await newGuest()
// // };

//   // delete guest
//   function handleDelete(id) {
//     async function deleteGuest() {
//       const response = await fetch(`${baseUrl}/guests${id}`, {
//         method: 'DELETE',
//       });
//       const deletedGuest = await response.json();
//       return deletedGuest;
//     }
//     deleteGuest().catch((error) => {
//       console.error(error);
//     });
//     const updatedList = guestList.filter((guest) => guest.id !== id);
//     setGuestList(updatedList)
//   }
//   // handler for checkbox attendance
//   function handleAttend(id, isChecked) {
//     async function editGuest() {
//       const response = await fetch(`${baseUrl}/guests/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ attending: isChecked }),
//       });
//       const updatedGuest = await response.json();
//       console.log(updatedGuest);

//       const guestListCopy = [...guestList];
//       const findGuest = guestListCopy.find((guest) => guest.id === id);
//       findGuest.attending = isChecked;

//       console.log(findGuest);

//       setGuestList(guestListCopy);
//       return updatedGuest;
//     }
//     editGuest().catch((error) => {
//       console.log.error(error);
//     });
//   }
