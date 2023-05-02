// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type Data = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("digi_token", "", {
      httpOnly: true,
      maxAge: 0,
      sameSite: "lax",
      path: "/",
    })
  );
  res.status(200).json({ status: "success" });
}
