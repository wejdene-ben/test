import React from 'react';
import Navmenu from './components/navmenu'

const menu= [{ title:'Home'},
{ title: 'Services', subMenu: ['For entrepreneurs','For students','For hobbyists']},
{ title:'Contact'}
]


function App() {
  return (
     
<Navmenu val={menu}/>

     
  );
}

export default App;
