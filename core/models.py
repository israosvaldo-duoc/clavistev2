from django.db import models
# Create your models here.

# Modelo Compañia
class Compania (models.Model):
    idCompania = models.IntegerField(primary_key=True, verbose_name="ID Compañia")
    nombreCompania = models.CharField(max_length=25, verbose_name="Nombre Compañia")

    def __str__(self):
        return self.nombreCompania

# Modelo Celular
class Celular (models.Model):
    idCelular = models.IntegerField(primary_key=True, verbose_name="ID Celular")
    marca = models.CharField(max_length=30, verbose_name="Marca Celular")
    modelo = models.CharField(max_length=30, verbose_name="Modelo Celular")
    compania = models.ForeignKey(Compania, on_delete=models.CASCADE)

    def __str__(self):
        return self.modelo
