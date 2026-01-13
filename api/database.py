# backend/database.py
from sqlmodel import SQLModel, create_engine, Session

# ⚠️ PASTE URL DARI VERCEL DI BAWAH INI (Di dalam tanda kutip)
# Contoh: "postgresql://default:password@ep-xyz.region.postgres.vercel-storage.com:5432/verceldb"
DATABASE_URL = "postgresql://neondb_owner:npg_u7oz4WbBXjin@ep-winter-cloud-ahowclw2-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Trik khusus agar driver psycopg2 bisa jalan lancar dengan URL Vercel (mengubah postgres:// jadi postgresql://)
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Membuat Engine (Mesin Database)
engine = create_engine(DATABASE_URL)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
