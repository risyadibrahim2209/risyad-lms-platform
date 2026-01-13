# backend/main.py
from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, Field, Session, select
from database import engine, create_db_and_tables, get_session
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional

# --- 1. MODEL DATA (Bentuk Tabel di Database) ---


class Course(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    thumbnail: Optional[str] = None
    level: str = "Beginner"


# --- 2. SETUP APLIKASI ---
app = FastAPI()

# PENTING: Mengizinkan Next.js (Port 3000) mengakses Python (Port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# --- 3. API ENDPOINTS (Jalur Data) ---

# GET: Ambil semua course


@app.get("/courses", response_model=List[Course])
def read_courses(session: Session = Depends(get_session)):
    courses = session.exec(select(Course)).all()
    return courses

# POST: Tambah course baru


@app.post("/courses", response_model=Course)
def create_course(course: Course, session: Session = Depends(get_session)):
    session.add(course)
    session.commit()
    session.refresh(course)
    return course

# GET: Hello World (Cek server nyala/tidak)


@app.get("/")
def read_root():
    return {"message": "Backend Python FastAPI Siap!"}
