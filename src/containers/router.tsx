import {BrowserRouter,HashRouter} from 'react-router-dom';
import { useHashRouter } from '../config';

const Router: any = useHashRouter
  ? HashRouter
  : BrowserRouter;

export default Router;