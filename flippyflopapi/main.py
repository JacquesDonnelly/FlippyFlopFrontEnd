from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()

# TODO: add prefix "/api/"
# TODO: follow rest of auth docs

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/card")
async def root(token: str = Depends(oauth2_scheme)):
    return {
        "front": "front of card",
        "back": "back of card",
        "token": token
    }

