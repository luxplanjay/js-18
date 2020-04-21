const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTlmMWJkNmIxODkyMTAwMTc1MGE5MWYiLCJpYXQiOjE1ODc0ODU2NTR9.r6HnAMqE1znCkYbvq8AOCd-NdMiH8O2-v4Nw5lwivio";

const baseUrl = "https://goit-phonebook-api.herokuapp.com";

const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchContacts = () => {
  return fetch(`${baseUrl}/contacts`, {
    headers,
  }).then((res) => res.json());
};

const createContact = (name, number) => {
  const options = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, number }),
  };

  return fetch(`${baseUrl}/contacts`, options).then((res) => res.json());
};

const deleteContact = (id) => {
  const options = {
    method: "DELETE",
    headers,
  };

  return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
};

const updateContact = (id, fields) => {
  const options = {
    method: "PATCH",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  };

  return fetch(`${baseUrl}/contacts/${id}`, options).then((res) => res.json());
};

export default { fetchContacts, createContact, deleteContact, updateContact };
