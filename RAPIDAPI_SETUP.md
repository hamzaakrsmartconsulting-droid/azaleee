# RapidAPI YH Finance Integration Guide

This guide will help you integrate the RapidAPI YH Finance API with your Azalee Wealth application for real-time stock data.

## 🚀 Quick Setup

### 1. Get Your RapidAPI Key

1. **Sign up/Login** to [RapidAPI](https://rapidapi.com)
2. **Subscribe** to the [YH Finance API](https://rapidapi.com/omarmhaimdat/api/yh-finance/)
3. **Copy your API key** from the RapidAPI dashboard

### 2. Environment Configuration

Create or update your `.env.local` file:

```bash
# Stock API Configuration for RapidAPI YH Finance
STOCK_API_PROVIDER=RAPIDAPI_YH_FINANCE
STOCK_API_KEY=your_rapidapi_key_here

# Stock Symbols (using Yahoo Finance symbols)
CAC40_SYMBOL=^FCHI
NASDAQ_SYMBOL=^NDX
DOW_JONES_SYMBOL=^DJI
EUR_USD_SYMBOL=EURUSD=X
```

**Important**: Replace `your_rapidapi_key_here` with your actual RapidAPI key.

### 3. Test the Integration

1. **Restart your development server** after updating environment variables
2. **Visit the retirement page** to see the stock ticker
3. **Check browser console** for any error messages
4. **Test the API endpoint** by visiting `/api/stock-data`

## 📊 Available Stock Data

The RapidAPI YH Finance API provides access to:

- **Stock Prices**: Real-time and delayed stock prices
- **Market Indices**: CAC 40, Nasdaq 100, Dow Jones, S&P 500, etc.
- **Currency Pairs**: EUR/USD, GBP/USD, USD/JPY, etc.
- **Crypto**: Bitcoin, Ethereum, and other cryptocurrencies
- **Commodities**: Gold, Silver, Oil, etc.

## 🔧 Customization

### Adding More Stock Symbols

You can easily add more stocks by updating your environment variables:

```bash
# Add more stocks
FTSE_100_SYMBOL=^FTSE
DAX_SYMBOL=^GDAXI
NIKKEI_SYMBOL=^N225
S_P_500_SYMBOL=^GSPC
```

### Supported Symbol Formats

- **US Stocks**: `AAPL`, `MSFT`, `GOOGL`
- **Indices**: `^FCHI` (CAC 40), `^NDX` (Nasdaq 100), `^DJI` (Dow Jones)
- **Currency**: `EURUSD=X`, `GBPUSD=X`, `USDJPY=X`
- **Crypto**: `BTC-USD`, `ETH-USD`

## 💰 Pricing & Limits

### Free Tier
- **1000 requests per month**
- **Perfect for development and small projects**

### Paid Plans
- **Basic**: $9.99/month - 10,000 requests
- **Pro**: $19.99/month - 50,000 requests
- **Ultra**: $49.99/month - 200,000 requests

## 🧪 Testing Your Setup

### 1. Test API Response

Visit `/api/stock-data` in your browser. You should see:

```json
{
  "cac40": {
    "value": 7822.67,
    "change": 0.07,
    "isPositive": true
  },
  "nasdaq": {
    "value": 23054.24,
    "change": 0.23,
    "isPositive": true
  },
  "dowJones": {
    "value": 44245.15,
    "change": -0.51,
    "isPositive": false
  },
  "eurUsd": {
    "value": 1.1595
  }
}
```

### 2. Check Browser Console

Open Developer Tools (F12) and check the Console tab for any errors.

### 3. Monitor Network Requests

In the Network tab, look for requests to `/api/stock-data` and verify the responses.

## 🚨 Troubleshooting

### Common Issues

#### API Key Invalid
- **Symptom**: 401 or 403 errors
- **Solution**: Verify your RapidAPI key is correct and active

#### Rate Limit Exceeded
- **Symptom**: 429 errors
- **Solution**: Check your RapidAPI usage and upgrade if needed

#### No Data Updates
- **Symptom**: Stock values remain static
- **Solution**: Check browser console and verify API endpoint

#### Symbol Not Found
- **Symptom**: 404 errors for specific symbols
- **Solution**: Verify symbol format and availability

### Debug Mode

Enable detailed logging by adding to your environment:

```bash
DEBUG_STOCK_API=true
NODE_ENV=development
```

## 📈 Performance Tips

### Update Frequency
- **Default**: 30 seconds (good for most use cases)
- **High-frequency**: 15 seconds (for active trading)
- **Low-frequency**: 60 seconds (to save API calls)

### Caching Strategy
- Data is cached for 30 seconds by default
- Adjust based on your RapidAPI plan limits
- Consider implementing Redis for production

## 🔒 Security

### API Key Protection
- **Never commit** API keys to version control
- **Use environment variables** for sensitive data
- **Rotate keys** regularly in production
- **Monitor usage** through RapidAPI dashboard

### Request Validation
- All API responses are validated
- Fallback data provided if API fails
- Error handling ensures graceful degradation

## 📚 API Documentation

### RapidAPI YH Finance
- [API Reference](https://rapidapi.com/omarmhaimdat/api/yh-finance/)
- [Endpoint Documentation](https://rapidapi.com/omarmhaimdat/api/yh-finance/)
- [Response Examples](https://rapidapi.com/omarmhaimdat/api/yh-finance/)

### Supported Endpoints
- **Stock Summary**: `/stock/v2/get-summary`
- **Auto-complete**: `/auto-complete`
- **Historical Data**: `/stock/v3/get-chart`
- **News**: `/news/v2/list`

## 🎯 Next Steps

1. **Test the integration** with your RapidAPI key
2. **Customize stock symbols** based on your needs
3. **Adjust update frequency** for optimal performance
4. **Monitor API usage** through RapidAPI dashboard
5. **Scale up** to paid plans if needed

## 💡 Pro Tips

- **Start with free tier** to test functionality
- **Use appropriate symbols** for your target market
- **Monitor rate limits** to avoid API blocks
- **Implement error handling** for production use
- **Consider WebSocket** for real-time updates (premium feature)

Your stock ticker should now display real-time data from Yahoo Finance via RapidAPI! 🎉

## 🆘 Need Help?

- Check the browser console for error messages
- Verify your RapidAPI subscription is active
- Review the API response format
- Contact RapidAPI support if needed
- Check the main [STOCK_API_SETUP.md](./STOCK_API_SETUP.md) for general troubleshooting





























