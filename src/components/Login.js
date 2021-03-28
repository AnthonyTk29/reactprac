import React  from 'react';
import './css/Login.css';

class Login extends React.Component{
    render(){
        let receta ={
            nombre: 'pizza',
            ingredientes: ['tomate','peperoni','anchoas','queso motzarella','harina'] 
        }

        return(
            <div className="contenedor">
                <div className="tit">
                    <h1>{'Inicio de sesión'}</h1>
                </div>
                <form className="contenedor1" action="repartidor.php" method="POST">
                    <p id="letra1">Usuario: <input className="form1" type="text" placeholder="Usuario" name="usuario" required=""></input></p> 
                    <p id="letra2">Contraseña: <input className="form2" type="password" placeholder="Contraseña" name="password" required=""></input></p>
                    <input id="boton" type="submit" class="boton" placeholder="Iniciar sesion"name="enviar"></input>
                </form>
                <h3>¿No tienes cuenta? <a href='/components/Registro'>Registrarse</a></h3>
            </div>
        );
    }
}
export default Login;
