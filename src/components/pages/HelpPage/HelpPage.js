import { Outlet, Link } from 'react-router-dom';

import './styles.scss';

export default function HelpPage() {
  return (
    <div className='help'>

    
      <h1>Help page</h1>

       
      <Outlet/>

      <Link to="/help">Introduction</Link> 
      <Link to="adding-task">Adding Tasks</Link> 
      <Link to="removing-task">Removing Task</Link> 
      <Link to="changing-status">Changing Status</Link> 
    </div>   



 
  );
}
