export default (req, res) => {
  const allowedRoutes = {
    "POST": "/create",
    "PATCH": "edit/:_id",
    "DELETE": "d/:_id"
  }

  const apiVersion = 1.1;
  const path = req.url

  res.send({v: apiVersion, path, routes: allowedRoutes})
}