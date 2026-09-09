from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path("", views.home, name="home"),

    path("projects/", views.projects, name="projects"),

    path(
        "projects/<slug:slug>/",
        views.project_detail,
        name="project_detail"
    ),

    path("lab/", views.lab, name="lab"),

    path("about/", views.about, name="about"),

    path("contact/", views.contact, name="contact"),
]