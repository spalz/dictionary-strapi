"use strict";

/**
 * word controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::word.word", {
  async create(ctx) {
    const user = ctx.state.user;
    const word = await super.create(ctx);
    const updated = await strapi.entityService.update(
      "api::word.word",
      word.data.id,
      {
        data: {
          author: user.id,
        },
      }
    );
    return updated;
  },

  async find(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      author: user.id,
    };

    return super.find(ctx);
  },
});
