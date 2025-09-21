# Stock API Integration Setup Guide

This guide will help you integrate your real-time stock data API with the Azalee Wealth application.

## 🚀 Quick Start

### 1. Choose Your API Provider

The system supports multiple stock API providers. Here are the recommended options:

#### **Yahoo Finance (Recommended for testing)**
- **Cost**: Free
- **Rate Limit**: 1000 requests per hour
- **No API key required**
- **Perfect for development and testing**

#### **Alpha Vantage**
- **Cost**: Free tier available
- **Rate Limit**: 5 API calls per minute, 500 per day
- **Requires API key**
- **Good for production use**

#### **Finnhub**
- **Cost**: Free tier available
- **Rate Limit**: 60 API calls per minute
- **Requires API key**
- **Excellent for real-time data**

#### **IEX Cloud**
- **Cost**: Free tier available
- **Rate Limit**: 50,000 messages per month
- **Requires API key**
- **Professional-grade service**

### 2. Environment Configuration

Create or update your `.env.local` file with the following variables:

```bash
# Stock API Configuration
STOCK_API_PROVIDER=YAHOO_FINANCE
STOCK_API_BASE_URL=https://your-api-provider.com
STOCK_API_KEY=your_api_key_here

# Stock Symbols (optional - defaults will be used if not specified)
CAC40_SYMBOL=^FCHI
NASDAQ_SYMBOL=^NDX
DOW_JONES_SYMBOL=^DJI
EUR_USD_SYMBOL=EURUSD=X
```

### 3. API Provider Specific Setup

#### Yahoo Finance (No setup required)
```bash
STOCK_API_PROVIDER=YAHOO_FINANCE
# No other variables needed
```

#### Alpha Vantage
1. Sign up at [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. Get your free API key
3. Configure environment:
```bash
STOCK_API_PROVIDER=ALPHA_VANTAGE
STOCK_API_KEY=your_alpha_vantage_key
```

#### Finnhub
1. Sign up at [Finnhub](https://finnhub.io/register)
2. Get your free API key
3. Configure environment:
```bash
STOCK_API_PROVIDER=FINNHUB
STOCK_API_KEY=your_finnhub_key
```

#### IEX Cloud
1. Sign up at [IEX Cloud](https://iexcloud.io/cloud-login#/register)
2. Get your free API key
3. Configure environment:
```bash
STOCK_API_PROVIDER=IEX_CLOUD
STOCK_API_KEY=your_iex_cloud_key
```

## 🔧 Customization Options

### Adding New Stock Symbols

You can easily add more stock symbols by updating the `src/lib/stockApiConfig.js` file:

```javascript
export const STOCK_SYMBOLS = {
  // Existing symbols...
  FTSE_100: '^FTSE',      // FTSE 100 (UK)
  DAX: '^GDAXI',          // DAX (Germany)
  NIKKEI: '^N225',        // Nikkei 225 (Japan)
  // Add your custom symbols here
  CUSTOM_STOCK: 'YOUR_SYMBOL'
};
```

### Customizing Update Intervals

Modify the update frequency in the `StockTicker` component:

```javascript
// In src/components/common/StockTicker.jsx
useEffect(() => {
  fetchStockData();
  
  // Change 30000 to your desired interval (in milliseconds)
  const interval = setInterval(fetchStockData, 30000); // 30 seconds
  
  return () => clearInterval(interval);
}, []);
```

### Adding New API Providers

To add a custom API provider, update the `API_PROVIDERS` object in `src/lib/stockApiConfig.js`:

```javascript
export const API_PROVIDERS = {
  // Existing providers...
  YOUR_CUSTOM_PROVIDER: {
    name: 'Your Custom Provider',
    baseUrl: 'https://your-api.com',
    endpoints: {
      quote: '/v1/quote/{symbol}?key={apiKey}',
      search: '/v1/search?q={query}&key={apiKey}'
    },
    requiresAuth: true,
    rateLimit: '100 requests per minute',
    documentation: 'https://your-api.com/docs'
  }
};
```

## 📊 Available Stock Data

The system currently displays:

- **CAC 40** (French stock market index)
- **Nasdaq 100** (US technology stocks)
- **Dow Jones** (US industrial stocks)
- **EUR/USD** (Euro to US Dollar exchange rate)

### Adding More Data

To display additional stock data, update the `StockTicker` component:

```javascript
const [stockData, setStockData] = useState({
  cac40: { value: 7822.67, change: 0.07, isPositive: true },
  nasdaq: { value: 23054.24, change: 0.23, isPositive: true },
  dowJones: { value: 44245.15, change: -0.51, isPositive: false },
  eurUsd: { value: 1.1595 },
  // Add your new stock here
  ftse100: { value: 7500.00, change: 0.15, isPositive: true }
});
```

## 🧪 Testing Your Integration

### 1. Test the API Endpoint

Visit `/api/stock-data` in your browser to test the API response.

### 2. Check Browser Console

Open your browser's developer tools and check the console for any error messages.

### 3. Verify Environment Variables

Ensure your `.env.local` file is properly configured and the server has been restarted.

### 4. Test Different Providers

Try switching between different API providers to find the one that works best for you.

## 🚨 Troubleshooting

### Common Issues

#### API Rate Limiting
- **Symptom**: 429 errors or no data updates
- **Solution**: Check your API provider's rate limits and adjust update intervals

#### Invalid API Key
- **Symptom**: 401 or 403 errors
- **Solution**: Verify your API key is correct and has the right permissions

#### CORS Issues
- **Symptom**: Network errors in browser console
- **Solution**: The API calls are made server-side, so CORS shouldn't be an issue

#### No Data Updates
- **Symptom**: Stock values remain static
- **Solution**: Check browser console for errors and verify API endpoint is working

### Debug Mode

Enable debug logging by adding this to your environment:

```bash
DEBUG_STOCK_API=true
```

## 📈 Performance Optimization

### Caching Strategy
- Data is cached for 30 seconds by default
- Adjust based on your API provider's rate limits
- Consider implementing Redis for production caching

### Error Handling
- Fallback data is provided when API fails
- Automatic retry mechanism with exponential backoff
- Graceful degradation ensures UI remains functional

### Rate Limiting
- Respect your API provider's rate limits
- Implement request queuing for high-frequency updates
- Use WebSocket connections if available for real-time data

## 🔒 Security Considerations

### API Key Protection
- Never commit API keys to version control
- Use environment variables for sensitive data
- Consider using API key rotation for production

### Request Validation
- Validate all incoming API responses
- Implement request throttling
- Monitor API usage and costs

## 📚 Additional Resources

### API Documentation
- [Yahoo Finance API](https://finance.yahoo.com/apis)
- [Alpha Vantage Documentation](https://www.alphavantage.co/documentation/)
- [Finnhub API Docs](https://finnhub.io/docs/api)
- [IEX Cloud API Reference](https://iexcloud.io/docs/api/)

### Support
- Check the browser console for detailed error messages
- Verify your API provider's status page
- Review the API response format in the browser's Network tab

## 🎯 Next Steps

1. **Choose your API provider** based on your needs and budget
2. **Configure environment variables** with your API credentials
3. **Test the integration** by visiting the retirement page
4. **Customize the display** by adding more stock symbols
5. **Monitor performance** and adjust update intervals as needed

Your stock ticker should now display real-time data from your chosen API provider! 🎉












