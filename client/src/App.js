import React from 'react';
import LoginRouting from './Routing/LoginRouting'
import DrawerRouting from './Routing/DrawerRouting';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <LoginRouting/>
      <DrawerRouting />  
    </div>
  );
}

export default App;
