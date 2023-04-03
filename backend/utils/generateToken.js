import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//       expiresIn: '30d',
//     })
//   }

export default generateToken

/*
It's not strictly necessary to add an expiresIn object when creating a JSON Web Token (JWT) using the jsonwebtoken package. However, it's generally a good practice to include an expiration time in the token to ensure that it's only valid for a limited period.

The expiresIn object specifies the amount of time after which the token should expire, and it can be set to a string or a number of seconds. For example, { expiresIn: '1h' } sets the token to expire after one hour, while { expiresIn: 60 } sets it to expire after 60 seconds.

If you don't include an expiresIn object when creating a JWT, the token will be valid indefinitely until it is manually revoked or the secret key is changed. This can be a security risk if the token is intercepted or stolen, as an attacker could use it to gain access to protected resources or impersonate a user.

In summary, while it's not strictly required to include an expiration time in a JWT, it's generally a good practice for security reasons.

When a JSON Web Token (JWT) expires, it's generally best practice to require the client to obtain a new token by authenticating again. This helps to ensure that only authorized users have access to protected resources and prevents the use of expired or stolen tokens.

Here are some best practices for handling expired JWTs:

Set a reasonable expiration time: Set the expiration time of the JWT to a reasonable value that fits your use case. This could be several hours, days, or weeks depending on the level of security and convenience required.

Provide a refresh mechanism: In some cases, it may be appropriate to provide a refresh mechanism that allows the client to obtain a new JWT without requiring full authentication again. This could be implemented using a refresh token or a similar mechanism.

Invalidate the old token: When a JWT expires, it's important to invalidate the old token to prevent its use. This can be done by keeping a list of invalidated tokens on the server or by using a token revocation mechanism such as the JSON Web Token Revocation (JWTR) specification.

Communicate expiration to the client: When a client obtains a JWT, it's important to communicate the expiration time to the client so that it can obtain a new token before the old one expires.

After deploying your application, you should periodically review your token expiration policies and consider whether they are appropriate for your use case. It's also important to stay up-to-date with the latest security best practices and to respond promptly to any security vulnerabilities that are discovered.
*/
