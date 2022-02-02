import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

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
  margin: 0;
  margin-bottom: 20px;
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
`;
// Loading ...

const useLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <LoadingIndicator /> : null,
    () => setLoading(true), // Show the loading indicator
    () => setLoading(false), // Hide the loading indicator
  ];
};

export default function App() {
  const baseUrl = 'https://api-list-of-guest.herokuapp.com/guests';
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loader, showLoader, hideLoader] = useLoader();

  useEffect(() => {
    const getList = async () => {
      showLoader();
      const response = await fetch(`${baseUrl}/`);
      const allGuests = await response.json();

      setList(allGuests);
      setDisabled(false);
    };

    getList().catch((error) => {
      console.error(error);
    });
    hideLoader();
  });

  async function newGuest() {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    const createdGuest = await response.json();
    return createdGuest;
  }

  const handleSubmit = (event) => {
    newGuest().catch((error) => {
      console.error(error);
    });
    event.preventDefault();
    event.targe.reset();
  };

  function handleDelete(id) {
    async function deleteGuest() {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });
      const deletedGuest = await response.json();
      return deletedGuest;
    }
    deleteGuest().catch((error) => {
      console.error(error);
    });
  }

  function handleAttend(id) {
    async function editGuest() {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: true }),
      });

      const updatedGuest = await response.json();
      return updatedGuest;
    }
    editGuest().catch((error) => {
      console.error(error);
    });
  }

  return (
    <div data-test-id="guest">
      <section>
        <div>
          <h1 css={headerStyle}>Join the Party</h1>
          <form css={formStyle} onSubmit={handleSubmit}>
            <label>
              First Name:
              <br />
              <input
                css={inputFieldStyle}
                onChange={(event) => setFirstName(event.currentTarget.value)}
                disabled={disabled ? true : false}
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
                onChange={(event) => setLastName(event.currentTarget.value)}
                disabled={disabled ? true : false}
              />
            </label>
            <br />
            <br />
            <br />
            <button css={addButtonStyle} disabled={disabled ? true : false}>
              Add Guest
            </button>
          </form>
          {loader}
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2 css={guestListHeadStyle}>List of Guests</h2>

            <table css={guestListStyle}>
              <tbody>
                {list.map((guest) => (
                  <tr key={guest.id}>
                    <td>{guest.firstName}</td>
                    <td>{guest.lastName}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={guest.attending}
                        onChange={() => handleAttend(guest.id)}
                      />
                      {/* <button
                        className={
                          guest.attending
                            ? 'attendButtonConfirmed'
                            : 'attendButton'
                        }
                        type="button"
                        onClick={() => {
                          handleAttend(guest.id);
                        }}
                      >
                        &#10003;
                      </button> */}
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
    </div>
  );
}
