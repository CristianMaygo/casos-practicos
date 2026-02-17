from datetime import datetime
import pytz

timestamp = 1000
timezone = pytz.timezone('Europe/Moscow')

fecha_utc = datetime.utcfromtimestamp(timestamp)
fecha_utc = pytz.utc.localize(fecha_utc)

fecha_moscu = fecha_utc.astimezone(timezone)

print(fecha_moscu)