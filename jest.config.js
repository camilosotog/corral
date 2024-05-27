module.exports = {
    reporters: [
      'default',
      ['jest-html-reporters', {
        publicPath: './reports',
        filename: 'report.html',
        expand: true,
      }],
    ],
  };
  