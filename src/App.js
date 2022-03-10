import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const headerStyle = css`
  background: #caf188;
  text-align: center;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  font-size: 50px;
  word-spacing: 5px;
  letter-spacing: 10px;
  margin: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const formStyle = css`
  justify-content: center;
  display: block;
  border: solid 2px #caf188;
  border-radius: 10px;
  margin: 0px 180px;
  text-align: center;
  padding: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const addButtonStyle = css`
  background-color: #9fbf69;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  width: 200px;

  border: transparent;
  border-bottom: #516331 solid 3px;
`;

const inputFieldStyle = css`
  border: solid 2px #9fbf69;
  margin-top: 15px;
`;

const guestListHeadStyle = css`
  text-align: center;
  color: #9fbf69;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  word-spacing: 5px;
  letter-spacing: 10px;
`;

const guestListStyle = css`
  justify-content: center;
  display: block;
  justify-content: space-between;
  border: solid 2px #caf188;
  border-radius: 10px;
  margin: 0px 180px;
  text-align: center;
  padding: 50px;

  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const removeButtonStyle = css`
  border-radius: 50%;
  background: #cd726e;
  color: #c3140c;
  border: transparent;
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 5px;
  display: flex;
`;

const checkboxStyle = css`
  margin-left: 210px;
  border: #516331 solid 2px;
  cursor: pointer;
  padding: 50px;
  width: 20px;
  height: 20px;
  :checked {
    background-color: #516331;
  }
`;

const attendingRemoveButtonStyle = css`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;
const baseUrl = 'https://api-list-of-guest.herokuapp.com';

export default function App() {
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Getting all the guests
  useEffect(() => {
    const getGuestList = async () => {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setList(allGuests);
      setIsLoading(false);
    };
    getGuestList().catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // creating a new guest
    async function newGuest() {
      const response = await fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          isAttending: false,
        }),
      });
      const createdGuest = await response.json();
      console.log(createdGuest);
      setFirstName('');
      setLastName('');
      setList([...list, createdGuest]);
    }
    await newGuest();
  };

  // attend handler
  function handleAttend(id, isChecked) {
    async function editGuest() {
      const response = await fetch(`${baseUrl}/guests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: isChecked }),
      });
      const updatedGuest = await response.json();
      console.log(updatedGuest);

      const guestListCopy = [...list];
      const findGuest = guestListCopy.find((guest) => guest.id === id);
      findGuest.attending = isChecked;

      console.log(findGuest);

      setList(guestListCopy);
      return updatedGuest;
    }
    editGuest().catch((error) => {
      console.log.error(error);
    });
  }
  // delete guest
  function handleDelete(id) {
    async function deleteGuest() {
      const response = await fetch(`${baseUrl}/guests/${id}`, {
        method: 'DELETE',
      });
      const deletedGuest = await response.json();
      console.log(deletedGuest);
    }
    deleteGuest().catch((error) => {
      console.log(error);
    });
    const updatedList = list.filter((guest) => guest.id !== id);
    setList(updatedList);
  }

  return (
    <div data-test-id="guests">
      <section>
        <div>
          <h1 css={headerStyle}>Join the Party</h1>
          <form css={formStyle} onSubmit={(event) => handleSubmit(event)}>
            <label>
              First Name:
              <br />
              <input
                css={inputFieldStyle}
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
                disabled={isLoading ? 'disabled' : ''}
              />
            </label>
            <br />
            <br />
            <br />
            <br />

            <label>
              Last Name:
              <br />
              <input
                css={inputFieldStyle}
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
                disabled={isLoading ? 'disabled' : ''}
              />
            </label>
            <br />
            <br />
            <br />
            <button css={addButtonStyle}>Add Guest</button>
          </form>
        </div>
      </section>
      {isLoading ? (
        'Loading...'
      ) : (
        <section>
          <div>
            <div>
              <h2 css={guestListHeadStyle}>List of Guests</h2>

              <table css={guestListStyle}>
                <tbody>
                  {list.map((guest) => (
                    <tr
                      key={guest.id}
                      className={guest.isChecked ? 'attending' : 'notAttending'}
                    >
                      <td>{guest.firstName}</td>
                      <td>{guest.lastName}</td>
                      <td css={attendingRemoveButtonStyle}>
                        <input
                          css={checkboxStyle}
                          type="checkbox"
                          checked={guest.attending}
                          onChange={(event) => {
                            handleAttend(guest.id, event.currentTarget.checked);
                          }}
                        />
                        {guest.attending ? 'attending' : 'not attending'}
                      </td>
                      <td>
                        <button
                          aria-label="remove"
                          css={removeButtonStyle}
                          onClick={() => handleDelete(guest.id)}
                          id="delete"
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
