"""test-main module."""
from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_read_main():
    """Test root app entry point"""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Duty Shifts Plugin Backend!"}
