module.exports = {
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTION'],
  exposeHeaders: ['X-Pagination-Total-Count', 'X-Pagination-Limit', 'X-Orig-IP', 'x-forwarded-for', 'X-Requested-With', 'Origin'],
};
