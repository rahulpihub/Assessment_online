from django.urls import path
from .views import StaffHomeView

urlpatterns = [
    path('staffhome/', StaffHomeView.as_view(), name='staff-home'),  # API endpoint
]
