import type { NextApiRequest, NextApiResponse } from "next";

import { createUser } from "../../utils/db";

const hooks = async (req: NextApiRequest, res: NextApiResponse) => {
  const { auth0Id: reqAuth0Id, email: reqEmail, secret } = JSON.parse(req.body);

  const auth0Id = reqAuth0Id as string;
  const email = (reqEmail as string) || "";

  if (secret === process.env.AUTH0_HOOK_SECRET) {
    try {
      console.log("creating user");
      await createUser(auth0Id, email);
      console.log(`created user (${auth0Id})`);
      res.send({ received: true });
    } catch (err) {
      console.log(err);
      res.send({ received: true });
    }
  } else {
    console.log("You forgot to send me your secret!");
    res.send("You forgot to send me your secret!");
  }
};

export default hooks;
