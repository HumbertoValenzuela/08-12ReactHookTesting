// configurar mis rutas de la aplicación. Una aplicación puede tener mas de un Router
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter >
        {/* reactrouter. sugiere un div para contener todo la info que el BrowserRouter manejará, es posible con un Fragment  o <> </> */}
        <div>
            <NavBar /> 
            {/*Higher order component que tiene otro componente dentro */}
            {/* Switch es como el de JS */}
            {/* Un <Switch> mira a través de sus <Route> hijos y renderiza el primero que coincide con la URL actual */}
             {/* notar que hace un refresh. exact para que la ruta sea exacta */}

            <Switch>
                <Route exact path="/" component= { HomeScreen } />
                <Route exact path="/about" component= { AboutScreen } />
                <Route exact path="/login" component= { LoginScreen } />
                {/* default
                <Route component={HomeScreen} /> */}
                <Redirect to="/" />
            </Switch>
        </div>
        </BrowserRouter>
    )
}
