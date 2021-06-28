from core.forms import CelularForm
from core.models import Celular
from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

def listado_celulares(request):
    # Creamos una variable que traiga el listado de celulares desde la BD
    celulares = Celular.objects.all()
    # Creamos un objeto data que traspasará los datos para utilizarlos en el html asociado
    data = {
        'celulares': celulares
    }
    # Traspasamos data como tercer parámetro al momento de randerizar 
    return render(request, 'core/listado_celulares.html', data)


def crear_celular(request):
    data = {
        'form': CelularForm()
    }

    if request.method == 'POST':
        formulario = CelularForm(request.POST)
        if formulario.is_valid():
            formulario.save()
            data['mensaje'] = "Celular agregado correctamente"

    return render(request, 'core/crear_celular.html', data)
