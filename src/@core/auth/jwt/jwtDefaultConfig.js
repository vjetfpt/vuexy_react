// ** Auth Endpoints
export default {
  loginEndpoint: '/manager/login',
  registerEndpoint: '/manager/register',
  refreshEndpoint: '/manager/refresh-token',
  logoutEndpoint: '/manager/logout',

  // ** This will be prefixed in managerorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
