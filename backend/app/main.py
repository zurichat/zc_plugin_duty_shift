"""main module."""

from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    """The root backend route"""
    return {"msg": "Duty Shifts Backend!"}


@app.get("/items/{item_id}")
def read_item(item_id: int, query: Optional[str] = None):
    """Endpoint to get item"""
    return {"item_id": item_id, "query": query}
