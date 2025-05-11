import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../../contexts/auth';


export default function RouteIndex() {

  const {signed} = useContext(AuthContext);

  const loading = false;
  const signIn = false

  return (
      true ? <AppRoutes/> : <AuthRoutes/>
    )
}