import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTlmMWJkNmIxODkyMTAwMTc1MGE5MWYiLCJpYXQiOjE1ODc0ODU2NTR9.r6HnAMqE1znCkYbvq8AOCd-NdMiH8O2-v4Nw5lwivio";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);

  return data;
};

const createContact = async (name, number) => {
  const { data } = await axios.post("/contacts", { name, number });

  return data;
};

const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`);
};

const updateContact = (id, fields) => {
  const { data } = axios.patch(`/contacts/${id}`, fields);

  return data;
};

export default { fetchContacts, createContact, deleteContact, updateContact };

// const fetchContacts = () => {
//   return fetch(`${baseUrl}/contacts`, {
//     headers,
//   }).then((res) => res.json());
// };

// const createContact = (name, number) => {
//   const options = {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, number }),
//   };

//   return fetch(`${baseUrl}/contacts`, options).then((res) => res.json());
// };
