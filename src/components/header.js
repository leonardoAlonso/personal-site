import React from 'react';
import ilustration from '../img/undraw_solution_mindset_34bi.svg'
export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">¡Hola! soy Leonardo Alonso</h1>
                    <p className="text-xl font-light">Soy desarrollador backend</p>
                </div>
                <img src={ilustration} style={{height:"300px"}} alt="Soluciones inteligentes"></img>
            </div>
        </div>
    </header>
)