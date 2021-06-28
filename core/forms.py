from django import forms
from django.forms import ModelForm
from .models import Celular

class CelularForm(ModelForm):

    class Meta:
        model = Celular
        fields = ['idCelular', 'marca', 'modelo', 'compania']