import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Atividade from '../screens/Atividade';

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    
    Atividade: {
        nome: "Atividade",
        screen: Atividade
    }
}

// Parte de rotas
const Navegacao = createSwitchNavigator(Rotas);

// Parte App
export default createAppContainer(Navegacao);