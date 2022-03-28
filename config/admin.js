module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c5a4397c05461003c3120f2181a85436'),
  },
});
