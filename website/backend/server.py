from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI()

# CORS Middleware
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Service(BaseModel):
    id: str
    title: str
    description: str
    icon: str

class Project(BaseModel):
    id: str
    title: str
    category: str
    image: str

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Mock Data
services_data = [
    Service(id="1", title="Web Development", description="Modern, responsive websites", icon="code"),
    Service(id="2", title="App Development", description="Native and cross-platform apps", icon="smartphone"),
    Service(id="3", title="UI/UX Design", description="User-centered design solutions", icon="pen-tool"),
]

projects_data = [
    Project(id="1", title="E-commerce Platform", category="Web", image="https://via.placeholder.com/300"),
    Project(id="2", title="Finance Dashboard", category="Web App", image="https://via.placeholder.com/300"),
]

# Routes
@app.get("/api/services", response_model=List[Service])
async def get_services():
    return services_data

@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    return projects_data

@app.post("/api/contact")
async def contact_form(form: ContactForm):
    # Simulate processing
    print(f"Received contact form: {form}")
    return {"message": "Message received successfully", "data": form}

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
