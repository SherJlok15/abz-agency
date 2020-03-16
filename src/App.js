import React from 'react';
import { Banner, AboutMe, Footer} from './components';
import { Users, RegisterForm, CreateNewUserModal, Header } from './modules';


function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutMe />
        <Users />
        <RegisterForm />
      </main>
      <Footer />
      <CreateNewUserModal />
    </>
  );
}

export default App;
