// В этом файле массив со всем путями / роутами приложения

import { Navigate } from 'react-router';
import Posts from './Posts';
import Localization from './Localization';
import Theme from './Theme';

export default [
  {
    path: '/',
    element: <Navigate to="localization" />
  },
  {
    path: 'localization',
    element: <Localization />
  },
  {
    path: 'theme',
    element: <Theme />
  },
  {
    path: 'posts',
    element: <Posts />
  },
  {
    path: '404',
    element: <div>Not Found</div>
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];
