import type { NextApiRequest, NextApiResponse } from "next";

import auth0 from "../../lib/auth0";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
};

export default login;
