module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
    "users-permissions": {
      config: {
        jwt: {
          expiresIn: "1y",
        },
      },
    },
  },
  "duplicate-button": true,

  email: {
    config: {
      provider: "strapi-provider-email-mailjet",
      providerOptions: {
        publicApiKey: env("MAILJET_PUBLIC_KEY"),
        secretApiKey: env("MAILJET_SECRET_KEY"),
      },
      settings: {
        defaultFrom: "noreply@lexicon.life",
        defaultFromName: "Lexicon life",
        defaultTo: "spals@protonmail.com",
        defaultToName: "Andrey Petrov",
      },
    },
  },
});
