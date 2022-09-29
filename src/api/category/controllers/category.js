"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::category.category", {
  async create(ctx) {
    const user = ctx.state.user;
    const category = await super.create(ctx);
    const updated = await strapi.entityService.update(
      "api::category.category",
      category.data.id,
      {
        data: {
          owner: user.id,
        },
      }
    );
    return updated;
  },

  async find(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      owner: user.id,
    };

    return super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      owner: user.id,
    };

    return super.findOne(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      owner: user.id,
    };

    return super.update(ctx);
  },

  async delete(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      owner: user.id,
    };

    return super.delete(ctx);
  },
});
