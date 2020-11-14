// eslint-disable-next-line no-undef
module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow gendered text',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://github.com/chinanwu/eslint-plugin-salmon',
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					lang: {
						enum: ['en'],
						default: 'en',
					},
					onlyComments: {
						type: 'boolean',
						default: true,
					},
				},
				additionalProperties: false,
			},
		],
	},
	create: (context) => {
		// TODO
	},
};
