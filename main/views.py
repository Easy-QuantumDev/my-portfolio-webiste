from django.shortcuts import render, get_object_or_404
from .models import Project


def home(request):
    projects = Project.objects.filter(
        is_featured=True
    ).order_by("-created_at")[:3]

    return render(
        request,
        "home.html",
        {"projects": projects}
    )


def projects(request):
    project_list = Project.objects.all().order_by("-created_at")

    category = request.GET.get("category")
    search = request.GET.get("search")

    if category and category != "all":
        project_list = project_list.filter(
            category=category
        )

    if search:
        project_list = project_list.filter(
            title__icontains=search
        )

    # تبدیل technologies به لیست
    for project in project_list:
        project.tech_list = [
            tech.strip()
            for tech in project.technologies.split(",")
            if tech.strip()
        ]

    return render(
        request,
        "projects.html",
        {
            "projects": project_list,
            "current_category": category or "all",
            "search": search or "",
        }
    )

def project_detail(request, slug):
    project = get_object_or_404(
        Project,
        slug=slug
    )

    project.tech_list = [
        tech.strip()
        for tech in project.technologies.split(",")
        if tech.strip()
    ]

    return render(
        request,
        "projects_detail.html",
        {"project": project}
    )


def lab(request):
    projects = Project.objects.filter(
        is_interactive=True
    ).order_by("-created_at")

    return render(
        request,
        "lab.html",
        {"projects": projects}
    )


def about(request):
    return render(
        request,
        "about.html"
    )


def contact(request):
    return render(
        request,
        "contact.html"
    )