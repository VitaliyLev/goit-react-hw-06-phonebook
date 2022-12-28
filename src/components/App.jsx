import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactsFilter/Filter';

import { Box } from './App.styled';

export function App() {
  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <div>
        <Filter />
        <ContactList />
      </div>
    </Box>
  );
}
