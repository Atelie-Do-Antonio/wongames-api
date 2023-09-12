/**
 * game service
 */
import axios from "axios";
import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::game.game", ({}) => ({
  async populate(params) {
    const gogApi = `https://catalog.gog.com/v1/catalog?limit=50&order=desc%3Atrending`;

    const {
      data: { products },
    } = await axios.get(gogApi);

    console.log(products);
  },
}));
