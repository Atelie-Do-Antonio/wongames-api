/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
      console.log("Starting to populate...")

      await strapi.service("api::game.game").populate(ctx.query);

      // const data = await strapi.services.game.populate();
      ctx.send("Finished populating!");
    },
  })
);
