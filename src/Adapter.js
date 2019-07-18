

fetch(
  "http://localhost:3000/api/v1/users",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify({ user: userInfo })
  }
)
  .then(resp => resp.json())
