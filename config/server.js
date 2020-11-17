module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8947),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '060c15781a6261413d68f7b9589fab4a'),
    },
  },
});
