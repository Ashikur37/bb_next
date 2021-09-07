// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "../../redux/actions/axios";
export default async (req, res) => {
  const { locale, type } = req.query;

  const data = await axios
    .get(locale + "/getdata/products/" + type)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  res.statusCode = 200;
  res.json(data);
};
