import yfinance as yf
import json

class Stock:
    def __init__(self,ticker) -> None:
        self.ticker = yf.Ticker(ticker)
        self.info = self.ticker.info
        self.history = self.ticker.history(period="1mo")
        self.dividends = self.ticker.dividends
        self.splits = self.ticker.splits
        self.actions = self.ticker.actions
    
    def get_info(self):
        return self.info # Dictionary
    
    def get_history(self):
        return self.history # DataFrame
    
    def get_dividends(self):
        return self.dividends # Dividends
    
    def get_splits(self):
        return self.splits # Splits
    
    def get_actions(self):
        return self.actions # Dividends and splits



def generate_stock(ticker):
    stock = Stock(ticker).get_history()
    # add 
    historical = []
    for index, row in stock.iterrows():
        historical.append({"date":str(index),"open":row["Open"],"high":row["High"],"low":row["Low"],"close":row["Close"],"volume":row["Volume"]})
    return historical

    
    
