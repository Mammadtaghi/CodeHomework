import React from 'react';
import { useUser } from '../../Context/userContext';
import UserInfo from '../../Layouts/Account Layouts/UserInfo';
import style from "./index.module.scss";
import NewProductForm from '../../Layouts/Account Layouts/NewProductForm';

function Account() {

  const { user } = useUser()

  return (
    <main id={style.Account}>
      <UserInfo />
      <NewProductForm/>
    </main>
  )
}

export default Account