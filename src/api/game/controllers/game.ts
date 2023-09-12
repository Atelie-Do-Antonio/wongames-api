/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
      console.log("Rodando no servidor")
      // const data = await strapi.services.game.populate();
      ctx.send("Finalizado no client");
    },
  })
);
