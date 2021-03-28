import React  from 'react';
import './css/Menu.css';

class Menu extends React.Component{
    render(){
        let receta ={
            nombre: 'pizza',
            ingredientes: ['tomate','peperoni','anchoas','queso motzarella','harina'] 
        }

        return(
            <div className='sticky'>
                <ul id="menu">
                    <li id="horizontal"><a href="javascript:location.reload()">Inicio</a></li>
                    <li id="horizontal"><a href="noso.html">Nosotros</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Productos</a>
                        <div class="dropdown-content">
                            <a href="herbicidas1.php">Herbicidas</a>
                            <a href="funguicidas1.php">Funguicidas</a>
                            <a href="insecticidas1.php">Insecticidas</a>
                        </div>
                    </li>
                    <li id="horizontal"><a href="javascript:location.reload()">Iniciar Sesion</a></li>
                </ul>
            </div>
        );
    }
}
export default Menu;