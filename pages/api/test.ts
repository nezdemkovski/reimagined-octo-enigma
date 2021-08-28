import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { createUser } from "../../utils/db";

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await createUser("asdasdasdas", "");
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
};

export default test;
