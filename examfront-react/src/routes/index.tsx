import Dashboard from 'contanier/Dashboard'
import Calender from 'components/Pages/Dashboard/calender'
import Mail from 'contanier/Mail'
import Student from 'contanier/Invoice'
import ToDo from 'contanier/ToDo'
export const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/calendar',
    element: <Calender />,
  },
  {
    path: '/mail',
    element: <Mail />,
  },
  {
    path: '/Student',
    element: <Student />,
  },
  {
    path: '/todo',
    element: <ToDo />,
  },
 
]
