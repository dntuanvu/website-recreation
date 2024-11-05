import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  page: string;
  content: string;
};

const data: Record<string, Data> = {
  home: { page: "Home", content: "Welcome to the homepage!" },
  about: { page: "About", content: "Learn more about us." },
  contact: { page: "Contact", content: "Feel free to reach out to us." },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { page } = req.query;
  if (page && typeof page === "string" && data[page]) {
    res.status(200).json(data[page]);
  } else {
    res.status(404).json({ page: "Error", content: "Page not found" });
  }
}
