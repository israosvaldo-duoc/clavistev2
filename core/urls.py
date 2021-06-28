from django.urls import path
from .views import crear_celular, home, listado_celulares

urlpatterns = [
    path('', home, name="home"),
    path('listado-celulares/', listado_celulares, name="listado_celulares"),
    path('crear-celular/', crear_celular, name="crear_celular"),

]