import hashlib
import string

objetivo = "49f68a5c8493ec2c0bf489821c21fc3b"

for a in string.printable:
    for b in string.printable:
        intento = a + b
        hash_md5 = hashlib.md5(intento.encode()).hexdigest()
        if hash_md5 == objetivo:
            print("La contraseña es:", intento)
