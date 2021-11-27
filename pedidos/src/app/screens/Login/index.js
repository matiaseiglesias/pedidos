import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

//import {isValidEmail, isValidPassword} from '../../../utils/validations';
import Input from '../../components/Input';

import styles from './styles.module.scss';
import {ROUTES} from '../../../constants/routes';
//import { setValue} from '../../../services/LocalStorageService'
//import { post } from '../../../utils/requests'

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = event => setEmail(event?.currentTarget?.value);
  const handlePassChange = event => setPassword(event?.currentTarget?.value);

  const handleSubmit = event => {
    history.push(ROUTES.CONTENT)
    event.preventDefault();
  };

  //const handleSubmit = event => {
  //    if (isValidEmail(email) && isValidPassword(password)) {
  //      firebase.auth().signInAnonymously()
  //      .then(() => {
  //        post({ body: {email, password}, apiRoute: 'api/users/signIn'})
  //          .then(res => {
  //            setValue("user", res.data);
  //            history.push(ROUTES.CONTENT);
  //          })
  //          .catch(err => console.log(err))
  //        })
  //      .catch((error) => {
  //        console.log(error)
  //      });
  //    }
  //    event.preventDefault();
  //};
  
  return (
    <div className={styles.container}>
      <div className={styles.title} >Apertura De Pedidos WMS</div>
      <img className={`logo ${styles.logo}`} src= 'http://www.ensolsa.com/assets/img/logo.jpg'> 
      </img>
      <form className={`column center ${styles.loginFormContainer}`} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          className="m-bottom-4 full-width column"
          inputClassName={styles.loginInput}
          type="email"
          inputType="text"
          onChange={handleUserChange}
          value={email}
          //required
        />
        <Input
          name="password"
          label="Contraseña"
          className="m-bottom-4 full-width column"
          inputClassName={styles.loginInput}
          type="password"
          inputType="text"
          value={password}
          onChange={handlePassChange}
          //required
        />
        <div className={styles.loginButtonContainer}>
          <button type="submit" className={`row middle center m-bottom-4 ${styles.loginButton}`}>
            <span className={`${styles.loginButtonText} bold text-uppercase`}>
              Ingresar
            </span>
          </button>
        </div>
      </form>
    </div>
    );
  }


export default Login;
