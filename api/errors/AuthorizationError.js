module.exports = {
    InsufficientPrivileges: {
        description: 'Does not have the necessary privileges to perform this operation.',
        status: 403,
    },
    InvalidAccessToken: {
        description: 'Invalid token.',
        status: 401,
    },
    InvalidRefreshToken: {
        description: 'Invalid refresh token.',
        status: 401,
    },
    EmailSignUpInvalid: {
        description: 'Email sent to sign up is invalid.',
        status: 401,
    },
};
