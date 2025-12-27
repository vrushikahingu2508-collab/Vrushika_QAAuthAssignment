- The application is running in a stable test environment with the frontend and backend services      properly deployed and accessible using predefined routes for registration, login, and dashboard.

- On successful authentication, the system generates a valid JWT token which is securely stored on the client side and automatically attached to subsequent requests for accessing protected resources.

- Access to protected pages (such as the dashboard) is restricted based on the presence and validity of the JWT, and unauthenticated users are redirected to the login page.

- JWT tokens have a configured expiration time, and once the token expires, the user session becomes invalid and requires re-authentication.

- All input validation rules (such as field length, email format, password complexity, and duplicate checks) are consistently enforced at the backend level, regardless of client-side validations-