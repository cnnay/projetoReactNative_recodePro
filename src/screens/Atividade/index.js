import React from 'react';
import { View, Text } from 'react-native';

const Atividade = [
    {
        nome: "Compras"
    },
    {
        nome: "Lavar louça"
    }
]

function Atividade() {
    return (
        <View>

            {
                Atividade.map((Atividade, index) => 
                    <Text key={index}>{Atividade.nome}</Text>
                )
            }

        </View>
    )
}

export default Atividade;