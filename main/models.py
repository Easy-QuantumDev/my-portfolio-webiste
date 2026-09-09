from django.db import models


class Project(models.Model):

    CATEGORY_CHOICES = [
        ("frontend", "Frontend"),
        ("backend", "Backend"),
        ("fullstack", "Full Stack"),
        ("python", "Python"),
        ("security", "Security"),
    ]

    title = models.CharField(
        max_length=200
    )

    slug = models.SlugField(
        unique=True
    )

    description = models.TextField()

    category = models.CharField(
        max_length=30,
        choices=CATEGORY_CHOICES
    )

    technologies = models.CharField(
        max_length=500
    )

    github_url = models.URLField(
        blank=True
    )

    demo_url = models.URLField(
        blank=True
    )

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    is_featured = models.BooleanField(
        default=False
    )

    is_interactive = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title