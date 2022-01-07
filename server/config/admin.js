module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '85fc9bca7083757a4f092d29f36b0fd0'),
  },
});
