export const setToken = (token) => {
  if (!token) return;
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
};

// 🔥 user decode (important for role)
export const getUser = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const base64Payload = token.split(".")[1];

    // ❌ invalid token format
    if (!base64Payload) return null;

    const payload = JSON.parse(atob(base64Payload));

    // optional: basic validation
    if (!payload || !payload.email) return null;

    return payload; // { email, role }
  } catch (err) {
    return null;
  }
};