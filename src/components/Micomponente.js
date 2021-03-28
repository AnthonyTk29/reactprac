import React  from 'react';

class Micomponente extends React.Component{
    render(){
        let receta ={
            nombre: 'pizza',
            ingredientes: ['tomate','peperoni','anchoas','queso motzarella','harina'] 
        }

        return(
            <div className='micomponete'>
                <h1>Hola soy el Componente llamado: Micomponente</h1>
                <hr/>
                <h2>{'Receta: '+ receta.nombre}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i)=> {
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }


}
export default Micomponente;