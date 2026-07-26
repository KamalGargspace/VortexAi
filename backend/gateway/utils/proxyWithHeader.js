import proxy from "express-http-proxy";
export const proxyWithHeader = (service) => {
  return proxy(service, {
    proxyReqOptDecorator: (proxyReqOpts, req) => {
      if (req.user) {
        proxyReqOpts.headers["x-user-id"] = req.user.userId;
      }
    }
  })
}
