module.exports = { 
	url: process.env.CLOUDANT_URL, 
		plugins: {
			iamauth: {
				iamApiKey: process.env.CLOUDANT_API_KEY
			} 
		} 
};