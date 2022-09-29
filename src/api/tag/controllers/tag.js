"use strict";

/**
 * tag controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tag.tag", {
  async create(ctx) {
    const user = ctx.state.user;
    const tag = await super.create(ctx);
    const updated = await strapi.entityService.update(
      "api::tag.tag",
      tag.data.id,
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
