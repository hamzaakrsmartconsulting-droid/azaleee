// Stock API Configuration
// This file allows you to easily switch between different stock API providers

// Common stock symbols for major indices
export const STOCK_SYMBOLS = {
  CAC40: '^FCHI',        // CAC 40 (France)
  NASDAQ: '^NDX',         // Nasdaq 100 (US)
  DOW_JONES: '^DJI',      // Dow Jones Industrial Average (US)
  S_P_500: '^GSPC',       // S&P 500 (US)
  FTSE_100: '^FTSE',      // FTSE 100 (UK)
  DAX: '^GDAXI',          // DAX (Germany)
  NIKKEI: '^N225',        // Nikkei 225 (Japan)
  EUR_USD: 'EURUSD=X',    // Euro to US Dollar
  GBP_USD: 'GBPUSD=X',    // British Pound to US Dollar
  USD_JPY: 'USDJPY=X'     // US Dollar to Japanese Yen
};

// API Provider Configurations
export const API_PROVIDERS = {
  // Yahoo Finance (Free tier available)
  YAHOO_FINANCE: {
    name: 'Yahoo Finance',
    baseUrl: 'https://query1.finance.yahoo.com',
    endpoints: {
      quote: '/v8/finance/chart/{symbol}',
      search: '/v1/finance/search'
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    requiresAuth: false,
    rateLimit: '1000 requests per hour',
    documentation: 'https://finance.yahoo.com/apis'
  },

  // Alpha Vantage (Free tier: 5 API calls per minute, 500 per day)
  ALPHA_VANTAGE: {
    name: 'Alpha Vantage',
    baseUrl: 'https://www.alphavantage.co/query',
    endpoints: {
      quote: '?function=GLOBAL_QUOTE&symbol={symbol}&apikey={apiKey}',
      search: '?function=SYMBOL_SEARCH&keywords={query}&apikey={apiKey}'
    },
    requiresAuth: true,
    rateLimit: '5 requests per minute (free tier)',
    documentation: 'https://www.alphavantage.co/documentation/'
  },

  // Finnhub (Free tier: 60 API calls per minute)
  FINNHUB: {
    name: 'Finnhub',
    baseUrl: 'https://finnhub.io/api/v1',
    endpoints: {
      quote: '/quote?symbol={symbol}&token={apiKey}',
      search: '/search?q={query}&token={apiKey}'
    },
    requiresAuth: true,
    rateLimit: '60 requests per minute (free tier)',
    documentation: 'https://finnhub.io/docs/api'
  },

  // IEX Cloud (Free tier: 50,000 messages per month)
  IEX_CLOUD: {
    name: 'IEX Cloud',
    baseUrl: 'https://cloud.iexapis.com/stable',
    endpoints: {
      quote: '/stock/{symbol}/quote?token={apiKey}',
      search: '/search/{query}?token={apiKey}'
    },
    requiresAuth: true,
    rateLimit: '50,000 messages per month (free tier)',
    documentation: 'https://iexcloud.io/docs/api/'
  },

  // Polygon.io (Free tier: 5 API calls per minute)
  POLYGON: {
    name: 'Polygon.io',
    baseUrl: 'https://api.polygon.io',
    endpoints: {
      quote: '/v2/aggs/ticker/{symbol}/prev?adjusted=true&apiKey={apiKey}',
      search: '/v3/reference/tickers?search={query}&apiKey={apiKey}'
    },
    requiresAuth: true,
    rateLimit: '5 requests per minute (free tier)',
    documentation: 'https://polygon.io/docs/'
  },

  // RapidAPI YH Finance (Yahoo Finance via RapidAPI)
  RAPIDAPI_YH_FINANCE: {
    name: 'RapidAPI YH Finance',
    baseUrl: 'https://yh-finance.p.rapidapi.com',
    endpoints: {
      quote: '/stock/v2/get-summary?symbol={symbol}&region=US',
      search: '/auto-complete?query={query}&lang=en'
    },
    headers: {
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '{apiKey}'
    },
    requiresAuth: true,
    rateLimit: '1000 requests per month (free tier)',
    documentation: 'https://rapidapi.com/omarmhaimdat/api/yh-finance/'
  }
};

// Default configuration
export const DEFAULT_CONFIG = {
  provider: 'YAHOO_FINANCE',
  symbols: [STOCK_SYMBOLS.CAC40, STOCK_SYMBOLS.NASDAQ, STOCK_SYMBOLS.DOW_JONES, STOCK_SYMBOLS.EUR_USD],
  updateInterval: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
  fallbackData: {
    CAC40: { value: 7822.67, change: 0.07, isPositive: true },
    NASDAQ: { value: 23054.24, change: 0.23, isPositive: true },
    DOW_JONES: { value: 44245.15, change: -0.51, isPositive: false },
    EUR_USD: { value: 1.1595, change: 0, isPositive: true }
  }
};

// Helper function to get provider configuration
export function getProviderConfig(providerName = DEFAULT_CONFIG.provider) {
  return API_PROVIDERS[providerName] || API_PROVIDERS.YAHOO_FINANCE;
}

// Helper function to get symbol by name
export function getSymbolByName(name) {
  const symbolMap = {
    'CAC40': STOCK_SYMBOLS.CAC40,
    'NASDAQ': STOCK_SYMBOLS.NASDAQ,
    'DOW_JONES': STOCK_SYMBOLS.DOW_JONES,
    'S_P_500': STOCK_SYMBOLS.S_P_500,
    'FTSE_100': STOCK_SYMBOLS.FTSE_100,
    'DAX': STOCK_SYMBOLS.DAX,
    'NIKKEI': STOCK_SYMBOLS.NIKKEI,
    'EUR_USD': STOCK_SYMBOLS.EUR_USD,
    'GBP_USD': STOCK_SYMBOLS.GBP_USD,
    'USD_JPY': STOCK_SYMBOLS.USD_JPY
  };
  
  return symbolMap[name] || name;
}

// Helper function to format API response based on provider
export function formatApiResponse(provider, data, symbol) {
  switch (provider) {
    case 'YAHOO_FINANCE':
      return formatYahooFinanceResponse(data, symbol);
    case 'ALPHA_VANTAGE':
      return formatAlphaVantageResponse(data, symbol);
    case 'FINNHUB':
      return formatFinnhubResponse(data, symbol);
    case 'IEX_CLOUD':
      return formatIexCloudResponse(data, symbol);
    case 'POLYGON':
      return formatPolygonResponse(data, symbol);
    case 'RAPIDAPI_YH_FINANCE':
      return formatRapidApiYhFinanceResponse(data, symbol);
    default:
      return formatGenericResponse(data, symbol);
  }
}

// Response formatters for different providers
function formatYahooFinanceResponse(data, symbol) {
  try {
    const result = data.chart.result[0];
    const quote = result.quote[0];
    const previousClose = result.meta.previousClose;
    const currentPrice = quote.close;
    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(changePercent.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting Yahoo Finance response:', error);
    return null;
  }
}

function formatAlphaVantageResponse(data, symbol) {
  try {
    const quote = data['Global Quote'];
    const currentPrice = parseFloat(quote['05. price']);
    const change = parseFloat(quote['09. change']);
    const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(changePercent.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting Alpha Vantage response:', error);
    return null;
  }
}

function formatFinnhubResponse(data, symbol) {
  try {
    const currentPrice = data.c;
    const previousClose = data.pc;
    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(changePercent.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting Finnhub response:', error);
    return null;
  }
}

function formatIexCloudResponse(data, symbol) {
  try {
    const currentPrice = data.latestPrice;
    const previousClose = data.previousClose;
    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(changePercent.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting IEX Cloud response:', error);
    return null;
  }
}

function formatPolygonResponse(data, symbol) {
  try {
    const result = data.results[0];
    const currentPrice = result.c;
    const previousClose = result.o;
    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(changePercent.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting Polygon response:', error);
    return null;
  }
}

function formatRapidApiYhFinanceResponse(data, symbol) {
  try {
    // RapidAPI YH Finance returns data in a specific format
    const summary = data.summaryDetail || data.price || {};
    const currentPrice = summary.regularMarketPrice?.raw || summary.regularMarketPrice || summary.price || 0;
    const previousClose = summary.previousClose?.raw || summary.previousClose || 0;
    
    let change = 0;
    let changePercent = 0;
    
    if (previousClose && currentPrice) {
      change = currentPrice - previousClose;
      changePercent = (change / previousClose) * 100;
    } else {
      // Try to get change from other fields
      change = summary.regularMarketChange?.raw || summary.regularMarketChange || summary.change || 0;
      changePercent = summary.regularMarketChangePercent?.raw || summary.regularMarketChangePercent || summary.changePercent || 0;
    }
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(changePercent.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting RapidAPI YH Finance response:', error);
    return null;
  }
}

function formatGenericResponse(data, symbol) {
  // Generic formatter for unknown providers
  try {
    const currentPrice = data.price || data.close || data.currentPrice || data.value || 0;
    const change = data.change || data.changePercent || data.percentageChange || 0;
    
    return {
      value: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(change.toFixed(2)),
      isPositive: change >= 0
    };
  } catch (error) {
    console.error('Error formatting generic response:', error);
    return null;
  }
}
