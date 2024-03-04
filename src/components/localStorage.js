const getContactsLocalStorage = () => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      return savedContacts;
    } else {
      return [];
    }
};
  
export default getContactsLocalStorage;