export function Api(url) {
  //---------Форма для запроса на сервер для получения данных

  const localToken = localStorage.getItem("token");

  const request = (path, method, data) => {
    return fetch(`${url}/${path}`, {
      method: method,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      },
      body: data && JSON.stringify(data),
    }).then(checkError);
  };

  //---------Получить код ошибки

  const getError = (err) => {
    console.log(err);
  };

  //---------Проверить ошибку

  const checkError = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  //---------Получить данные пользователя

  const getUserInfo = () => {
    return request("users/me");
  };

  //---------Установить данные пользователя

  const setUserInfo = (data) => {
    return request("users/me", "PATCH", data);
  };

  //---------Сменить аватар

  const changeAvatar = (data) => {
    return request("users/me/avatar", "PATCH", data);
  };

  //---------Получить карточки с сервера

  const getCards = () => {
    return request("cards");
  };

  //---------Добавить карточку

  const addNewCard = (data) => {
    return request("cards", "POST", data);
  };

  //---------Удалить карточку

  const deleteCard = (id) => {
    return request(`cards/${id}`, "DELETE");
  };

  //---------Поставить/удалить лайк с карточки

  const toggleLike = (card, isLiked) => {
    return request(`cards/${card}/likes`, isLiked ? "DELETE" : "PUT");
  };

  return {
    getError,
    getUserInfo,
    setUserInfo,
    changeAvatar,
    getCards,
    addNewCard,
    deleteCard,
    toggleLike,
  };
}
