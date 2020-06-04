import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';


import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState(' ');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [submit, setSubmit] = useState(false);
  const [msg, setMsg] = useState(SuccessMessage);

  const handleSetName = (e) => {
    const { value } = e.target;

    setName(value);
  };

  const handleSetAvatar = (e) => {
    const { value } = e.target;

    setAvatar(value);
  };

  const handleSetUserName = (e) => {
    const { value } = e.target;

    setUsername(value);
  };

  const handleSetEmail = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (name === ' ' || username === ' ' || email === ' ') {
      return alert('Erro! Por favor preencha todos os dados')
    }


    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postObject
    }).then(() => setSubmit(true));
  };

  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar
                  ? <img src={avatar} alt="" />
                  : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt=" " />
                }
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Fulano da Silva"
              onChange={(e) => handleSetName(e)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: fulano_da_silva"
              onChange={(e) => handleSetUserName(e)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: fulano@provedor.com"
              onChange={(e) => handleSetEmail(e)}
            />

            <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(e) => handleSetAvatar(e)}
            />

            <button
              type="button"
              onClick={(e) => handleAddUser(e)}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {submit && msg}

    </>
  );
};

export default UserForm;
