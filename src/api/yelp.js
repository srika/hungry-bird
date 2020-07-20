import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
      Authorization:
        'Bearer vvU0BgDFQEoJcMVQnNT9V9A8hRavDfHnCxre5Y7zYZNXbAId2eSTzC3AlawudBpISwRsxeSpnmAX85hGbZa1gl3UoAtvZ5i05hsVSQvYdbi7qP7M2dt4tU6t4D34XnYx'
    }
});
